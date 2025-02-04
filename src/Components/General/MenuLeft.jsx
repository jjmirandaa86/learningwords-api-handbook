import { useState, useEffect } from "react";
import { Badge, NavLink } from "@mantine/core";
import { FiMenu } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { AiFillGold } from "react-icons/ai";

const MenuLeft = ({ actualPage, handleChangeActualPage }) => {
	return (
		<>
			<NavLink
				color="orange"
				href="#menu"
				label="Menu"
				leftSection={<FiMenu />}
				rightSection={""}
				opened
				disabled
			>
				<NavLink
					color="orange"
					opened
					href="#home"
					label="Home"
					leftSection={<FaHome />}
					onClick={() => {
						handleChangeActualPage("H"); //Home
					}}
					active={actualPage === "H" ? true : false}
				/>
				<NavLink
					color="orange"
					opened
					href="#introduction"
					label="Introduction"
					leftSection={<FaBookReader />}
					onClick={() => {
						handleChangeActualPage("I"); //Introduction
					}}
					active={actualPage === "I" ? true : false}
				/>
				<NavLink
					color="orange"
					opened
					disabled
					href="#entity"
					label="Entity"
					leftSection={<FiSettings />}
				>
					<NavLink
						color="orange"
						defaultOpened
						href="#user"
						label="User"
						leftSection={<FaUser />}
						onClick={() => {
							handleChangeActualPage("U"); //User
						}}
						active={actualPage === "U" ? true : false}
					/>
					<NavLink
						color="orange"
						defaultOpened
						href="#category"
						label="Category"
						leftSection={<BiCategory />}
						onClick={() => {
							handleChangeActualPage("C"); //Category
						}}
						active={actualPage === "C" ? true : false}
					/>
					<NavLink
						color="orange"
						defaultOpened
						href="#type"
						label="Type"
						leftSection={<AiFillGold />}
						onClick={() => {
							handleChangeActualPage("T"); //Type
						}}
						active={actualPage === "T" ? true : false}
					/>
				</NavLink>
			</NavLink>
		</>
	);
};

export default MenuLeft;
