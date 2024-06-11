const jwt = require("jsonwebtoken");

const generateToken = (user) => {
	const payload = {
		id: user?.us_id,
		username: user?.us_username,
		email: user?.us_email,
	};
	return jwt.sign(payload, "w9aud2giaf", { expiresIn: "2h" });
};

module.exports = generateToken;
