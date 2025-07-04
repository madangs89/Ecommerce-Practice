import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://madangsnaik:madangsnaik@cluster0.hgto3.mongodb.net/");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
  }
};
