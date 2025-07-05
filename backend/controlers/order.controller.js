import Address from "../modles/adress.model.js";
import Order from "../modles/order.schema.js";

export const addOrder = async (req, res) => {
  const {
    products,
    paymentMethod,
    paymentStatus,
    address, // can contain .id or full fields
    totalPrice,
    taxPrice,
    isPaid,
    isDelivered,
    userId,
    paidAt,
  } = req.body;

  try {
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    if (
      !products ||
      products.length === 0 ||
      !paymentMethod ||
      !paymentStatus ||
      !address ||
      !totalPrice ||
      typeof isPaid === "undefined" ||
      typeof isDelivered === "undefined"
    ) {
      return res.status(400).json({
        message: "All required fields must be provided",
        success: false,
      });
    }
    let finalAddress = address;
    if (address.id) {
      const foundAddress = await Address.findById(address.id);
      finalAddress = {
        fullName: foundAddress?.fullName,
        phoneNumber: foundAddress?.phoneNumber,
        pinCode: foundAddress?.pinCode,
        streetAddress: foundAddress?.streetAddress,
        city: foundAddress?.city,
        state: foundAddress?.state,
      };
    }
    const order = await Order.create({
      userId,
      orderItems: products,
      paymentMethod,
      paymentStatus,
      address: {
        fullName: finalAddress?.fullName,
        phoneNumber: finalAddress?.phoneNumber,
        pinCode: finalAddress?.pinCode,
        streetAddress: finalAddress?.streetAddress,
        city: finalAddress?.city,
        state: finalAddress?.state,
      },
      totalPrice,
      taxPrice,
      isPaid,
      paidAt,
      isDelivered,
    });

    return res.status(201).json({
      message: "Order added successfully",
      success: true,
      order,
    });
  } catch (error) {
    console.log("Add Order Error:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const getOrder = async (req, res) => {
  const { userId } = req.body;

  try {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });

    if (!orders || orders.length === 0) {
      return res.status(404).json({
        message: "No orders found for this user",
        success: false,
      });
    }
    const formattedOrders = orders.map((order) => ({
      orderId: order._id,
      orderItems: order.orderItems,
      paymentMethod: order.paymentMethod,
      paymentStatus: order.paymentStatus,
      isPaid: order.isPaid,
      isDelivered: order.isDelivered,
      totalPrice: order.totalPrice,
      createdAt: order.createdAt,
    }));

    return res.status(200).json({
      message: "Orders fetched successfully",
      success: true,
      userId,
      orders: formattedOrders,
    });
  } catch (error) {
    console.log("Get Order Error:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const updateOrder = async (req, res) => {
  const { userId, productId, status } = req.body;
  try {
    if (!userId || !productId || !status) {
      return res.status(400).json({
        message: "All required fields must be provided",
        success: false,
      });
    }
    const updated = await Order.findOneAndUpdate(
      {
        userId,
        "orderItems.productId": productId,
      },
      {
        $set: { "orderItems.$.status": status },
      },
      { new: true }
    );
    if (!updated)
      return res
        .status(404)
        .json({ message: "Order not found", success: false });
    return res
      .status(200)
      .json({ message: "Order updated successfully", success: true, updated });
  } catch (error) {
    console.log("Update Order Error:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};
