const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/Sequelize");

class Author extends Model {}

Author.init(
	{
		au_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		au_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		au_age: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		au_isdead: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: "author",
		tableName: "author",
		timestamps: false,
	}
);

module.exports = Author;
