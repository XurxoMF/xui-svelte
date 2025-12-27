<script>
	import { Flex, Button, setTheme, getTheme, PHSunBoldIcon, PHMoonBoldIcon } from '$lib/xui/components';
</script>

<Flex direction="column" width="full" height="min-full" align="center" justify="center" gap="sm">
	<Button variant="ghost" mode="base" onclick={() => setTheme(getTheme() === 'dark' ? 'light' : 'dark')}>
		{#if getTheme() === 'dark'}
			<PHSunBoldIcon />
		{:else}
			<PHMoonBoldIcon />
		{/if}
	</Button>

	<Button variant="card" mode="base" href="/typography">Typography</Button>
	<Button variant="card" mode="base" href="/buttons">Buttons</Button>
	<Button variant="card" mode="base" href="/checkboxes">Checkboxes</Button>
</Flex>
