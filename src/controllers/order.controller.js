import { DB } from "../db/index.js";
import APIError from "../responses/classes/APIError.js";
import httpStatus from "http-status";

const processOrder = async ({ body: { items, address } }, res, next) => {
  try {
    let totalBeforeTax = await getTotalBeforeTax(items);
    let totalAfterTax = getTotalAfterTax(totalBeforeTax, address);

    await insertOrder(items, address);
    res.json(
      successResponse({
        totalBeforeTax,
        totalAfterTax,
      })
    );
  } catch (error) {
    next(error);
  }
};

const getTotalBeforeTax = async (items) => {
  let priceMap = await getProductPriceMap(items);

  let total = 0;
  for (let orderItem of items) {
    let productPrice = priceMap[orderItem.id];
    if (!productPrice) {
      throw new APIError(httpStatus.PRECONDITION_FAILED, `Haven't found product with id:${orderItem.id}`);
    }

    let totalQuantityPriceBeforeTax = orderItem.quantity * productPrice;
    total += totalQuantityPriceBeforeTax;
  }
  return total;
};

const getProductPriceMap = async (products) => {
  let productPrices = await DB.Product.findAll({
    attributes: ["price", "id"],
    where: {
      id: products.map((item) => item.id),
    },
  });

  let priceMap = {};

  for (let productPrice of productPrices) {
    priceMap[productPrice.id] = productPrice.price;
  }

  return priceMap;
};

const getTotalAfterTax = (price, address) => {
  let priceAfterTax;
  switch (address.state) {
    case "FL":
      priceAfterTax = price + 0.07 * price;
      break;
    case "GA":
      priceAfterTax = price + 0.1 * price;
      break;
    default:
      priceAfterTax = price;
  }

  return priceAfterTax;
};

const insertOrder = async (items, address) => {
  let order = await DB.Order.create({
    address,
  });

  for (let item of items) {
    await DB.OrderProduct.create({
      orderId: order.id,
      productId: item.id,
    });
  }
};

export default {
  processOrder,
};
