import express from "express";
const router = express.Router();
import { success, error } from "../../utils/response";
import controller from "./controller";

router.get("/", function (req, res) {
	controller
		.getTasks()
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(req, res, e, 500);
		});
});
router.get("/id/:id", function (req, res) {
	console.log(req.params.id);
	controller
		.getTask(req.params.id)
		.then(data => {
			success(req, res, data, 200);
		})
		.catch(e => {
			error(req, res, e, 500);
		});
});

router.post("/new", function (req, res) {
	const { name, title, description } = req.body;
	controller
		.addTask(name, title, description)
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(req, res, e, 500);
		});
});
router.patch("/:id", function (req, res) {
	const { title, description } = req.body;
	const { id } = req.params;
	controller
		.updateTask(title, description, id)
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(req, res, e, 500);
		});
});
router.delete("/:id", function (req, res) {
	console.log(req.params.id);
	console.log("a");
	controller
		.deleteTask(req.params.id)
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(req, res, e, 500);
		});
});

export default router;
