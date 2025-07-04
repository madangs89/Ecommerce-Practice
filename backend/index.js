import express from "express";
import cors from "cors";
import { connectDb } from "./utils/connectDb.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import proudctRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
import addressRouter from "./routes/adress.routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", userRouter);
app.use("/product", proudctRouter);
app.use("/cart", cartRouter);
app.use("/address", addressRouter);
app.listen(port, async () => {
  await connectDb();
  console.log("listening on port : " + port);
});
