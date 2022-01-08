const Model = require("./model");

function add(Task) {
	const myTask = new Model(Task);
	myTask.save();
}
function list() {
	return new Promise((resolve, reject) => {
		resolve(Model.find());
	});
}
function findOne(id) {
	return new Promise((resolve, reject) => {
		resolve(Model.findOne({ _id: id }));
	});
}

async function update(title, description, id) {
	return new Promise(async (resolve, reject) => {
		const foundMessage = await Model.findById(id);
		foundMessage.title = title;
		foundMessage.description = description;
		console.log(foundMessage.title, foundMessage.description);

		const newMessage = await foundMessage.save();
		resolve(newMessage);
	});
}
function Delete(id) {
	return new Promise((resolve, reject) => {
		resolve(Model.deleteOne({ _id: id }));
	});
}

export default {
	add,
	list,
	update,
	Delete,
	findOne,
};
