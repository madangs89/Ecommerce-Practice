import Cart from "../modles/cart.model.js";
import Product from "../modles/product.model.js";

export const addToCart = async (req, res) => {
  const user = req.user;
  const { productId, quantity = 1 } = req.body;

  try {
    if (!user) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    // 🔎 Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    }

    // 🛒 Find user's cart
    let cart = await Cart.findOne({ userId: user.id });
    if (!cart) {
      const newCart = await Cart.create({
        userId: user.id,
        items: [
          {
            productId,
            quantity,
            price: product.price,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res.json({
        message: "Product added to cart",
        success: true,
        cart: newCart,
      });
    }
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        productId,
        quantity,
        price: product.price,
      });
    }
    // 💰 Recalculate totalPrice
    cart.totalPrice = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    await cart.save();
    return res.json({
      message: "Product added to cart",
      success: true,
      cart,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while adding to cart",
      success: false,
    });
  }
};

export const getCart = async (req, res) => {
  const user = req.user;
  try {
    if (!user) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const cart = await Cart.findOne({ userId: user.id });
    if (!cart) {
      return res
        .status(404)
        .json({ message: "Cart not found", success: false });
    }
    return res.json({
      message: "Cart retrieved successfully",
      success: true,
      cart,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while retrieving cart",
      success: false,
    });
  }
};
export const updateCartItemQuantity = async (req, res) => {
  const user = req.user;
  const { productId, quantity = 1 } = req.body;
  try {
    if (!user) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const cart = await Cart.findOne({ userId: user.id });
    if (!cart) {
      return res
        .status(404)
        .json({ message: "Cart not found", success: false });
    }
    const item = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    if (!item) {
      return res
        .status(404)
        .json({ message: "Item not found in cart", success: false });
    }

    item.quantity = quantity;
    cart.totalPrice = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    await cart.save();
    return res.json({
      message: "Item quantity updated successfully",
      success: true,
      cart,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while updating item quantity",
      success: false,
    });
  }
};

export const removeCartItem = async (req, res) => {
  const user = req.user;
  const { productId } = req.body;
  try {
    if (!user) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const cart = await Cart.findOne({ userId: user.id });
    if (!cart) {
      return res
        .status(404)
        .json({ message: "Cart not found", success: false });
    }
    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (itemIndex == -1) {
      return res
        .status(404)
        .json({ message: "Item not found in cart", success: false });
    }
    cart.items.splice(itemIndex, 1);
    cart.totalPrice = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    await cart.save();
    return res.json({
      message: "Item removed from cart successfully",
      success: true,
      cart,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while removing item from cart",
      success: false,
    });
  }
};

export const clearCart = async (req, res) => {
  const user = req.user;
  try {
    if (!user) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const cart = await Cart.findOneAndDelete({ userId: user.id });
    if (!cart) {
      return res
        .status(404)
        .json({ message: "Cart not found", success: false });
    }
    return res.json({
      message: "Cart cleared successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while clearing cart",
      success: false,
    });
  }
};
