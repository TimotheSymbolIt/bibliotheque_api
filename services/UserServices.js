const sequelize = require("../config/Sequelize");
const User = require("../models/User");

class UserService {
	async checkIfUsernameExists(request, response, next) {
		try {
			const user = await User.findOne({
				where: { us_username: request.body.us_username.toLowerCase() },
			});
			console.log(user);
			return user;
		} catch (error) {
			next(error);
		}
	}

	async checkIfEmailExists(request, response) {
		try {
			return await User.findOne({
				where: { us_email: request.body.us_email },
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new UserService();
