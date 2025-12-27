<script lang="ts">
	import { Checkbox } from 'bits-ui';

	import { PHCheckBoldIcon, PHQuestionMarkBoldIcon, PHXBoldIcon } from '$lib/xui/components/Icons';

	import type { CheckboxProps } from './types';
	import { cn } from 'tailwind-variants';
	import { CHECKBOX_CLASSES } from './classes';

	let { checked = $bindable(false), variant, mode, size, class: className, ...restProps }: CheckboxProps = $props();
</script>

<Checkbox.Root bind:checked class={cn(CHECKBOX_CLASSES({ variant, mode, size }), className)} {...restProps}>
	{#snippet children({ checked, indeterminate })}
		{#if indeterminate}
			<PHQuestionMarkBoldIcon />
		{:else if checked}
			<PHCheckBoldIcon />
		{:else}
			<PHXBoldIcon />
		{/if}
	{/snippet}
</Checkbox.Root>
