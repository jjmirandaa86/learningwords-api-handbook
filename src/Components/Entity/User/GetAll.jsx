import Query from "../../General/Query.jsx";
import { Code } from "@mantine/core";
import { server, user } from "../../../Services/api.js";

const GetAll = ({ table, tableHeadFields, tableFields }) => {
	//TODO: Add color button
	const title = "Show all User";
	const urlDefault = `${server}${user.getAll.url}`;
	const urlMethod = user.getAll.method;
	const shortDetails = `The API provides a GET /user method to retrieve all records
	 stored in the user table. This endpoint returns a list containing detailed 
	 information about each registered user, including their main attributes. It is
	  designed for scenarios where querying all users is necessary, such as populating 
	  user interfaces, conducting data analysis, or integrating with other system processes. 
	  The response is returned in JSON format to ensure compatibility and ease of use across 
	  various applications. Additionally, the endpoint can be tested to verify and explore 
	  the retrieved results seamlessly.`;
	const note = () => (
		<>
			* If you want to see more data, add in Url <Code>?page=2</Code>
		</>
	);
	const example = () => (
		<>
			Example: <Code>{`${urlDefault}?page=2`}</Code>
		</>
	);

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

export default GetAll;
