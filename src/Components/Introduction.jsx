import { Image, Text, Container, Space } from "@mantine/core";

const Introduction = () => {
	const title = "Introduction";
	return (
		<Container>
			<section id="Introduction-Intro">
				<Text fw={700} c={"orange"}>
					{title}
				</Text>
				<Text>
					A RESTful API (Representational State Transfer) is a crucial component in
					modern software development, providing a simple, scalable, and efficient
					way to allow communication between different systems. REST APIs use HTTP
					requests to perform CRUD (Create, Read, Update, Delete) operations on data,
					and their stateless nature ensures that each request is independent, making
					the system more flexible and scalable.
				</Text>
			</section>
			<Container>
				<section id="Introduction-Importance">
					<Space h="xl" />
					<Text fw={700} c={"orange"}>
						Importance
					</Text>
					<Text>
						The importance of RESTful APIs lies in their ability to enable seamless
						integration between different platforms, applications, and services.
						Whether it is connecting mobile apps to servers, enabling third-party
						services to interact with your system, or facilitating cloud-based
						solutions, RESTful APIs make these connections possible. They allow
						developers to build decoupled systems where each service can evolve
						independently without affecting the entire infrastructure. Additionally,
						REST APIs are widely recognized for their simplicity and ease of use.
					</Text>
				</section>
				<section id="Introduction-Methods">
					<Space h="xl" />
					<Text fw={700} c={"orange"}>
						HTTP methods
					</Text>
					<Text>
						They rely on standard HTTP methods (GET, POST, PUT, DELETE), making them
						intuitive and accessible for developers, regardless of the technology
						stack. REST also works well with popular data formats like JSON and XML,
						making it easy to handle and exchange data. In an increasingly
						interconnected world, RESTful APIs are the backbone of interoperability,
						empowering businesses to innovate, scale efficiently, and provide seamless
						user experiences. Whether you are building a web app, mobile application,
						or integrating with third-party services, adopting a RESTful API is a key
						step toward creating robust, maintainable, and future-proof solutions.
					</Text>
				</section>
				<Space h="xl" />
			</Container>
			<section id="Introduction-Diagram">
				<div style={{ padding: 10 }}>
					<Image radius="md" src="./img/diagrama-restful.png" />
				</div>
			</section>
		</Container>
	);
};

export default Introduction;
