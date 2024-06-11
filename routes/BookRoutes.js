const express = require("express");
const BookController = require("../controllers/BookController");
const router = express.Router();

router.get("/", (request, response) =>
	BookController.getAllBooks(request, response)
);

router.patch("/borrow-book/:id", (request, response) =>
	BookController.borrowABook(request, response)
);

router.patch("/return-book/:id", (request, response) =>
	BookController.returnABook(request, response)
);

router.post("/", (request, response, next) => {
	BookController.addBook(request, response, next);
});

module.exports = router;
