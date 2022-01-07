import tasks from "../components/Tasks/network.js";
import user from "../components/User/network";

const routes = function (server) {
	server.use("/tasks", tasks);
	server.use("/user", user);
};
module.exports = routes;
