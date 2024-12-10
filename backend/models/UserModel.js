import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        isEmail: true, 
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    umur: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      validate: {
        isInt: true,
        min: 0, 
      },
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    hobi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();