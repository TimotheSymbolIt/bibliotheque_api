import AuthorServices from "../services/AuthorServices.js";

class AuthorController {
	async getAllAuthors(request, response) {
		try {
			const authors = await AuthorServices.getAllAuthors();
			response.json(authors);
		} catch (error) {
			response.status(500);
			response.json({
				error: "Une erreur est survenue lors de la récupération des auteurs",
			});
		}
	}
}

export default new AuthorController();
