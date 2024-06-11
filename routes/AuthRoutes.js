import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
const router = Router();

router.post("/signup", (request, response) =>
	AuthController.signup(request, response)
);

router.post("/login", (request, response) =>
	AuthController.login(request, response)
);

export default router;
