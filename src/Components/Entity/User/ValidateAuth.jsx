import { useState } from "react";
import Query from "../../General/Query.jsx";
import { Code } from "@mantine/core";
import { server, user } from "../../../Services/api.js";

const ValidateAuth = ({ table, tableHeadFields, tableFields }) => {
	//TODO: Add color button
	const title = "Validate Auth User";
	const [jsonData, setJsonData] = useState(
		JSON.stringify({
			token:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNzM3MDk5NjE1NDIwLCJ1c2VySWQiOiJkb20iLCJpYXQiOjE3MzcwOTk2MTV9.HUg4kmiV88jag8dRypSrMN8014SjXYcVv0CXnoZBVQU",
		}),
	);
	const urlData = "";
	const urlDefault = `${server}${user.validate.url}${urlData}`;
	const urlMethod = user.validate.method;
	console.log(urlDefault, urlMethod, jsonData);
	const shortDetails = `TThe API provides a POST /auth/authvalidate method that validates the 
	provided authentication token to ensure the connection is authentic. The token must be sent 
	in the request body in JSON format. This endpoint is designed to verify the token's validity 
	and ensure that it has not expired or been tampered with. If the validation is successful, 
	the API responds with a confirmation indicating that the connection is authenticated. If 
	the token is invalid or expired, the API returns an appropriate error message. This method 
	is essential for maintaining secure communication and protecting access to sensitive 
	resources.`;

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

export default ValidateAuth;
