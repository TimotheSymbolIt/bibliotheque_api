import Author from "../models/Author.js";
import Book from "../models/Book.js";

class BookService {
	async getAllBooks() {
		try {
			// Retourne tous les livres..
			return await Book.findAll({
				// .. mais exclu dans l'affichage la colonne au_id..
				attributes: {
					exclude: ["au_id"],
				},
				// .. et fait une jointure avec la table Author
				include: {
					model: Author,
					// attributes: ["au_name"],
				},
			});
		} catch (error) {
			console.log(error);
		}
	}

	async borrowABook(request) {
		try {
			// console.log(request.params.id)
			// Retourne la modification d'un livre
			return await Book.update(
				// Ici, on modifie la colonne bo_isborrow à vrai..
				{ bo_isborrow: true },
				{
					//.. sur un livre dont la colonne bo_id vaut la valeur de request.params.id
					where: { bo_id: request.params.id },
				}
			);
		} catch (error) {
			console.log(error);
		}
	}
	async returnABook(request) {
		try {
			return await Book.update(
				{ bo_isborrow: false },
				{
					where: { bo_id: request.params.id },
					returning: true,
				}
			);
		} catch {
			console.log(error);
		}
	}

	async addBook(request) {
		try {
			return await Book.create(request.body);
		} catch (error) {
			console.log(error);
		}
	}
}

export default new BookService();
