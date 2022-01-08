import store from "./store";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../utils/config";

function addUser(name, password) {
	return new Promise(async (resolve, reject) => {
		if (!(password && name)) {
			return reject("Falta informacion");
		}
		const oldUser = await store.list(name);

		if (oldUser) {
			return reject("El usuario ya existe, porfavor acceda a su");
		}

		const encryptedPassword = await bcrypt.hash(password, 10);

		const user = await store.add({
			name: name,
			password: encryptedPassword,
		});

		const token = jwt.sign({ userId: user._id, name }, config.TOKEN_KEY, {
			expiresIn: "2h",
		});
		user.token = token;
		return resolve(user);
	});
}
function login(name, password, isInvited) {
	return new Promise(async (resolve, reject) => {
		if (isInvited) {
			const token = jwt.sign({ name }, config.TOKEN_KEY, {
				expiresIn: "0.5h",
			});
			let userInvited = { name, token };
			resolve(userInvited);
		}
		if (!(password && name)) {
			return reject("All input is required");
		}

		const user = await store.list(name);

		if (user && (await bcrypt.compare(password, user.password))) {
			const token = jwt.sign({ user_id: user._id, name }, config.TOKEN_KEY, {
				expiresIn: "2h",
			});

			user.token = token;

			resolve(user);
		}
		reject("Invalid Credentials");
	});
}

function getUser(userId = null) {
	return new Promise(async (resolve, reject) => {
		return resolve(store.list(userId));
	});
}
function updateUser(name, newName) {
	return new Promise(async (resolve, reject) => {
		return resolve(store.update(name, newName));
	});
}

export default {
	addUser,
	getUser,
	login,
	updateUser,
};
