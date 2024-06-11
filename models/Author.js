import { Model, DataTypes } from "sequelize";
import sequelize from "../config/Sequelize.js";
import Book from "./Book.js";

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

Author.hasMany(Book, {
	foreignKey: "au_id",
});

Book.belongsTo(Author, {
	foreignKey: "au_id",
});

export default Author;
