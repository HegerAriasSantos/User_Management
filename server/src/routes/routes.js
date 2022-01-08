import tasks from "../components/Tasks/network.js";
import user from "../components/User/network";
import { router as logs } from "../components/logs/network";
const routes = function (server) {
	server.use("/tasks", tasks);
	server.use("/user", user);
	server.use("/logs", logs);
};
module.exports = routes;
