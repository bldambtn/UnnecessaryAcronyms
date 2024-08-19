// Import Sequelize's Model class and DataTypes for defining the model schema
const { Model, DataTypes } = require("sequelize");

// Import the configured Sequelize instance for database connection
const sequelize = require("../config/connection");

// Define the Blog model as an extension of Sequelize's Model class
class Blog extends Model {}

// Initialize the Blog model with its schema and configuration
Blog.init(
  {
    // Define the 'id' field as an integer that auto-increments and serves as the primary key
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Define the 'title' field as a string that cannot be null
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the 'user_id' field as a foreign key referencing the 'user' table's 'id' field
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    // Link the model to the Sequelize instance for the database connection
    sequelize,
    // Set the model name to 'Blog' for Sequelize's internal use
    modelName: "Blog",
    // Set the table name to 'blogs' in the database
    tableName: "blogs",
    // Enable timestamps for 'created_at' and 'updated_at' fields
    timestamps: true,
  }
);

// Export the Blog model for use in other parts of the application
module.exports = Blog;
