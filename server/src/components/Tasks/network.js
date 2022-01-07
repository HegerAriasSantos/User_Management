import express from "express";
const router = express.Router();
import { success, error } from "../../utils/response";
import controller from "./controller";

import auth from "../../middleware/auth";

router.get("/", function (req, res) {
	controller
		.getTasks()
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(res, e, 500);
		});
});

router.post("/", auth, function (req, res) {
	const { userId, title, description } = req.body;
	controller
		.addTask(userId, title, description)
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(res, e, 500);
		});
});
router.patch("/:id", function (req, res) {
	const { userId, title, description } = req.body;
	controller
		.updateTask(userId, title, description)
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(res, e, 500);
		});
});
router.delete("/:id", function (req, res) {
	controller
		.deleteTask(req.params.id)
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(res, e, 500);
		});
});

export default router;
