const Sequelize = require("sequelize");

const sequelize = new Sequelize("bibliotheque", "postgres", "admin", {
	host: "localhost",
	dialect: "postgresql",
	port: 5432,
});

module.exports = sequelize;
