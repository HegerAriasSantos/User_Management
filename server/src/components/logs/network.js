import controller from "./controller";
import express from "express";
export const router = express.Router();
import { success, error } from "../../utils/response";

router.get("/", function (req, res) {
	controller
		.getLogs()
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(req, res, e, 500);
		});
});

const logCreater = (req, res, next) => {
	console.log(req.params.id);
	switch (req.method) {
		case "GET":
			controller.get(
				req.url,
				req.body.name,
				new Date().toLocaleString(),
				req.method,
				req.params.id,
			);
		case "DELETE":
			controller.Delete(
				req.url,
				req.body.name,
				new Date().toLocaleString(),
				req.method,
				req.params.id,
			);
		case "PATCH":
			controller.update(
				req.url,
				req.body.name,
				new Date().toLocaleString(),
				req.method,
				req.params.id,
			);
		case "POST":
			controller.post(
				req.url,
				req.body.name,
				new Date().toLocaleString(),
				req.method,
				req.params.id,
			);
		default:
			controller.get(
				req.method,
				req.params.id,
				req.url,
				req.body.name,
				new Date().toLocaleDateString(),
			);
	}
	return next();
};

export default logCreater;
