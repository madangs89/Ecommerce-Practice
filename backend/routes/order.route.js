import express from "express";
import { addOrder, getOrder, updateOrder } from "../controlers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", addOrder);
orderRouter.get("/", getOrder);
orderRouter.patch("/", updateOrder);

export default orderRouter;
