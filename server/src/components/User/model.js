import mongoose from "mongoose";
const Schema = mongoose.Schema;
const mySchema = new Schema({
	name: String,
	password: String,
	token: String,
});

const model = mongoose.model("User", mySchema);

export default model;
