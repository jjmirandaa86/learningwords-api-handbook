import { useState } from "react";
import { Tabs } from "@mantine/core";
import { FaPhotoVideo } from "react-icons/fa";
import GetAll from "./GetAll";
import GetById from "./GetById";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";

const Type = () => {
	const table = "Type";
	const tableHeadFields = {
		head: ["Field", "Type", "Value"],
	};
	const tableFields = {
		field: ["idType", "name", "status"],
		typeData: ["int", "varchar(20)", "varchar(1)"],
		example: [1, "Noun", "A"],
	};

	const [controlTabs, setControlTabs] = useState("All");

	const handleChangeTab = (activeTab) => setControlTabs(activeTab);

	return (
		<div>
			<h3>{table} (Group)</h3>
			<Tabs defaultValue="All" value={controlTabs}>
				<Tabs.List>
					<Tabs.Tab
						value="All"
						leftSection={<FaPhotoVideo />}
						onClick={() => handleChangeTab("All")}
						color="green"
					>
						Find All
					</Tabs.Tab>
					<Tabs.Tab
						value="ById"
						leftSection={<FaPhotoVideo />}
						onClick={() => handleChangeTab("ById")}
						color="green"
					>
						Find by Id
					</Tabs.Tab>
					<Tabs.Tab
						value="Add"
						leftSection={<FaPhotoVideo />}
						onClick={() => handleChangeTab("Add")}
						color="blue"
					>
						Add
					</Tabs.Tab>
					<Tabs.Tab
						value="Update"
						leftSection={<FaPhotoVideo />}
						onClick={() => handleChangeTab("Update")}
						color="yellow"
					>
						Update
					</Tabs.Tab>
					<Tabs.Tab
						value="Delete"
						leftSection={<FaPhotoVideo />}
						onClick={() => handleChangeTab("Delete")}
						color="red"
					>
						Delete
					</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel value="All">
					<GetAll
						table={table}
						tableHeadFields={tableHeadFields}
						tableFields={tableFields}
					/>
				</Tabs.Panel>
				<Tabs.Panel value="ById">
					<GetById
						table={table}
						tableHeadFields={tableHeadFields}
						tableFields={tableFields}
					/>
				</Tabs.Panel>
				<Tabs.Panel value="Add">
					<Add
						table={table}
						tableHeadFields={tableHeadFields}
						tableFields={tableFields}
					/>
				</Tabs.Panel>
				<Tabs.Panel value="Update">
					<Update
						table={table}
						tableHeadFields={tableHeadFields}
						tableFields={tableFields}
					/>
				</Tabs.Panel>
				<Tabs.Panel value="Delete">
					<Delete
						table={table}
						tableHeadFields={tableHeadFields}
						tableFields={tableFields}
					/>
				</Tabs.Panel>
			</Tabs>
		</div>
	);
};

export default Type;
