import store from "./store";

function addTask(userId, title, description) {
	return new Promise((resolve, reject) => {
		if (!title && !description) {
			console.error("Faltan datos");
			reject("No se puede guardad una tarea vacia");
			return false;
		}

		let fullTask = {
			userId,
			title,
			description,
		};
		store.add(fullTask);
		resolve(fullTask);
	});
}
function getTasks(userId = null, title = null, description = null) {
	return new Promise((resolve, reject) => {
		let filter = {};
		if (userId !== null) {
			filter["user"] = userId;
		}
		if (title !== null) {
			filter["title"] = title;
		}
		if (description !== null) {
			filter["description"] = "description";
		}

		const Tasks = store.list(filter);

		if (!Tasks) {
			reject("No hay tareas disponibles");
			return false;
		}
		resolve(Tasks);
	});
}

function updateTask(userId, title, description) {
	return new Promise((resolve, reject) => {
		if (!userId && !description && !title) {
			reject("Invalid data");
			return false;
		}
		const response = store.update(userId, title, description);
		resolve(response);
	});
}

function deleteTask(id) {
	return new Promise((resolve, reject) => {
		const response = store.Delete(id);
		if (!response) {
			reject("There's not message");
		}
		resolve(response);
	});
}

export default {
	addTask,
	getTasks,
	updateTask,
	deleteTask,
};
