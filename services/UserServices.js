import User from "../models/User.js";

class UserService {
	async checkIfUsernameExists(request) {
		try {
			// Trouve un utilisateur..
			const user = await User.findOne({
				// .. où la colonne us_username vaut la valeur de request.body.us_username
				where: { us_username: request.body.us_username },
			});
			// console.log(user);
			return user;
		} catch (error) {
			console.log(error);
		}
	}

	async checkIfEmailExists(request) {
		try {
			// Trouve un utilisateur..
			return await User.findOne({
				// .. où la colonne us_email vaut la valeur de request.body.us_email
				where: { us_email: request.body.us_email },
			});
		} catch (error) {
			console.log(error);
		}
	}
}

export default new UserService();
