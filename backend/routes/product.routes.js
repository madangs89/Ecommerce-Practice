import express from "express";
import {
  addManyProducts,
  addProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controlers/produt.controlelr.js";
const proudctRouter = express.Router();

proudctRouter.get("/", getProducts);
proudctRouter.post("/", addProduct);
proudctRouter.post("/many", addManyProducts);
proudctRouter.get("/:id", getProductById);
proudctRouter.patch("/:id", updateProduct);
proudctRouter.delete("/:id", deleteProduct);

export default proudctRouter;
