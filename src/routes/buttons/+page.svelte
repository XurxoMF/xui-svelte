<script>
	import { Flex, Button, setTheme, getTheme, PHSunBoldIcon, PHMoonBoldIcon, PHGitForkBoldIcon } from '$lib/xui/components';
	import Grid from '$lib/xui/components/Grid/Grid.svelte';
</script>

<Flex direction="column" width="full" height="min-full" align="center" justify="center" gap="sm" isBreakpoint>
	<Button variant="ghost" mode="base" onclick={() => setTheme(getTheme() === 'dark' ? 'light' : 'dark')}>
		{#if getTheme() === 'dark'}
			<PHSunBoldIcon />
		{:else}
			<PHMoonBoldIcon />
		{/if}
	</Button>

	<Button variant="card" mode="base" href="/">Home</Button>

	<Grid columns={2}>
		<Flex align="center" justify="center" gap="sm">
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

		<Flex align="center" justify="center" gap="sm">
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

		<Flex align="center" justify="center" gap="sm">
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

		<Flex align="center" justify="center" gap="sm">
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
</Flex>
