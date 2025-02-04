import { Badge, NavLink } from "@mantine/core";
const MenuRight = ({ actualPage, scrollToSection }) => {
	const menuLeft = [
		{
			id: 1,
			label: "Welcome",
			href: "#Home-Welcome",
			father: "H",
		},
		{
			id: 2,
			label: "What is this?",
			href: "#Home-WhatIsThis",
			father: "H",
		},
		{
			id: 3,
			label: "Where do I start?",
			href: "#Home-WhereDoIStart",
			father: "H",
		},
		{
			id: 4,
			label: "Introduction",
			href: "#Introduction-Intro",
			father: "I",
		},
		{
			id: 5,
			label: "Importance",
			href: "#Introduction-Importance",
			father: "I",
		},
		{
			id: 6,
			label: "HTTP methods",
			href: "#Introduction-Methods",
			father: "I",
		},
		{
			id: 7,
			label: "Diagram",
			href: "#Introduction-Diagram",
			father: "I",
		},
		{
			id: 8,
			label: "Find All Users",
			href: "#User-All",
			father: "U",
		},

		{
			id: 9,
			label: "Find User by Id",
			href: "#User-FindById",
			father: "U",
		},
		{
			id: 10,
			label: "Add User",
			href: "#User-Add",
			father: "U",
		},
		{
			id: 11,
			label: "Update User",
			href: "#User-update",
			father: "U",
		},
		{
			id: 12,
			label: "Delete User",
			href: "#User-update",
			father: "U",
		},
		{
			id: 13,
			label: "Auth User",
			href: "#User-Auth",
			father: "U",
		},
		{
			id: 14,
			label: "Validate Auth User",
			href: "#User-ValidateAuth",
			father: "U",
		},
	];

	const filterMenuLeft = menuLeft.filter((menu) => menu.father === actualPage);

	return (
		<>
			<NavLink
				opened
				color="orange"
				href={"#"}
				label={"Table of Contents"}
				disabled
			>
				{filterMenuLeft.map((menu, index) => (
					<NavLink
						key={index}
						color="orange"
						href={menu.href}
						label={menu.label}
						opened
						onClick={(event) => {
							event.preventDefault();
							scrollToSection(menu.href);
						}}
					></NavLink>
				))}
			</NavLink>
		</>
	);
};

export default MenuRight;
