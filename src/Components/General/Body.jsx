import { useState } from "react";
import Home from "../Home";
import Introduction from "../Introduction";
import User from "../../Components/Entity/User/User.jsx";
import Category from "../../Components/Entity/Category/Category.jsx";
import Type from "../../Components/Entity/Type/Type.jsx";

const Body = () => {
	const [pageActive, setPageActive] = useState("U");

	const handleChange = (menu) => setPageActive(menu);

	return (
		<>
			{pageActive === "H" && <Home handleChange={handleChange} />}
			{pageActive === "I" && <Introduction handleChange={handleChange} />}
			{pageActive === "U" && <User handleChange={handleChange} />}
			{pageActive === "C" && <Category handleChange={handleChange} />}
			{pageActive === "T" && <Type handleChange={handleChange} />}
		</>
	);
};

export default Body;
