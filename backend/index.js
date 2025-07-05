import express from "express";
import cors from "cors";
import { connectDb } from "./utils/connectDb.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import proudctRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
import addressRouter from "./routes/adress.routes.js";
import orderRouter from "./routes/order.route.js";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", userRouter);
app.use("/product", proudctRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/address", addressRouter);
app.listen(port, async () => {
  await connectDb();
  console.log("listening on port : " + port);
});
