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
			error(res, e, 500);
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
			error(res, e, 500);
		});
});

router.post("/auth", auth, async (req, res) => {
	success(res, "Welcome", 200);
});

router.get("/", function (req, res) {
	const { userId } = req.body;
	controller
		.getUser(userId)
		.then(data => {
			success(res, data, 200);
		})
		.catch(e => {
			error(res, e, 500);
		});
});

export default router;
