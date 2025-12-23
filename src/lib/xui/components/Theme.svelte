<script lang="ts" module>
	// THEME MANAGEMENT

	/**
	 * The available themes.
	 */
	export const THEMES = ['light', 'dark'] as const;

	/**
	 * The type of the available themes.
	 */
	export type Themes = (typeof THEMES)[number];

	/**
	 * The current theme.
	 */
	let theme: Themes = $state('light');

	/**
	 * Change the theme.
	 * @param newTheme The new theme to apply.
	 */
	export function setTheme(newTheme: Themes): void {
		localStorage.setItem('THEME', newTheme);
		theme = newTheme;
		document.documentElement.dataset.theme = newTheme;
	}

	// SCALE MANAGEMENT

	/**
	 * The available scales.
	 */
	export const SCALES = ['xs', 'sm', 'base', 'lg', 'xl'] as const;

	/**
	 * The type of the available scales.
	 */
	export type Scales = (typeof SCALES)[number];

	/**
	 * The current scale.
	 */
	let scale: Scales = $state('base');

	/**
	 * Change the scale.
	 * @param newScale The new scale to apply.
	 */
	export function setScale(newScale: Scales): void {
		localStorage.setItem('SCALE', newScale);
		scale = newScale;
		document.documentElement.dataset.scale = newScale;
	}
</script>

<script lang="ts">
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
				const newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
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
