import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "./General/Logo";
import Body from "./General/Body";
import SubMenu from "./General/SubMenu";
import Footer from "./General/Footer";
import MenuRight2 from "./General/MenuRight2";

export default function Main() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<>
			<AppShell
				header={{ height: 60 }}
				footer={{ height: 80 }}
				navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
				aside={{
					width: 300,
					breakpoint: "md",
					collapsed: { desktop: false, mobile: true },
				}}
				padding="md"
			>
				<AppShell.Header>
					<Group h="100%" px="md">
						<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
						<Logo title={"Learning-Words-Api"} />
					</Group>
				</AppShell.Header>
				<AppShell.Navbar p="md">
					<MenuRight2 />
				</AppShell.Navbar>
				<AppShell.Main>
					<Body />
				</AppShell.Main>
				<AppShell.Aside p="md">
					<SubMenu />
				</AppShell.Aside>
				<AppShell.Footer p="sm">
					<Footer />
				</AppShell.Footer>
			</AppShell>
		</>
	);
}
