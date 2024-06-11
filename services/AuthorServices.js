const Author = require("../models/Author");

class AuthorService {
	async getAllAuthors(request, response) {
		return await Author.findAll();
	}
}

module.exports = new AuthorService();
