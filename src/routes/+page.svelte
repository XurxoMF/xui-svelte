<script>
	import { Flex, Grid } from '$lib/xui/components';
	import { H1, H2, H3, H4, H5, H6, P } from '$lib/xui/components';
	import { Button } from '$lib/xui/components/Button';
	import GitForkBoldIcon from '$lib/xui/components/Icons/Phosphor/GitForkBoldIcon.svelte';
</script>

<Flex direction={{ base: 'column' }} p={{ base: 'md' }} gap={{ base: 'md' }}>
	<H1>This is an H1</H1>
	<H2>This is an H2</H2>
	<H3>This is an H3</H3>
	<H4>This is an H4</H4>
	<H5>This is an H5</H5>
	<H6>This is an H6</H6>
	<P>This is a P</P>
</Flex>

<Flex align={{ base: 'center' }} p={{ base: 'md' }} gap={{ base: 'md' }}>
	<Button content={{ base: 'icon' }} size={{ base: 'sm' }}><GitForkBoldIcon /></Button>
	<Button content={{ base: 'icon' }} size={{ base: 'md' }}><GitForkBoldIcon /></Button>
	<Button content={{ base: 'icon' }} size={{ base: 'lg' }}><GitForkBoldIcon /></Button>

	<Button size={{ base: 'sm' }}>Click Me!</Button>
	<Button size={{ base: 'md' }}>Click Me!</Button>
	<Button size={{ base: 'lg' }}>Click Me!</Button>

	<Button size={{ base: 'sm' }}><GitForkBoldIcon />Click Me!</Button>
	<Button size={{ base: 'md' }}><GitForkBoldIcon />Click Me!</Button>
	<Button size={{ base: 'lg' }}><GitForkBoldIcon />Click Me!</Button>
</Flex>

<Grid p={{ base: 'md' }} gap={{ base: 'md' }}>
	<Grid variant={{ base: 'ghost-base' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'ghost-error' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'ghost-success' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'ghost-warning' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'ghost-info' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'outline-base' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'outline-error' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'outline-success' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'outline-warning' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'outline-info' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'card-base' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'card-error' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'card-success' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'card-warning' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'card-info' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'solid-base' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'solid-error' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'solid-success' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'solid-warning' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant={{ base: 'solid-info' }} p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>
</Grid>
