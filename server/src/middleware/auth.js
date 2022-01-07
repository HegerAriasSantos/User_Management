const jwt = require("jsonwebtoken");
import config from "../utils/config";
const verifyToken = (req, res, next) => {
	const { token } = req.body;

	if (!token) {
		return res
			.status(403)
			.send("Es requerido tener un token para la autentificacion");
	}
	try {
		const decoded = jwt.verify(token, config.TOKEN_KEY);
	} catch (err) {
		return res.status(401).send("Token invalido");
	}
	return next();
};

export default verifyToken;
