import store from "./store";

function addTask(name, title, description) {
	return new Promise((resolve, reject) => {
		if (!title && !description) {
			console.error("Faltan datos");
			reject("No se puede guardad una tarea vacia");
			return false;
		}

		let fullTask = {
			name,
			title,
			description,
		};
		store.add(fullTask);
		resolve(fullTask);
	});
}
function getTasks() {
	return new Promise((resolve, reject) => {
		const Tasks = store.list();

		if (!Tasks) {
			reject("No hay tareas disponibles");
			return false;
		}
		resolve(Tasks);
	});
}

function updateTask(title, description, id) {
	return new Promise((resolve, reject) => {
		if (!description && !title && !id) {
			reject("Invalid data");
			return false;
		}
		const response = store.update(title, description, id);
		resolve(response);
	});
}

function deleteTask(id) {
	return new Promise((resolve, reject) => {
		const response = store.Delete({ _id: id });
		if (!response) {
			reject("There's not message");
		}
		resolve(response);
	});
}
function getTask(id) {
	return new Promise((resolve, reject) => {
		const response = store.findOne(id);
		if (!response) {
			reject("There's not message");
		}
		resolve(response);
	});
}

export default {
	addTask,
	getTasks,
	getTask,
	updateTask,
	deleteTask,
};
