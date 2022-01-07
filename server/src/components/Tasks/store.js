const Model = require("./model");

function add(Task) {
	const myTask = new Model(Task);
	myTask.save();
}
function list(filter) {
	return new Promise((resolve, reject) => {
		resolve(Model.find(filter));
	});
}

async function update(id, title, description) {
	return new Promise((resolve, reject) => {
		const foundMessage = Model.findById(id);
		foundMessage.title = title;
		foundMessage.description = description;

		const newMessage = foundMessage.save();
		resolve(newMessage);
	});
}
function Delete(_id) {
	return new Promise((resolve, reject) => {
		resolve(Model.deleteOne({ _id }));
	});
}

export default {
	add,
	list,
	update,
	Delete,
};
