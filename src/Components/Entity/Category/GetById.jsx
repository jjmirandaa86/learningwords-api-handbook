import Query from "../../General/Query.jsx";
import { Code } from "@mantine/core";
import { server, category } from "../../../Services/api.js";

const GetById = ({ table, tableHeadFields, tableFields }) => {
	//TODO: Add color button
	const title = "Show category by id";
	const urlData = "/1";
	const urlDefault = `${server}${category.getById.url}${urlData}`;
	const urlMethod = category.getById.method;
	const shortDetails = `The API offers a GET /category/:id method that retrieves a specific 
	record from the category table based on its unique identifier. This endpoint returns 
	detailed information about the requested category, including all its main attributes. 
	It is useful for scenarios where you need to access the data of a single category, 
	such as viewing or editing its details. The response is delivered in JSON format, 
	ensuring seamless integration with other system processes or user interfaces.`;

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
