const Model = require("./model");

function save(Log) {
	return new Promise((resolve, reject) => {
		const myLog = new Model(Log);
		resolve(myLog.save());
	});
}
function list() {
	return new Promise((resolve, reject) => {
		resolve(Model.find());
	});
}

export default {
	save,
	list,
};
