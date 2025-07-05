import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        qantity: { type: Number, required: true },
        price: { type: Number, required: true },
        status: {
          type: String,
          required: true,
          default: "Pending",
          enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
        },
      },
      { _id: false },
    ],
    address: {
      fullName: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      streetAddress: { type: String, required: true },
      city: { type: String, required: true },
      pinCode: { type: String, required: true },
      state: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ["COD", "Razorpay", "Stripe", "PayPal"], // customize as needed
    },
    paymentStatus: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
