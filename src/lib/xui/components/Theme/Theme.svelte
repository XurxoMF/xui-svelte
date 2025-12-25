<script lang="ts">
	import { setScale, setTheme } from './states.svelte';

	let { children } = $props();

	$effect(() => {
		// Manage theme.
		switch (localStorage.getItem('THEME')) {
			case 'dark':
				setTheme('dark');
				break;
			case 'light':
				setTheme('light');
				break;
			default:
				const newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
				setTheme(newTheme);
		}

		// Apply scale
		switch (localStorage.getItem('SCALE')) {
			case 'xs':
				setScale('xs');
				break;
			case 'sm':
				setScale('sm');
				break;
			case 'base':
				setScale('base');
				break;
			case 'ls':
				setScale('lg');
				break;
			case 'xl':
				setScale('xl');
				break;
			default:
				setScale('base');
		}

		// Add events to control theme
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			const newTheme = event.matches ? 'dark' : 'light';
			setTheme(newTheme);
		});
	});
</script>

{@render children()}
