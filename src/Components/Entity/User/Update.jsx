import { useState } from "react";
import Query from "../../General/Query.jsx";
import { Code } from "@mantine/core";
import { server, user } from "../../../Services/api.js";

const Update = ({ table, tableHeadFields, tableFields }) => {
	//TODO: Add color button
	const title = "Update User";
	const [jsonData, setJsonData] = useState(
		JSON.stringify({
			firstName: "Jefferson",
			lastName: "Miranda",
			email: "jmiranda@mail.com",
			status: "A",
			gender: "M",
		}),
	);
	const urlData = "/1";
	const urlDefault = `${server}${user.update.url}${urlData}`;
	const urlMethod = user.update.method;
	console.log(urlDefault, urlMethod, jsonData);
	const shortDetails = `The API provides a PUT /user/:id method that allows updating an existing record 
	in the user table by specifying its unique identifier in the URL. The updated data must be sent in 
	the request body in JSON format, including the fields to be modified. The idUser field is not 
	required in the request body as it is used only in the URL to identify the record. Fields such 
	as user and password cannot be modified through this endpoint to ensure data integrity and 
	security. This endpoint is designed to efficiently edit user accounts, enabling seamless updates 
	within systems or user interfaces. Upon successful update, the API returns a confirmation response 
	along with the updated details of the user. If the specified idUser does not match any existing record,
	 an appropriate error message will be returned.`;

	const note = () => <>You can not update, user, password.</>;
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
