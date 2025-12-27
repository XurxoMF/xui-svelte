<script>
	import { Flex, H1, H2, H3, H4, H5, H6, P, Button, setTheme, getTheme, PHSunBoldIcon, PHMoonBoldIcon } from '$lib/xui/components';
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

	<H1>This is an H1</H1>
	<H2>This is an H2</H2>
	<H3>This is an H3</H3>
	<H4>This is an H4</H4>
	<H5>This is an H5</H5>
	<H6>This is an H6</H6>
	<P>This is a P</P>
</Flex>
