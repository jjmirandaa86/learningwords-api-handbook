import { Text, Container, Title, Space, Card, Grid } from "@mantine/core";
import Logo from "./General/Logo";

const Home = () => {
	const title = "";
	return (
		<Container>
			<Text fw={700}>{title}</Text>
			<Text ta="center">
				<Logo size={100} />
				<Title size="h1">The RESTful LearningWords API </Title>
				<Title size="h3">API to practice, students enjoy it! </Title>
				<Space h="xl" />

				<Container>
					<Text>
						Unlock the power of the LearningWords API, a free and open-source RESTful
					</Text>
					<Text> solution for fast, reliable access to learning-related data.</Text>
					<Text>
						{" "}
						Perfect for building educational tools or enhancing platforms—start
						exploring today!
					</Text>
					<Space h="xl" />
					<Title size="h3">Check out the docs! 🤩</Title>
				</Container>
				<Title size="h4"></Title>
			</Text>
			<Space h="xl" />
			<Space h="sm" />
			<Text ta="center">
				<Title size="h1">Try it now!</Title>
			</Text>
			<Space h="xl" />

			<Grid>
				<Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
					<Card withBorder shadow="sm" radius="md">
						<Card.Section withBorder inheritPadding py="xs">
							What is this?
						</Card.Section>
						<Text mt="sm" c="dimmed" size="sm">
							he LearningWords API is a powerful open-source tool designed to support
							an English language learning platform. Built with Node.js and MySQL, it
							enables seamless database interaction for managing and accessing data.
							Open for testing, it’s perfect for developers looking to explore,
							innovate, or integrate its features into their projects.
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
					<Card withBorder shadow="sm" radius="md">
						<Card.Section withBorder inheritPadding py="xs">
							Where do I start?
						</Card.Section>
						<Text mt="sm" c="dimmed" size="sm">
							Start by exploring the diagram, which maps out the key entities and their
							relationships, giving you a clear understanding of the data structure.
							Next, dive into the endpoints, each designed for efficient CRUD
							operations to manage resources seamlessly. This foundation ensures you
							are ready to test and integrate the API with confidence.
						</Text>
					</Card>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default Home;
