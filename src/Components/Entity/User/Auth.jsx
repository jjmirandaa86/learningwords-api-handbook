import { useState } from "react";
import Query from "../../General/Query.jsx";
import { Code } from "@mantine/core";
import { server, user } from "../../../Services/api.js";

const Auth = ({ table, tableHeadFields, tableFields }) => {
	//TODO: Add color button

	const title = "Auth User";
	const [jsonData, setJsonData] = useState(
		JSON.stringify({
			user: "dom",
			password: "domdom",
		}),
	);
	const urlData = "";
	const urlDefault = `${server}${user.auth.url}${urlData}`;
	const urlMethod = user.auth.method;
	console.log(urlDefault, urlMethod, jsonData);
	const shortDetails = `The API provides a POST /auth method that handles user 
	authentication by verifying the provided username and password. These credentials 
	must be sent in the request body in JSON format. If the authentication is successful, 
	the endpoint generates and returns a login token, which can be used to access 
	protected resources or perform authorized actions within the system. This token 
	is typically valid for a specific duration and must be included in subsequent 
	requests where authentication is required. If the provided credentials are invalid, 
	the API responds with an appropriate error message.`;

	const note = () => <></>;
	const example = () => <></>;

	return (
		<Query
			title={title}
			keyUnique={`${table}${urlDefault}`}
			jsonData={jsonData}
			setJsonData={setJsonData}
			urlDefault={urlDefault}
			urlMethod={urlMethod}
			shortDetails={shortDetails}
			note={note}
			example={example}
			tableFields={tableFields}
			tableHeadFields={tableHeadFields}
		/>
	);
};

export default Auth;
