import { ActionIcon, CopyButton, Tooltip } from "@mantine/core";
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const CopyUrl = ({ url }) => {
	return (
		<div>
			<CopyButton value={url} timeout={2000}>
				{({ copied, copy }) => (
					<Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
						<ActionIcon
							color={copied ? "teal" : "gray"}
							variant="subtle"
							onClick={copy}
						>
							{copied ? <FaCheck size={16} /> : <MdContentCopy size={16} />}
						</ActionIcon>
					</Tooltip>
				)}
			</CopyButton>
		</div>
	);
};

export default CopyUrl;
