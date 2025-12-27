<script lang="ts">
	import type { WithoutChildren } from 'bits-ui';

	import BaseIcon, { type BaseIconProps } from '$lib/xui/components/Icons/BaseIcon.svelte';

	let { ...restProps }: WithoutChildren<BaseIconProps> = $props();
</script>

<BaseIcon {...restProps}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" class="h-[1em] w-[1em]">
		<path fill="currentColor" d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12" />
	</svg>
</BaseIcon>
