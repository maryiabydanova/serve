import express from "express";
import orderRoutes from "./order.route.js";

const router = express.Router();

const ROUTES = [
  {
    path: "/order",
    route: orderRoutes,
  },
];

ROUTES.forEach((route) => {
  router.use(route.path, route.route);
});

export { router, ROUTES };
