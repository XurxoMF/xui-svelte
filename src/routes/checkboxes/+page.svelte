<script>
	import { Flex, Checkbox, Button, setTheme, getTheme, PHSunBoldIcon, PHMoonBoldIcon } from '$lib/xui/components';

	let checkboxState = $state(false);
</script>

<Flex direction="column" width="full" height="min-full" align="center" justify="center" gap="sm">
	<Button variant="ghost" mode="base" onclick={() => setTheme(getTheme() === 'dark' ? 'light' : 'dark')}>
		{#if getTheme() === 'dark'}
			<PHSunBoldIcon />
		{:else}
			<PHMoonBoldIcon />
		{/if}
	</Button>

	<Button variant="card" mode="base" href="/">Home</Button>

	<Flex align="center" gap="sm">
		<Checkbox bind:checked={checkboxState} variant="ghost" mode="base" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="ghost" mode="base" size="md" />
		<Checkbox bind:checked={checkboxState} variant="ghost" mode="base" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="ghost" mode="info" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="ghost" mode="info" size="md" />
		<Checkbox bind:checked={checkboxState} variant="ghost" mode="info" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="ghost" mode="success" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="ghost" mode="success" size="md" />
		<Checkbox bind:checked={checkboxState} variant="ghost" mode="success" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="ghost" mode="warning" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="ghost" mode="warning" size="md" />
		<Checkbox bind:checked={checkboxState} variant="ghost" mode="warning" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="ghost" mode="error" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="ghost" mode="error" size="md" />
		<Checkbox bind:checked={checkboxState} variant="ghost" mode="error" size="lg" />
	</Flex>

	<Flex align="center" gap="sm">
		<Checkbox bind:checked={checkboxState} variant="outline" mode="base" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="outline" mode="base" size="md" />
		<Checkbox bind:checked={checkboxState} variant="outline" mode="base" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="outline" mode="info" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="outline" mode="info" size="md" />
		<Checkbox bind:checked={checkboxState} variant="outline" mode="info" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="outline" mode="success" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="outline" mode="success" size="md" />
		<Checkbox bind:checked={checkboxState} variant="outline" mode="success" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="outline" mode="warning" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="outline" mode="warning" size="md" />
		<Checkbox bind:checked={checkboxState} variant="outline" mode="warning" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="outline" mode="error" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="outline" mode="error" size="md" />
		<Checkbox bind:checked={checkboxState} variant="outline" mode="error" size="lg" />
	</Flex>

	<Flex align="center" gap="sm">
		<Checkbox bind:checked={checkboxState} variant="card" mode="base" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="card" mode="base" size="md" />
		<Checkbox bind:checked={checkboxState} variant="card" mode="base" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="card" mode="info" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="card" mode="info" size="md" />
		<Checkbox bind:checked={checkboxState} variant="card" mode="info" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="card" mode="success" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="card" mode="success" size="md" />
		<Checkbox bind:checked={checkboxState} variant="card" mode="success" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="card" mode="warning" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="card" mode="warning" size="md" />
		<Checkbox bind:checked={checkboxState} variant="card" mode="warning" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="card" mode="error" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="card" mode="error" size="md" />
		<Checkbox bind:checked={checkboxState} variant="card" mode="error" size="lg" />
	</Flex>

	<Flex align="center" gap="sm">
		<Checkbox bind:checked={checkboxState} variant="solid" mode="base" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="solid" mode="base" size="md" />
		<Checkbox bind:checked={checkboxState} variant="solid" mode="base" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="solid" mode="info" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="solid" mode="info" size="md" />
		<Checkbox bind:checked={checkboxState} variant="solid" mode="info" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="solid" mode="success" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="solid" mode="success" size="md" />
		<Checkbox bind:checked={checkboxState} variant="solid" mode="success" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="solid" mode="warning" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="solid" mode="warning" size="md" />
		<Checkbox bind:checked={checkboxState} variant="solid" mode="warning" size="lg" />

		<Checkbox bind:checked={checkboxState} variant="solid" mode="error" size="sm" />
		<Checkbox bind:checked={checkboxState} variant="solid" mode="error" size="md" />
		<Checkbox bind:checked={checkboxState} variant="solid" mode="error" size="lg" />
	</Flex>
</Flex>
