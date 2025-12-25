<script>
	import { Grid } from '$lib/xui/components/Layout';
	import { H1, P } from '$lib/xui/components/Typography';
</script>

<Grid p={{ base: 'md' }} gap={{ base: 'md' }}>
	<Grid variant="ghost" p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant="outline" p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>

	<Grid variant="solid" p={{ base: 'md' }}>
		<H1>This is an H1</H1>
		<P>This is a P</P>
	</Grid>
</Grid>
