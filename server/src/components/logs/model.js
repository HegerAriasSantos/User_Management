const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mySchema = new Schema({
	name: String,
	url: String,
	date: String,
	method: String,
	text: String,
});

const model = mongoose.model("logs", mySchema);
module.exports = model;
