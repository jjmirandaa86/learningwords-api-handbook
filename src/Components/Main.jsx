import React, { useState, useEffect } from "react";
import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "./General/Logo";
import Body from "./General/Body";
import MenuRight from "./General/MenuRight";
import Footer from "./General/Footer";
import MenuLeft from "./General/MenuLeft";

export default function Main() {
	const [opened, { toggle }] = useDisclosure();

	//control page in body
	const [actualPage, setActualPage] = useState("");
	const handleChangeActualPage = (value) => setActualPage(value);
	useEffect(() => {
		setActualPage("H"); //Home
	}, []);
	//

	//Menu left
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<AppShell
				header={{ height: 60 }}
				footer={{ height: 80 }}
				navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
				/*aside={{
					width: 300,
					breakpoint: "md",
					collapsed: { desktop: false, mobile: true },
				}}*/
				padding="md"
			>
				<AppShell.Header>
					<Group h="100%" px="md">
						<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
						<Logo title={"Learning-Words-Api"} />
					</Group>
				</AppShell.Header>
				<AppShell.Navbar p="md">
					<MenuLeft
						actualPage={actualPage}
						handleChangeActualPage={handleChangeActualPage}
					/>
				</AppShell.Navbar>
				<AppShell.Main>
					<Body
						actualPage={actualPage}
						handleChangeActualPage={handleChangeActualPage}
					/>
				</AppShell.Main>
				{/*
				<AppShell.Aside p="md">
					 <MenuRight
						actualPage={actualPage}
						handleChangeActualPage={handleChangeActualPage}
						scrollToSection={scrollToSection}
					/> 
				</AppShell.Aside>*/}
				<AppShell.Footer p="sm">
					<Footer />
				</AppShell.Footer>
			</AppShell>
		</>
	);
}
