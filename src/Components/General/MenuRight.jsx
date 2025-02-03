import { IoHomeOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { SlOrganization } from "react-icons/sl";
import { LuUser } from "react-icons/lu";
import { MdOutlineFindInPage } from "react-icons/md";
import { MdFindInPage } from "react-icons/md";

import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowLeftCircle } from "react-icons/sl";

import { FaCheck } from "react-icons/fa";

import { Group, Tree } from "@mantine/core";

const MenuRight = () => {
	const optionsMenu = [
		{
			id: 1,
			name: "Home",
			href: "#home",
			imageLeft: <IoHomeOutline />,
			imageRight: "",
			children: [],
		},
		{
			id: 2,
			name: "Introduction",
			href: "#introduction",
			imageLeft: <BiFoodMenu />,
			imageRight: "",
			children: [],
		},
		{
			id: 21,
			name: "Entities",
			href: "#entities",
			imageLeft: <SlOrganization />,
			imageRight: "",
			children: [
				{
					id: 211,
					name: "User",
					href: "#user",
					imageLeft: <LuUser />,
					imageRight: <SlArrowRightCircle />,
					children: [
						{
							id: 2111,
							name: "Show All",
							href: "#userShowAll",
							imageLeft: <MdOutlineFindInPage />,
							imageRight: "",
							children: [],
						},
						{
							id: 2112,
							name: "Show by Id",
							href: "#userShowById",
							imageLeft: <MdFindInPage />,
							imageRight: "",
							children: [],
						},
					],
				},
			],
		},
	];

	const data = [
		{
			label: "Home",
			value: "src",
			icon: <BiFoodMenu />,
			link: "#hello",
			children: [],
		},
		{
			label: "Home",
			value: "src",
			link: "#hello",
			children: [
				{
					label: "components",
					value: "src/components",
					link: "#hello",
					children: [
						{
							label: "Accordion.tsx",
							value: "src/components/Accordion.tsx",
							link: "#hello",
						},
						{ label: "Tree.tsx", value: "src/components/Tree.tsx", link: "#hello" },
						{
							label: "Button.tsx",
							value: "src/components/Button.tsx",
							link: "#hello",
						},
					],
				},
			],
		},
		{
			label: "node_modules",
			value: "node_modules",
			link: "#hello",
			children: [
				{
					label: "react",
					value: "node_modules/react",
					link: "#hello",
					children: [
						{
							label: "index.d.ts",
							value: "node_modules/react/index.d.ts",
							link: "#hello",
						},
						{
							label: "package.json",
							value: "node_modules/react/package.json",
							link: "#hello",
						},
					],
				},
				{
					label: "@mantine",
					value: "node_modules/@mantine",
					link: "#hello",
					children: [
						{
							label: "core",
							value: "node_modules/@mantine/core",
							link: "#hello",
							children: [
								{
									label: "index.d.ts",
									value: "node_modules/@mantine/core/index.d.ts",
									link: "#hello",
								},
								{
									label: "package.json",
									value: "node_modules/@mantine/core/package.json",
									link: "#hello",
								},
							],
						},
						{
							label: "hooks",
							value: "node_modules/@mantine/hooks",
							link: "#hello",
							children: [
								{
									label: "index.d.ts",
									value: "node_modules/@mantine/hooks/index.d.ts",
									link: "#hello",
								},
								{
									label: "package.json",
									value: "node_modules/@mantine/hooks/package.json",
									link: "#hello",
								},
							],
						},
						{
							label: "form",
							value: "node_modules/@mantine/form",
							link: "#hello",
							children: [
								{
									label: "index.d.ts",
									value: "node_modules/@mantine/form/index.d.ts",
									link: "#hello",
								},
								{
									label: "package.json",
									value: "node_modules/@mantine/form/package.json",
									link: "#hello",
								},
							],
						},
					],
				},
			],
		},
		{
			label: "package.json",
			value: "package.json",
		},
		{
			label: "tsconfig.json",
			value: "tsconfig.json",
		},
	];

	return (
		<div>
			MenuRight1
			<Tree
				data={data}
				levelOffset={23}
				renderNode={({ node, expanded, hasChildren, elementProps }) => (
					<Group gap={5} {...elementProps} onClick={() => alert(node.label)}>
						{node.icon}
						{hasChildren && (
							<MdFindInPage
								size={18}
								style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
							/>
						)}
						<span>{node.label}</span>
					</Group>
				)}
			/>
		</div>
	);
};

export default MenuRight;
