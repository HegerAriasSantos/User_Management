import store from "./store";
import fs from "fs";
function get(url, name, date, method, id) {
	let log = {};
	switch (url) {
		case "/tasks/":
			log = {
				url,
				date,
				method,
				name: "Usuario random",
				text: "Hizo un get a todas las tareas de la base datos",
			};
			store.save(log);
		case `/tasks/id/${id}`:
			log = {
				url,
				date,
				method,
				name: "Usuario random",
				text: "Hizo una busqueda de una tarea especifica",
			};
			store.save(log);
		default:
			log = {
				url,
				date,
				method,
				name: "Usuario random",
				text: "Hizo un get a una ruta que no tenemos en el backend (404)",
			};
	}
}
function Delete(url, name, date, method, id) {
	let log = {};
	switch (url) {
		case `/tasks/${id}`:
			console.log();
			log = { url, date, method, id, name, text: "Elimino una tarea" };
			store.save(log);
	}
}
function update(url, name, date, method, id) {
	let log = {};
	switch (url) {
		case `/tasks/${id}`:
			log = {
				url,
				date,
				method,
				name,
				text: "Hizo un get a todas las tareas de la base datos",
			};
	}
}
function post(url, name, date, method, id) {
	let log = {};
	switch (url) {
		case `/tasks/${id}`:
			log = {
				url,
				date,
				method,
				name,
				text: "Hizo un get a todas las tareas de la base datos",
			};
	}
}
function logError(name, date, error) {
	fs.writeFile(`./logs/${date}_${name}`, error, err => {
		if (err) throw err;
	});
}

function getLogs() {
	return new Promise((resolve, reject) => {
		const Logs = store.list();

		if (!Logs) {
			reject("No hay logs disponibles");
			return false;
		}
		resolve(Logs);
	});
}

export default {
	get,
	Delete,
	update,
	post,
	logError,
	getLogs,
};
