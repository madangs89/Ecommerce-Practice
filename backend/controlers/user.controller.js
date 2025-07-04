import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../modles/user.model.js";
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      "madangsnaiknavya",
      {
        expiresIn: "7d",
      }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ seccess: false, message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ seccess: false, message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, role: newUser.role },
      "madangsnaiknavya",
      {
        expiresIn: "7d",
      }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    res.status(201).json({
      message: "User registered successfully",
      success: true,
      user: { id: newUser._id, email: newUser.email, role: newUser.role },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error", success: false });
  }
};

export const isAuthenticated = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    return res
      .status(200)
      .json({ message: "User authenticated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res
      .status(200)
      .json({ message: "User logged out successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};
