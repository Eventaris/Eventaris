const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    createAt: {
      type: DataTypes.DATE,
      field: "create_at",
    },
    updateAt: {
      type: DataTypes.DATE,
      field: "update_at",
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
