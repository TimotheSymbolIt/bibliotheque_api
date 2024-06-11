const BookServices = require("../services/BookServices");

class BookController {
	async getAllBooks(request, response) {
		try {
			const books = await BookServices.getAllBooks();
			response.json({ message: "Retour de tous mes livres", books });
		} catch (error) {
			response.status(500);
			response.json({
				error: "Une erreur est survenue lors de la récupération des livres",
			});
		}
	}

	async borrowABook(request, response) {
		try {
			await BookServices.borrowABook(request, response);
			response.json({ message: "Livre emprunté !" });
		} catch (error) {
			response.status(500);
			response.json({
				error: "Une erreur est survenue lors de la modification du livre",
			});
		}
	}

	async returnABook(request, response) {
		try {
			const book = await BookServices.returnABook(request, response);
			response.json({ message: "Livre retourné !", book });
		} catch (error) {
			response.status(500);
			response.json({
				error: "Une erreur est survenue lors de la modification du livre",
			});
		}
	}
	async addBook(request, response, next) {
		try {
			console.log(request.body);
			const book = await BookServices.addBook(request, response, next);
			response.json({ message: "Livre ajouté !" });
		} catch (error) {
			response.status(500);
			response.json({
				error: "Une erreur est survenue lors de l'ajout du livre",
			});
		}
	}
}

module.exports = new BookController();
