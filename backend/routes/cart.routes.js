import express from "express";
import { authMiddelware } from "../middleware/auth.middelware.js";
import {
  addToCart,
  getCart,
  removeCartItem,
  updateCartItemQuantity,
} from "../controlers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.post("/", authMiddelware, addToCart);
cartRouter.get("/", authMiddelware, getCart);
cartRouter.patch("/", authMiddelware, updateCartItemQuantity);
cartRouter.delete("/", authMiddelware, removeCartItem);

export default cartRouter;
