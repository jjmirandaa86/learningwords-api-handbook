import { useState } from "react";
import PropTypes from "prop-types";
import { Menu, NavLink, Badge } from "@mantine/core";
import { IoHomeOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { SlOrganization } from "react-icons/sl";
import { LuUser } from "react-icons/lu";
import { MdOutlineFindInPage } from "react-icons/md";
import { MdFindInPage } from "react-icons/md";

import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowLeftCircle } from "react-icons/sl";

import { FaCheck } from "react-icons/fa";

const MenuRight = () => {
	const [activeOption, setActiveOption] = useState("HOME");

	const handleChangeOptions = (newOption) => {
		//setActiveOption(newOption);
	};

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

	const ShowMenu = ({ childOffSet }) => {
		return (
			<>
				<h4>Menu</h4>
				{optionsMenu.map((el, index) => {
					return (
						<ShowFather
							key={index}
							idMenu={el.id}
							name={el.name}
							href={el.href}
							imageLeft={el.imageLeft}
							child={el.children}
							childenOffSet={childOffSet}
						/>
					);
				})}
			</>
		);
	};

	const ShowFather = ({
		idMenu = 0,
		name = "",
		href = "",
		imageLeft = <></>,
		child = [],
		childenOffSet = 0,
	}) => {
		return (
			<>
				{child.length === 0 ? (
					<NavLink
						key={idMenu}
						href={href}
						label={name}
						leftSection={imageLeft}
						childrenOffset={childenOffSet}
						active={activeOption === name.toUpperCase()}
						onClick={() => handleChangeOptions(name)}
					/>
				) : (
					<NavLink
						key={idMenu}
						href={href}
						label={name}
						leftSection={imageLeft}
						childrenOffset={childenOffSet}
						active={activeOption === name.toUpperCase()}
						onClick={() => handleChangeOptions(name)}
					>
						{child.map((child, index) => {
							return (
								<ShowChildren
									key={index}
									idMenu={child.idMenu}
									name={child.name}
									href={child.href}
									imageLeft={child.imageLeft}
								/>
							);
						})}
					</NavLink>
				)}
			</>
		);
	};

	const ShowChildren = ({
		idMenu = 0,
		name = "",
		href = "",
		imageLeft = <></>,
	}) => {
		return (
			<>
				<NavLink key={idMenu} label={name} href={href} leftSection={imageLeft} />
			</>
		);
	};

	return (
		<>
			<Menu shadow="md" width={200}>
				{/* 
				<ShowMenu childOffSet={20} />
				
				*/}
				hello
			</Menu>
		</>
	);
};

export default MenuRight;
