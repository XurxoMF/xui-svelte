<script lang="ts">
	import './layout.css';

	import favicon from '$lib/assets/favicon.png';

	import { Theme } from '$lib/xui/components';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Theme>
	{@render children()}
</Theme>
