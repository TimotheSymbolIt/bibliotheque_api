const express = require("express");
const AuthorController = require("../controllers/AuthorController");
const router = express.Router();

router.get("/", (request, response) =>
	AuthorController.getAllAuthors(request, response)
);

module.exports = router;
