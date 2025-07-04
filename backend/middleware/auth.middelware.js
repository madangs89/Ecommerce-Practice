import jwt from "jsonwebtoken";
export const authMiddelware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token provided", success: false });
    }
    const decoded = jwt.verify(token, "madangsnaiknavya");
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Server Isseu whiel chekcing toeken", success: false });
  }
};
