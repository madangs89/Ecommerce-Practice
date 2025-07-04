import Product from "../modles/product.model.js";

export const addProduct = async (req, res) => {
  const {
    title,
    price,
    description,
    category,
    images,
    countInStock,
    isFeatured,
  } = req.body;
  try {
    if (!title || !price || !description || !category || !images) {
      return res
        .status(400)
        .json({ message: "Missing required fields", success: false });
    }
    const newProduct = await Product.create({
      title,
      price,
      description,
      category,
      images,
      countInStock: countInStock != undefined ? countInStock : 1,
      isFeatured: isFeatured || false,
    });

    res.status(201).json({
      message: "Product added successfully",
      success: true,
      newProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      success: true,
      products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  if (!id)
    return res
      .status(400)
      .json({ message: "Product id is required", success: false });
  try {
    const product = await Product.findById({ _id: id });
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    }
    res.json({
      success: true,
      product,
      message: "Product fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) {
      return res
        .status(400)
        .json({ message: "Product id is required", success: false });
    }

    const product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    }
    res.json({
      success: true,
      product,
      message: "Product updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) {
      return res
        .status(400)
        .json({ message: "Product id is required", success: false });
    }
    const product = await Product.findByIdAndDelete({ _id: id });
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    }
    res.json({
      success: true,
      product,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};
