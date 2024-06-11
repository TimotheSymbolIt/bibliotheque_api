const AuthServices = require("../services/AuthServices");
const UserServices = require("../services/UserServices");

class AuthController {
	async signup(request, response, next) {
		try {
			// Vérifier si un utilisateur existe avec ce pseudo
			const checkIfUsernameExists = await UserServices.checkIfUsernameExists(
				request,
				response,
				next
			);
			const checkIfEmailExists = await UserServices.checkIfEmailExists(
				request,
				response,
				next
			);

			if (checkIfUsernameExists || checkIfEmailExists) {
				response.status(400);
				response.json({
					error: "Cet id ou cet email est déjà utilisé",
				});
			}

			if (!checkIfEmailExists && !checkIfUsernameExists) {
				const newUser = await AuthServices.signup(request, response);
				response.json({
					message: "Inscription réussie !",
					user: newUser.dataValues,
				});
			}
		} catch (error) {
			next(error);
		}
	}

	async login(request, response, next) {
		try {
			const token = await AuthServices.login(request, response, next);
			response.json({
				message: "Connexion réussie !",
				token: token,
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new AuthController();
