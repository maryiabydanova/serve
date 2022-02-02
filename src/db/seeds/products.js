export default function (db) {
  return db.Product.bulkCreate([
    {
      name: "Product 1",
      price: 10,
    },
    {
      name: "Product 2",
      price: 20,
    },
    {
      name: "Product 3",
      price: 30,
    },
    {
      name: "Product 4",
      price: 40,
    },
  ]);
}
