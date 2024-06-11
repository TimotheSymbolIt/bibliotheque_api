import BookServices from "../services/BookServices.js";

class BookController {
	async getAllBooks(request, response) {
		try {
			const books = await BookServices.getAllBooks();
			response.json(books);
		} catch (error) {
			response.status(500);
			response.json({
				error: "Une erreur est survenue lors de la récupération des livres",
			});
		}
	}

	async borrowABook(request, response) {
		try {
			await BookServices.borrowABook(request);
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
			const book = await BookServices.returnABook(request);
			response.json({ message: "Livre retourné !", book });
		} catch (error) {
			response.status(500);
			response.json({
				error: "Une erreur est survenue lors de la modification du livre",
			});
		}
	}
	async addBook(request, response) {
		try {
			// console.log(request.body);
			const book = await BookServices.addBook(request);
			response.json({ message: "Livre ajouté !", book });
		} catch (error) {
			response.status(500);
			response.json({
				error: "Une erreur est survenue lors de l'ajout du livre",
			});
		}
	}
}

export default new BookController();
