const express = require("express");
const router = express.Router();
const { register, login, logout, authToken, getUser, getProducts } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/dashboard",authToken, getUser);
router.post("/products", getProducts);
module.exports = router;
