import Query from "../../General/Query.jsx";
import { Code } from "@mantine/core";
import { server, user } from "../../../Services/api.js";

const Delete = ({ table, tableHeadFields, tableFields }) => {
	//TODO: Add color button
	const title = "Delete User";
	const urlData = "/1";
	const urlDefault = `${server}${user.delete.url}${urlData}`;
	const urlMethod = user.delete.method;
	const shortDetails = `TThe API provides a DELETE /user/:idUser method to remove a
	 specific user record from the user table based on their unique identifier. This 
	 endpoint is designed for scenarios where deleting a user is necessary, such as 
	 account deactivation or data management processes. Upon successful deletion, 
	 the API returns a confirmation response indicating that the user has been removed. 
	 If the specified idUser does not match any existing record, an appropriate error 
	 message is returned.`;

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
