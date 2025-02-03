import Query from "../../General/Query.jsx";
import { Code } from "@mantine/core";
import { server, type } from "../../../Services/api.js";

const GetAll = ({ table, tableHeadFields, tableFields }) => {
	//TODO: Add color button
	const title = "Show all types";
	const urlDefault = `${server}${type.getAll.url}`;
	const urlMethod = type.getAll.method;
	const shortDetails = `The API provides a GET / type method that retrieves all records stored in 
		the type table. This endpoint returns a list containing the complete data 
		of each type registered in the database, including its main attributes. 
		It is ideal for scenarios where all available types need to be queried, 
		whether to display them in a user interface, perform analysis, or feed 
		other system processes. The result is delivered in JSON format for easy 
		consumption. 
		You can try the results using the test.`;
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
