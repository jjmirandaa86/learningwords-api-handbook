import { Text } from "@mantine/core";

const Footer = () => {
	return (
		<div>
			<Text size="xs">
				<Text fw={700}>API created by Jefferson Miranda. </Text>
				<Text fs="italic">
					This API allows managing entity data for a learning application, providing
					an efficient and secure system for handling user data and related types.
				</Text>
			</Text>
			<Text size="xs" fw={700}>
				© 2025 Jefferson Miranda. All rights reserved.
			</Text>
		</div>
	);
};

export default Footer;
