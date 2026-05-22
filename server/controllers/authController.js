import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// REGISTER
export const register = async (req, res) => {
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      10
    );

    // Create user
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    res.json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.json({
      success: true,
      token,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};