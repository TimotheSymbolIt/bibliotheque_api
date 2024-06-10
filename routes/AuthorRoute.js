const express = require("express");
const AuthorController = require("../controllers/AuthorController");
const router = express.Router();

router.get("/findAll", (request, response) =>
	AuthorController.getAllAuthor(request, response)
);

module.exports = router;
