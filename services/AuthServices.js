import generateToken from "../utils/token.js";
import User from "../models/User.js";

class AuthService {
	async signup(request) {
		try {
			const user = request.body;
			// user['us_username'] = user['us_username'].toLowerCase();

			return await User.create(user);
		} catch (error) {
			console.log(error);
		}
	}

	async login(request, response) {
		try {
			// Vérifier si un utilisateur existe par pseudo
			const user = await User.findOne({
				where: { us_username: request.body.us_username },
			});

			// Si le mot de passe d'un utilisateur existant correspond au mot de passe envoyé via le front
			if (user.dataValues.us_password === request.body.us_password) {
				// Alors je génère un token et le retourne
				const token = generateToken(user);
				return token;
			} else {
				// Sinon erreur
				response.status(400);
				response.json({
					error: "Les identifiants ne sont pas corrects",
				});
			}
		} catch (error) {
			console.log(error);
		}
	}
}

export default new AuthService();
