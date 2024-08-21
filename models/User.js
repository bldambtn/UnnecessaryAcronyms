// Import Sequelize's Model class and DataTypes for defining the model schema
const { Model, DataTypes } = require("sequelize");

// Import bcrypt for password hashing
const bcrypt = require("bcrypt");

// Import the configured Sequelize instance for database connection
const sequelize = require("../config/connection");

// Define the User model as an extension of Sequelize's Model class
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Initialize the User model with its schema and configuration
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    // Define hooks to run before certain Sequelize lifecycle events
    hooks: {
      // Hash the user's password before creating a new user record
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    // Link the model to the Sequelize instance for the database connection
    sequelize,
    // Disable automatic timestamp fields (createdAt, updatedAt)
    timestamps: false,
    // Ensure table name matches the model name without pluralization
    freezeTableName: true,
    // Use underscored naming convention for automatically generated fields
    underscored: true,
    // Set the model name to 'user' for Sequelize's internal use
    modelName: "user",
  }
);

// Export the User model for use in other parts of the application
module.exports = User;
