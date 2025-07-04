import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price must be positive"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      // enum: ["electronics", "fashion", "home", "beauty", "sports", "other"],
      // default: "other",
    },
    images: {
      type: [String], // array of image URLs
      validate: [(val) => val.length > 0, "At least one image is required"],
    },
    countInStock: {
      type: Number,
      default: 1,
      min: [0, "Stock cannot be negative"],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
