import { useState } from "react";
import axios from "axios";
import {
	Stepper,
	Button,
	Group,
	Fieldset,
	TextInput,
	Table,
	Badge,
	Space,
	Code,
	Progress,
	Paper,
	Text,
	Grid,
	JsonInput,
	Container,
	Center,
} from "@mantine/core";
import Loading from "../General/Loading.jsx";
import CopyUrl from "../General/CopyUrl.jsx";
import { GrConfigure } from "react-icons/gr";
import { TbCloudDataConnection } from "react-icons/tb";
import { TbDatabaseShare } from "react-icons/tb";
import { GrPowerReset } from "react-icons/gr";
import { IoArrowForward } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { JsonView } from "mantine-json-view";

const Query = ({
	title = "",
	keyUnique,
	jsonData = null,
	setJsonData,
	urlDefault,
	urlMethod,
	shortDetails,
	note,
	example,
	tableFields,
	tableHeadFields,
}) => {
	const [url, setUrl] = useState(urlDefault); //endpoint Url
	const [active, setActive] = useState(0);
	const [page, setPage] = useState(1); //page
	const [data, setData] = useState(null); //Storage data response
	const [progress, setProgress] = useState(0); //Show progress data

	const handleChange = (event) => {
		event.preventDefault();
		const { value } = event.target;
		setUrl(value);
	};

	const resetDefaultParams = () => {
		setActive(0);
		setPage(1);
		setUrl(urlDefault);
		setProgress(0);
	};

	const processQuery = () => {
		const config = {
			onDownloadProgress: (progressEvent) => {
				setProgress(10);
				const percentCompleted = Math.round(
					(progressEvent.loaded * 100) / progressEvent.total,
				);
				setProgress(25);
				console.log("% done-> ", percentCompleted);
			},
		};
		//setProgress((current) => current + 40);
		//if (urlMethod in ["GET", "DELETE"])
		axios(
			{
				method: urlMethod,
				url: url,
				data: JSON.parse(jsonData),
			},
			config,
		)
			.then((data) => {
				setData(data.data);
			})
			//TODO: show error in alert
			.catch((error) => console.log(error))
			.finally(() => {
				console.log("finally");
			});
	};

	const handleProcess = () => {
		processQuery();
		setTimeout(() => {
			if (active !== 3) {
				setActive((current) => (current < 3 ? current + 1 : current));
				setTimeout(() => {
					if (active !== 3) {
						setActive((current) => (current < 3 ? current + 1 : current));
						setTimeout(() => {
							if (active !== 3) {
								setActive((current) => (current < 3 ? current + 1 : current));
							}
						}, 500);
					}
				}, 500);
			}
		}, 500);
	};

	const showUrlMethod =
		urlMethod.substring(0, 1).toUpperCase() +
		urlMethod.substring(1, 3).toLowerCase();

	return (
		<Container key={keyUnique}>
			<Space h="md" />
			<Text c="orange" fw={700}>
				{title}
			</Text>

			<div style={{ margin: 10 }}>{shortDetails}</div>
			<Space h="md" />
			{
				//TODO: activate progress bar
			}
			<Progress radius="lg" value={progress} striped animated />
			<div style={{ margin: 10 }}>
				<Center>{title}</Center>
				<Space h="md" />
				<Stepper
					active={active}
					onStepClick={setActive}
					allowNextStepsSelect={false}
					color="orange"
					radius="lg"
				>
					<Stepper.Step label="First" description="Prepare" icon={<GrConfigure />}>
						<Fieldset legend="Endpoint:" variant="filled" radius="md">
							<TextInput
								leftSection={showUrlMethod}
								rightSection={<CopyUrl url={url} />}
								name="url"
								value={url}
								placeholder={urlDefault}
								onChange={handleChange}
							/>
							{jsonData ? (
								<JsonInput
									variant="unstyled"
									label="Edit - json body"
									placeholder="You must provide json"
									validationError="Invalid JSON, you should modify your JSON before you continue."
									formatOnBlur
									autosize
									minRows={3}
									value={jsonData}
									serialize
									onChange={(data) => {
										setJsonData((prevValue) => data);
									}}
								/>
							) : (
								""
							)}
						</Fieldset>
						<Group justify="center" mt="xl">
							<Button
								leftSection={<GrPowerReset size={14} />}
								variant="filled"
								radius="md"
								color="orange"
								onClick={resetDefaultParams}
							>
								Reset
							</Button>
							<Button
								leftSection={<IoArrowForward size={14} />}
								radius="md"
								variant="filled"
								color="orange"
								onClick={handleProcess}
							>
								Process
							</Button>
						</Group>
					</Stepper.Step>
					<Stepper.Step
						label="Second"
						description="Connecting"
						icon={<TbCloudDataConnection />}
						onFocus={handleProcess}
					>
						<div>Connecting..!</div>
						<Loading />
					</Stepper.Step>
					<Stepper.Step
						label="Final"
						description="Result"
						icon={<TbDatabaseShare />}
						onFocus={handleProcess}
					>
						<Loading />
					</Stepper.Step>
					<Stepper.Completed>
						<h4>Named (endpoint) </h4>
						<div>
							<Grid>
								<Grid.Col span="content">
									<Badge color="orange" size="lg">
										{urlMethod}
									</Badge>
								</Grid.Col>
								<Grid.Col span="auto">
									{
										//page !== 1 ? `${url}/?page=${page}` : urlDefault
										url
									}
								</Grid.Col>
								<Grid.Col span={1} offset={3}>
									<Button
										radius="md"
										variant="filled"
										color="orange"
										onClick={resetDefaultParams}
									>
										<GrPowerReset size={14} />
									</Button>
								</Grid.Col>
							</Grid>
						</div>
						{jsonData && (
							<>
								<h5>Body</h5>
								<Container>{jsonData}</Container>
							</>
						)}

						<h4>Results</h4>
						<Paper shadow="sm" radius="lg" withBorder p="xl">
							{data === null ? "No data" : <Code>{JSON.stringify(data)}</Code>}
							{
								//
								//TODO: Show like code json
								/*
<JsonInput
									label="Data Json"
									validationError="Invalid JSON"
									formatOnBlur
									autosize
									value={data}
									onChange={setData}
									minRows={4}
									variant="filled"
								/>

								<JsonView
									// optional component for collapse icon(s)
									// optional component for rendering a clipboard icon for copy/paste
									json="JSON_STRING"
									src={data}
									// syntax highlighting/theming
								/>
									*/
							}
						</Paper>
						<Space h="md" />
						<Table>
							<Table.Thead>
								<Table.Tr>
									{tableHeadFields.head.map((el) => (
										<Table.Th>{el}</Table.Th>
									))}
								</Table.Tr>
							</Table.Thead>
							<Table.Tbody>
								{tableFields.field.map((el, index) => (
									<Table.Tr key={index}>
										<Table.Td>{el}</Table.Td>
										<Table.Td>{tableFields.typeData[index]}</Table.Td>
										<Table.Td>{tableFields.example[index]}</Table.Td>
									</Table.Tr>
								))}
							</Table.Tbody>
						</Table>
						<Space h="md" />
						<div>
							<Text>{note()}</Text>
							<Text>{example()}</Text>
						</div>
						<Group justify="center" mt="xl">
							<Button
								leftSection={<GrPowerReset size={14} />}
								radius="md"
								variant="filled"
								color="orange"
								onClick={resetDefaultParams}
							>
								Reset
							</Button>
						</Group>
					</Stepper.Completed>
				</Stepper>
			</div>
		</Container>
	);
};

export default Query;
