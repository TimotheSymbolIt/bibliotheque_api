const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/Sequelize");

class User extends Model {}

User.init(
	{
		us_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		us_username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		us_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		us_password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "user_account",
		tableName: "user_account",
		timestamps: false,
	}
);

module.exports = User;
