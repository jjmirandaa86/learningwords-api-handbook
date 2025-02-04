import { useState } from "react";
import Home from "../Home";
import Introduction from "../Introduction";
import User from "../../Components/Entity/User/User.jsx";
import Category from "../../Components/Entity/Category/Category.jsx";
import Type from "../../Components/Entity/Type/Type.jsx";

const Body = ({ actualPage, handleChangeActualPage }) => {
	return (
		<>
			{actualPage === "H" && (
				<Home handleChangeActualPage={handleChangeActualPage} />
			)}
			{actualPage === "I" && (
				<Introduction handleChangeActualPage={handleChangeActualPage} />
			)}
			{actualPage === "U" && (
				<User handleChangeActualPage={handleChangeActualPage} />
			)}
			{actualPage === "C" && (
				<Category handleChangeActualPage={handleChangeActualPage} />
			)}
			{actualPage === "T" && (
				<Type handleChangeActualPage={handleChangeActualPage} />
			)}
		</>
	);
};

export default Body;
