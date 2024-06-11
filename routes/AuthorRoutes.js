import { Router } from "express";
import AuthorController from "../controllers/AuthorController.js";
const router = Router();

router.get("/", (request, response) =>
	AuthorController.getAllAuthors(request, response)
);

export default router;
