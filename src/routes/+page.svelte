<script>
	import { Flex, Grid, H1, H2, H3, H4, H5, H6, P, Button, PHGitForkBoldIcon } from '$lib/xui/components';
</script>

<Grid isBreakpoint>
	<Grid columns={2} p="sm" gap="sm">
		<Flex direction="column" p="sm" gap="sm" variant="ghost" mode="base">
			<H1>This is an H1</H1>
			<H2>This is an H2</H2>
			<H3>This is an H3</H3>
			<H4>This is an H4</H4>
			<H5>This is an H5</H5>
			<H6>This is an H6</H6>
			<P>This is a P</P>
		</Flex>

		<Flex direction="column" p="sm" gap="sm" variant="ghost" mode="base">
			<Flex align="center" gap="sm">
				<Button variant="ghost" mode="base" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="base" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="base" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="base" content="text" size="sm">Click Me!</Button>
				<Button variant="ghost" mode="base" content="text" size="md">Click Me!</Button>
				<Button variant="ghost" mode="base" content="text" size="lg">Click Me!</Button>
				<Button variant="ghost" mode="base" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="ghost" mode="base" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="ghost" mode="base" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="ghost" mode="info" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="info" content="icon" size="md" disabled><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="info" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="info" content="text" size="sm">Click Me!</Button>
				<Button variant="ghost" mode="info" content="text" size="md">Click Me!</Button>
				<Button variant="ghost" mode="info" content="text" size="lg">Click Me!</Button>
				<Button variant="ghost" mode="info" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="ghost" mode="info" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="ghost" mode="info" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="ghost" mode="success" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="success" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="success" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="success" content="text" size="sm">Click Me!</Button>
				<Button variant="ghost" mode="success" content="text" size="md">Click Me!</Button>
				<Button variant="ghost" mode="success" content="text" size="lg">Click Me!</Button>
				<Button variant="ghost" mode="success" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="ghost" mode="success" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="ghost" mode="success" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="ghost" mode="warning" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="warning" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="warning" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="warning" content="text" size="sm">Click Me!</Button>
				<Button variant="ghost" mode="warning" content="text" size="md">Click Me!</Button>
				<Button variant="ghost" mode="warning" content="text" size="lg">Click Me!</Button>
				<Button variant="ghost" mode="warning" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="ghost" mode="warning" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="ghost" mode="warning" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="ghost" mode="error" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="error" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="error" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="ghost" mode="error" content="text" size="sm">Click Me!</Button>
				<Button variant="ghost" mode="error" content="text" size="md">Click Me!</Button>
				<Button variant="ghost" mode="error" content="text" size="lg">Click Me!</Button>
				<Button variant="ghost" mode="error" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="ghost" mode="error" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="ghost" mode="error" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>
		</Flex>

		<Flex direction="column" p="sm" gap="sm" variant="ghost" mode="base">
			<Flex align="center" gap="sm">
				<Button variant="outline" mode="base" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="base" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="base" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="base" content="text" size="sm">Click Me!</Button>
				<Button variant="outline" mode="base" content="text" size="md">Click Me!</Button>
				<Button variant="outline" mode="base" content="text" size="lg">Click Me!</Button>
				<Button variant="outline" mode="base" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="outline" mode="base" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="outline" mode="base" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="outline" mode="info" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="info" content="icon" size="md" disabled><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="info" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="info" content="text" size="sm">Click Me!</Button>
				<Button variant="outline" mode="info" content="text" size="md">Click Me!</Button>
				<Button variant="outline" mode="info" content="text" size="lg">Click Me!</Button>
				<Button variant="outline" mode="info" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="outline" mode="info" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="outline" mode="info" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="outline" mode="success" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="success" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="success" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="success" content="text" size="sm">Click Me!</Button>
				<Button variant="outline" mode="success" content="text" size="md">Click Me!</Button>
				<Button variant="outline" mode="success" content="text" size="lg">Click Me!</Button>
				<Button variant="outline" mode="success" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="outline" mode="success" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="outline" mode="success" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="outline" mode="warning" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="warning" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="warning" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="warning" content="text" size="sm">Click Me!</Button>
				<Button variant="outline" mode="warning" content="text" size="md">Click Me!</Button>
				<Button variant="outline" mode="warning" content="text" size="lg">Click Me!</Button>
				<Button variant="outline" mode="warning" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="outline" mode="warning" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="outline" mode="warning" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="outline" mode="error" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="error" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="error" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="outline" mode="error" content="text" size="sm">Click Me!</Button>
				<Button variant="outline" mode="error" content="text" size="md">Click Me!</Button>
				<Button variant="outline" mode="error" content="text" size="lg">Click Me!</Button>
				<Button variant="outline" mode="error" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="outline" mode="error" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="outline" mode="error" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>
		</Flex>

		<Flex direction="column" p="sm" gap="sm" variant="ghost" mode="error">
			<Flex align="center" gap="sm">
				<Button variant="card" mode="base" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="base" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="base" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="base" content="text" size="sm">Click Me!</Button>
				<Button variant="card" mode="base" content="text" size="md">Click Me!</Button>
				<Button variant="card" mode="base" content="text" size="lg">Click Me!</Button>
				<Button variant="card" mode="base" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="card" mode="base" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="card" mode="base" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="card" mode="info" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="info" content="icon" size="md" disabled><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="info" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="info" content="text" size="sm">Click Me!</Button>
				<Button variant="card" mode="info" content="text" size="md">Click Me!</Button>
				<Button variant="card" mode="info" content="text" size="lg">Click Me!</Button>
				<Button variant="card" mode="info" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="card" mode="info" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="card" mode="info" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="card" mode="success" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="success" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="success" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="success" content="text" size="sm">Click Me!</Button>
				<Button variant="card" mode="success" content="text" size="md">Click Me!</Button>
				<Button variant="card" mode="success" content="text" size="lg">Click Me!</Button>
				<Button variant="card" mode="success" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="card" mode="success" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="card" mode="success" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="card" mode="warning" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="warning" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="warning" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="warning" content="text" size="sm">Click Me!</Button>
				<Button variant="card" mode="warning" content="text" size="md">Click Me!</Button>
				<Button variant="card" mode="warning" content="text" size="lg">Click Me!</Button>
				<Button variant="card" mode="warning" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="card" mode="warning" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="card" mode="warning" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="card" mode="error" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="error" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="error" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="card" mode="error" content="text" size="sm">Click Me!</Button>
				<Button variant="card" mode="error" content="text" size="md">Click Me!</Button>
				<Button variant="card" mode="error" content="text" size="lg">Click Me!</Button>
				<Button variant="card" mode="error" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="card" mode="error" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="card" mode="error" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>
		</Flex>

		<Flex direction="column" p="sm" gap="sm" variant="ghost" mode="base">
			<Flex align="center" gap="sm">
				<Button variant="solid" mode="base" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="base" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="base" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="base" content="text" size="sm">Click Me!</Button>
				<Button variant="solid" mode="base" content="text" size="md">Click Me!</Button>
				<Button variant="solid" mode="base" content="text" size="lg">Click Me!</Button>
				<Button variant="solid" mode="base" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="solid" mode="base" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="solid" mode="base" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="solid" mode="info" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="info" content="icon" size="md" disabled><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="info" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="info" content="text" size="sm">Click Me!</Button>
				<Button variant="solid" mode="info" content="text" size="md">Click Me!</Button>
				<Button variant="solid" mode="info" content="text" size="lg">Click Me!</Button>
				<Button variant="solid" mode="info" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="solid" mode="info" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="solid" mode="info" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="solid" mode="success" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="success" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="success" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="success" content="text" size="sm">Click Me!</Button>
				<Button variant="solid" mode="success" content="text" size="md">Click Me!</Button>
				<Button variant="solid" mode="success" content="text" size="lg">Click Me!</Button>
				<Button variant="solid" mode="success" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="solid" mode="success" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="solid" mode="success" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="solid" mode="warning" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="warning" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="warning" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="warning" content="text" size="sm">Click Me!</Button>
				<Button variant="solid" mode="warning" content="text" size="md">Click Me!</Button>
				<Button variant="solid" mode="warning" content="text" size="lg">Click Me!</Button>
				<Button variant="solid" mode="warning" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="solid" mode="warning" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="solid" mode="warning" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>

			<Flex align="center" gap="sm">
				<Button variant="solid" mode="error" content="icon" size="sm"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="error" content="icon" size="md"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="error" content="icon" size="lg"><PHGitForkBoldIcon /></Button>
				<Button variant="solid" mode="error" content="text" size="sm">Click Me!</Button>
				<Button variant="solid" mode="error" content="text" size="md">Click Me!</Button>
				<Button variant="solid" mode="error" content="text" size="lg">Click Me!</Button>
				<Button variant="solid" mode="error" content="text" size="sm"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="solid" mode="error" content="text" size="md"><PHGitForkBoldIcon />Click Me!</Button>
				<Button variant="solid" mode="error" content="text" size="lg"><PHGitForkBoldIcon />Click Me!</Button>
			</Flex>
		</Flex>
	</Grid>
</Grid>
