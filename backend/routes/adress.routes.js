import express from "express";
import { authMiddelware } from "../middleware/auth.middelware.js";
import {
  addAddress,
  deleteAddress,
  getAddresses,
  updateAddress,
} from "../controlers/adress.controler.js";

const addressRouter = express.Router();

addressRouter.post("/", authMiddelware, addAddress);
addressRouter.get("/", authMiddelware, getAddresses);
addressRouter.patch("/", authMiddelware, updateAddress);
addressRouter.delete("/", authMiddelware, deleteAddress);

export default addressRouter;
