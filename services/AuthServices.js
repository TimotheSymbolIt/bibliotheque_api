const User = require("../models/User");
const generateToken = require("../utils/token");

class AuthService {
	async signup(request, response, next) {
		try {
			const user = request.body;
			// user['us_username'] = user['us_username'].toLowerCase();

			return await User.create(user);
		} catch (error) {
			next(error);
		}
	}

	async login(request, response, next) {
		try {
			const user = await User.findOne({
				where: { us_username: request.body.us_username },
			});

			if (user.dataValues.us_password === request.body.us_password) {
				const token = generateToken(user);
				return token;
			} else {
				response.status(400);
				response.json({
					error: "Les identifiants ne sont pas corrects",
				});
			}
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new AuthService();
