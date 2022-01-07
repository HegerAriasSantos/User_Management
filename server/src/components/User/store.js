import Model from "./model";

function add(User) {
	const myUser = new Model(User);
	return myUser.save();
}
async function list(name) {
	const users = await Model.findOne({ name });
	return users;
}

async function update(name, newName) {
	const foundUser = await Model.findOne({ name });
	foundUser.name = newName;
	return await foundUser.save();
}
async function Delete(_id) {
	return Model.deleteOne({ _id });
}

export default {
	add,
	list,
	update,
	Delete,
};
