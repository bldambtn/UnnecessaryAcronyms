// Import the Model and DataTypes classes from Sequelize,
// which will be used to define the structure and behavior of the User model.
const { Model, DataTypes } = require("sequelize");

// Import the bcrypt library, which will be used for hashing and comparing passwords.
const bcrypt = require("bcrypt");

// Import the Sequelize instance, which is configured to connect to the database.
const sequelize = require("../config/connection");

// Define a User class that extends Sequelize's Model class.
// This class represents the User table in the database and includes methods for interacting with user data.
class User extends Model {
  // Instance method to check if the provided password matches the hashed password stored in the database.
  // It uses bcrypt's compareSync method to compare the plain text login password with the hashed password.
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Initialize the User model by defining its schema and options.
User.init(
  {
    // Define the 'id' field as an integer, not null, and the primary key for the table.
    // It will auto-increment, meaning a new value is automatically assigned to each new record.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the 'username' field as a string and make it required (not null).
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the 'email' field as a string, make it required, and ensure it's unique.
    // The 'validate' option checks that the value is a valid email format.
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // Define the 'password' field as a string, make it required, and enforce a minimum length of 6 characters.
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    // Hooks are lifecycle events that allow us to execute code before or after certain actions.
    // The 'beforeCreate' hook is used here to hash the user's password before saving it to the database.
    hooks: {
      async beforeCreate(newUserData) {
        // Hash the user's password with a salt round of 10 before saving the user to the database.
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    // Pass the Sequelize instance, which connects this model to the specific database.
    sequelize,
    // Disable automatic timestamps for this model (i.e., no createdAt or updatedAt fields).
    timestamps: false,
    // Prevent Sequelize from pluralizing the table name.
    freezeTableName: true,
    // Use underscores instead of camel-casing for automatically added fields (e.g., `created_at` instead of `createdAt`).
    underscored: true,
    // Set the name of the model, which Sequelize uses internally.
    modelName: "user",
  }
);

// Export the User model so that it can be imported and used in other parts of the application.
module.exports = User;
