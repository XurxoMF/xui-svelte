<script lang="ts">
	import './layout.css';

	import favicon from '$lib/assets/favicon.png';

	import { Theme } from '$lib/xui/components/App/Theme';
	import { Background } from '$lib/xui/components/App/Background';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Theme>
	<Background>
		{@render children?.()}
	</Background>
</Theme>
