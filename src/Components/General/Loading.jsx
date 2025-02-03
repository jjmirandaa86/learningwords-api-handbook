import { Loader, Center, Space } from "@mantine/core";

const Loading = () => {
	return (
		<div>
			<Center>
				<Loader size={40} />
				<Space h="md" />
			</Center>
		</div>
	);
};

export default Loading;
