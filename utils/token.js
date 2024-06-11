import pkg from "jsonwebtoken";
const { sign } = pkg;

const generateToken = (user) => {
	const payload = {
		id: user?.us_id,
		username: user?.us_username,
		email: user?.us_email,
	};
	return sign(payload, "w9aud2giaf", { expiresIn: "2h" });
};

export default generateToken;
