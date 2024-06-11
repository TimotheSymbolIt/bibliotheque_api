const Author = require("../models/Author");
const Book = require("../models/Book");

class BookService {
	async getAllBooks() {
		return await Book.findAll({
			attributes: {
				exclude: ["au_id"],
			},
			include: {
				model: Author,
				// attributes: ["au_name"],
			},
		});
	}

	async borrowABook(request, response) {
		// console.log(request.params.id)
		return await Book.update(
			{ bo_isborrow: true },
			{
				where: { bo_id: request.params.id },
				returning: true,
			}
		);
	}
	async returnABook(request, response) {
		return await Book.update(
			{ bo_isborrow: false },
			{
				where: { bo_id: request.params.id },
				returning: true,
			}
		);
	}

	async addBook(request, response, next) {
		console.log(request.body);
		return await Book.create(request.body);
	}
}

module.exports = new BookService();
