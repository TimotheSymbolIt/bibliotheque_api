const express = require("express");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.post("/signup", (request, response, next) =>
	AuthController.signup(request, response, next)
);

router.post("/login", (request, response, next) =>
	AuthController.login(request, response, next)
);

module.exports = router;
