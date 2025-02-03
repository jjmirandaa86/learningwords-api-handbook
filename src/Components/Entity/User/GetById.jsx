import Query from "../../General/Query.jsx";
import { Code } from "@mantine/core";
import { server, user } from "../../../Services/api.js";

const GetById = ({ table, tableHeadFields, tableFields }) => {
	//TODO: Add color button
	const title = "Show User by id";
	const urlData = "/1";
	const urlDefault = `${server}${user.getById.url}${urlData}`;
	const urlMethod = user.getById.method;
	const shortDetails = `The API provides a GET /user/:id method to retrieve a specific user 
	record from the user table based on their unique identifier. This endpoint returns 
	detailed information about the requested user, including their main attributes, 
	while explicitly excluding sensitive fields such as the password for security purposes. 
	It is designed for scenarios where accessing the details of a single user is necessary, 
	such as viewing their profile or integrating with specific system processes. The 
	response is returned in JSON format to ensure compatibility and ease of use across 
	various applications. You can test the endpoint to verify and explore the retrieved 
	user data seamlessly.`;

	const note = () => <></>;
	const example = () => <></>;

	return (
		<Query
			title={title}
			keyUnique={`${table}${urlDefault}`}
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

export default GetById;
