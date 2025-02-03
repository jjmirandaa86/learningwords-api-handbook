const pathServer = "http://localhost:";
const portServer = 3000;
const server = `${pathServer}${portServer}/`;

const user = {
	getAll: {
		method: "GET",
		url: "api/user",
	},
	getById: {
		method: "GET",
		url: "api/user",
	},
	add: {
		method: "POST",
		url: "api/user",
	},
	delete: {
		method: "DELETE",
		url: "api/user",
	},
	update: {
		method: "PUT",
		url: "api/user",
	},
	validate: {
		method: "POST",
		url: "api/user/authvalidate",
	},
	auth: {
		method: "POST",
		url: "api/user/auth",
	},
};

const category = {
	getAll: {
		method: "GET",
		url: "api/category",
	},
	getById: {
		method: "GET",
		url: "api/category",
	},
};

const type = {
	getAll: {
		method: "GET",
		url: "api/type",
	},
	getById: {
		method: "GET",
		url: "api/type",
	},
	add: {
		method: "POST",
		url: "api/type",
	},
	delete: {
		method: "DELETE",
		url: "api/type",
	},
	update: {
		method: "PUT",
		url: "api/type",
	},
};

export { server, user, type, category };
