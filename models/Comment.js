// Import necessary modules from Sequelize and the database connection
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Define the Comment model by extending Sequelize's Model class
class Comment extends Model {}

// Initialize the Comment model with its fields and configuration
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "blog",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

// Export the Comment model for use in other parts of the application
module.exports = Comment;
