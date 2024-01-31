const { Sequelize, DataTypes } = require('sequelize');

// Replace 'your_database_url' with your actual PostgreSQL database URL
const databaseUrl = 'postgres://icmrthrm:V7w9-YIVpz137XAfLMCIxtZoLgH3kCet@arjuna.db.elephantsql.com/icmrthrm';

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres'
});

const Product = sequelize.define('Products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.FLOAT,
  discountPercentage: DataTypes.FLOAT,
  rating: DataTypes.FLOAT,
  stock: DataTypes.INTEGER,
  brand: DataTypes.STRING,
  category: DataTypes.STRING,
  thumbnail: DataTypes.STRING,
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  }
});

module.exports = Product;
