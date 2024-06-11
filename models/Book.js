import { Model, DataTypes } from "sequelize";
import sequelize from "../config/Sequelize.js";

class Book extends Model {}

Book.init(
	{
		bo_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		bo_title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		bo_description: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		bo_isborrow: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		bo_url: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		au_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "author",
				key: "au_id",
			},
		},
	},
	{
		sequelize,
		modelName: "book",
		tableName: "book",
		timestamps: false,
	}
);

export default Book;
