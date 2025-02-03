import { FaBookReader } from "react-icons/fa";
import { Text } from "@mantine/core";

const Logo = ({ title = "", size = 30, color = "orange" }) => {
	return (
		<>
			<FaBookReader size={size} color={color} />
			<Text fw={700} c="orange">
				{title}
			</Text>
		</>
	);
};

export default Logo;
