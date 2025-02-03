import Query from "../../General/Query.jsx";
import { Code } from "@mantine/core";
import { server, type } from "../../../Services/api.js";

const Delete = ({ table, tableHeadFields, tableFields }) => {
	//TODO: Add color button
	const title = "Delete Type";
	const urlData = "/1";
	const urlDefault = `${server}${type.delete.url}${urlData}`;
	const urlMethod = type.delete.method;
	const shortDetails = `The API provides a DELETE /type/:id method that allows deleting
	 a specific record from the type table by providing its unique identifier in the URL. 
	 This endpoint is designed to remove types from the database securely and efficiently. 
	 Upon successful deletion, the API returns a confirmation response indicating that the 
	 record has been removed. If the provided id does not match any existing record, the 
	 API will respond with an appropriate error message.`;

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

export default Delete;
