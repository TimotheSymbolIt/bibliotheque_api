import Sequelize from "sequelize";

// Configure une connexion à la base de données
const sequelize = new Sequelize("bibliotheque", "postgres", "admin", {
	host: "localhost",
	dialect: "postgresql",
	port: 5432,
});

export default sequelize;
