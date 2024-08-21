// Import necessary modules from Sequelize and the database connection
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Define the Blog model by extending Sequelize's Model class
class Blog extends Model {}

// Initialize the Blog model with its fields and configuration
Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

// Export the Blog model for use in other parts of the application
module.exports = Blog;
