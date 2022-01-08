import express from "express";
const router = express.Router();
import { success, error } from "../../utils/response";
import controller from "./controller";
import auth from "../../middleware/auth";

router.post("/register", (req, res) => {
	const { name, password } = req.body;
	controller
		.addUser(name, password)
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(req, res, e, 500);
		});
});

router.post("/login", (req, res) => {
	const { name, password, isInvited } = req.body;
	controller
		.login(name, password, isInvited)
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(req, res, e, 500);
		});
});

router.post("/auth", auth, async (req, res) => {
	success(res, "Welcome", 200);
});

export default router;
