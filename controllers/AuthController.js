import AuthServices from "../services/AuthServices.js";
import UserServices from "../services/UserServices.js";

class AuthController {
	async signup(request, response) {
		try {
			// Vérifier si un utilisateur existe avec ce pseudo
			const checkIfUsernameExists = await UserServices.checkIfUsernameExists(
				request
			);
			const checkIfEmailExists = await UserServices.checkIfEmailExists(request);

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
			console.log(error);
		}
	}

	async login(request, response) {
		try {
			const token = await AuthServices.login(request, response);
			// Envoie en réponse le token créé via le service
			response.json({
				message: "Connexion réussie !",
				token: token,
			});
		} catch (error) {
			console.log(error);
		}
	}
}

export default new AuthController();
