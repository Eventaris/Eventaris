// index.js
require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(userRoutes);

app.get("/", (req, res, next) => {
  console.log("test");
  res.json({
    message: "Hello! Dari Database Eventaris APP",
  });
});

const PORT = process.env.PORT;

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
