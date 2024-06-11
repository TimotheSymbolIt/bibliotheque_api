import Author from "../models/Author.js";

class AuthorService {
	async getAllAuthors() {
		try {
			return await Author.findAll();
		} catch (error) {
			console.log(error);
		}
	}
}

export default new AuthorService();
