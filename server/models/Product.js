const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const Products = sequelize.define(
  "Products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    //ini nanti tambah fk untuk toko yang bersangkutan
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    harga: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    timestamps: true,
  }
);

module.exports = Products;
