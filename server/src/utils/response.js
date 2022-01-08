import { logError } from "../components/logs/controller";
export const success = function (res, message, status) {
	res.status(status).send({
		Headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
			"Access-Control-Allow-Headers":
				"Origin, X-Requested-With, Content-Type, Accept",
		},
		error: "",
		body: message,
	});
};
export const error = function (req, res, message, status) {
	logError(req.body.name, new Date().toLocaleString(), message);
	res.status(status).send({
		error: message,
		body: "",
	});
};
