const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Home extends Model {}

Home.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "home",
  }
);

module.exports = Home;
