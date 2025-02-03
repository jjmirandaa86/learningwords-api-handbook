import { useState } from "react";
import { Tabs } from "@mantine/core";
import { MdOutlineFindInPage } from "react-icons/md";
import { MdFindInPage } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { SlUserFollowing } from "react-icons/sl";
import GetAll from "./GetAll";
import GetById from "./GetById";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";
import Auth from "./Auth";
import ValidateAuth from "./ValidateAuth";

const User = () => {
	const table = "User";
	const tableHeadFields = {
		head: ["Field", "Type", "Value"],
	};
	const tableFields = {
		field: [
			"idUser",
			"firstName",
			"lastName",
			"user",
			"password",
			"gender",
			"email",
			"status",
		],
		typeData: [
			"int (Auto Increment)",
			"varchar(25)",
			"varchar(25)",
			"varchar(20)",
			"varchar(100)",
			"varchar(1)",
			"varchar(100)",
			"varchar(1)",
		],
		example: [
			1,
			"Jefferson",
			"Miranda",
			"jmiranda",
			"3456hnfDFKgv",
			"M",
			"jmiranda@mail.com",
			"A",
		],
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
						leftSection={<MdOutlineFindInPage />}
						onClick={() => handleChangeTab("All")}
						color="green"
					>
						Find All
					</Tabs.Tab>
					<Tabs.Tab
						value="ById"
						leftSection={<MdFindInPage />}
						onClick={() => handleChangeTab("ById")}
						color="green"
					>
						Find by Id
					</Tabs.Tab>
					<Tabs.Tab
						value="Add"
						leftSection={<IoIosAddCircleOutline />}
						onClick={() => handleChangeTab("Add")}
						color="blue"
					>
						Add
					</Tabs.Tab>
					<Tabs.Tab
						value="Update"
						leftSection={<MdModeEdit />}
						onClick={() => handleChangeTab("Update")}
						color="yellow"
					>
						Update
					</Tabs.Tab>
					<Tabs.Tab
						value="Delete"
						leftSection={<RiDeleteBin5Line />}
						onClick={() => handleChangeTab("Delete")}
						color="red"
					>
						Delete
					</Tabs.Tab>
					<Tabs.Tab
						value="Auth"
						leftSection={<GrUserAdmin />}
						onClick={() => handleChangeTab("Auth")}
						color="green"
					>
						Auth
					</Tabs.Tab>
					<Tabs.Tab
						value="ValidateAuth"
						leftSection={<SlUserFollowing />}
						onClick={() => handleChangeTab("ValidateAuth")}
						color="green"
					>
						Validate Auth
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
				<Tabs.Panel value="Auth">
					<Auth
						table={table}
						tableHeadFields={tableHeadFields}
						tableFields={tableFields}
					/>
				</Tabs.Panel>
				<Tabs.Panel value="ValidateAuth">
					<ValidateAuth
						table={table}
						tableHeadFields={tableHeadFields}
						tableFields={tableFields}
					/>
				</Tabs.Panel>
			</Tabs>
		</div>
	);
};

export default User;
