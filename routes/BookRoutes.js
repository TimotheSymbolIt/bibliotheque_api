import { Router } from "express";
import BookController from "../controllers/BookController.js";
const router = Router();

router.get("/", (request, response) =>
	BookController.getAllBooks(request, response)
);

router.patch("/borrow-book/:id", (request, response) =>
	BookController.borrowABook(request, response)
);

router.patch("/return-book/:id", (request, response) =>
	BookController.returnABook(request, response)
);

router.post("/", (request, response) => {
	BookController.addBook(request, response);
});

export default router;
