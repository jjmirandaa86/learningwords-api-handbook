import { useState } from "react";
import Query from "../../General/Query.jsx";
import { Code } from "@mantine/core";
import { server, type } from "../../../Services/api.js";

const Update = ({ table, tableHeadFields, tableFields }) => {
	//TODO: Add color button
	const title = "Update type";
	const [jsonData, setJsonData] = useState(
		JSON.stringify({
			name: "Noun",
			status: "A",
		}),
	);
	const urlData = "/1";
	const urlDefault = `${server}${type.update.url}${urlData}`;
	const urlMethod = type.update.method;
	console.log(urlDefault, urlMethod, jsonData);
	const shortDetails = `The API provides a PUT /type/:id method that allows updating a specific 
	record in the type table by specifying its unique identifier in the URL. The updated data 
	must be sent in the request body in JSON format, including the fields to be modified. This 
	endpoint is designed to edit existing records efficiently while ensuring data consistency. 
	Upon successful update, the API returns a confirmation response with the updated details of
	the record. If the provided id does not match any existing record, the API will respond with 
	an appropriate error message.`;

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

export default Update;
