const AuthorServices = require("../services/AuthorServices");

class AuthorController {
	async getAllAuthors(request, response) {
		try {
			const authors = await AuthorServices.getAllAuthors(request, response);
			response.json({ message: "Retour de tous mes auteurs", authors });
		} catch (error) {
			response.status(500);
			response.json({
				error: "Une erreur est survenue lors de la récupération des auteurs",
			});
		}
	}
}

module.exports = new AuthorController();
