const AuthorService = require("../services/AuthorService");

class AuthorController {
	async getAllAuthor(request, response) {
		try {
			const authors = await AuthorService.getAllAuthors(request, response);
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
