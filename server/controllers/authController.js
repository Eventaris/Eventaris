const User = require("../models/User");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { nama, email, password, phone } = req.body;

    // Check user ada belum
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: "Email Sudah Terdaftar!" });
    }

    // Enkripsi password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Buat user, yang masuk db hashed password
    const user = await User.create({
      nama,
      email,
      password: hashedPassword,
      phone,
    });

    res.status(201).json({
      message: "User registered successfully!",
      user: {
        id: user.id,
        nama: user.nama,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error!" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user udah ada belum
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Belum Terdaftar!" });
    }

    // Nah kek gini kan, check sama ga yang inputan
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password Salah!" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge:  24 * 60 * 60 * 1000,
    });
    res.json({
      message: "Login successful!",
      user: {
        id: user.id,
        nama: user.nama,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error!" });
  }
};

const authToken = async (req, res, next) => {
  try {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({ message: "Anda Belum Login, Login Terlebih Dahulu" });
  }else{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } 
}catch (error) {
  return res.status(400).json({ message: "Anda mencoba untuk masuk dengan token palsu" });
}
};

const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }

    res.json({
      user: {
        nama: user.nama,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const logout = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Anda Berhasil Logout" });
};

module.exports = {
  register,
  login,
  logout,
  authToken,
  getUser,
};
