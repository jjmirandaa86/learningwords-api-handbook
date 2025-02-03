import { useState } from "react";
import { Tabs } from "@mantine/core";
import { FaPhotoVideo } from "react-icons/fa";
import GetAll from "./GetAll";
import GetById from "./GetById";

const Category = () => {
	const table = "Category";
	const tableHeadFields = {
		head: ["Field", "Type", "Value"],
	};
	const tableFields = {
		field: ["idCategory", "name", "status"],
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
			</Tabs>
		</div>
	);
};

export default Category;
