<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	import { GENERIC_CONTAINER_CLASSES } from '$lib/xui/utils/classes';

	/**
	 * Auto grid container classes to use on the auto grid container.
	 */
	export const GRID_CLASSES = {
		base: 'grid',
		variants: {
			columns: {
				1: 'grid-cols-1',
				2: 'grid-cols-2',
				3: 'grid-cols-3',
				4: 'grid-cols-4',
				5: 'grid-cols-5',
				6: 'grid-cols-6',
				7: 'grid-cols-7',
				8: 'grid-cols-8',
				9: 'grid-cols-9',
				10: 'grid-cols-10',
				11: 'grid-cols-11',
				12: 'grid-cols-12'
			},
			rows: {
				1: 'grid-rows-1',
				2: 'grid-rows-2',
				3: 'grid-rows-3',
				4: 'grid-rows-4',
				5: 'grid-rows-5',
				6: 'grid-rows-6',
				7: 'grid-rows-7',
				8: 'grid-rows-8',
				9: 'grid-rows-9',
				10: 'grid-rows-10',
				11: 'grid-rows-11',
				12: 'grid-rows-12'
			},
			gap: {
				none: 'gap-0',
				xs: 'gap-1',
				sm: 'gap-2',
				md: 'gap-4',
				lg: 'gap-6',
				xl: 'gap-8'
			},
			gapX: {
				none: 'gap-x-0',
				xs: 'gap-x-1',
				sm: 'gap-x-2',
				md: 'gap-x-4',
				lg: 'gap-x-6',
				xl: 'gap-x-8'
			},
			gapY: {
				none: 'gap-y-0',
				xs: 'gap-y-1',
				sm: 'gap-y-2',
				md: 'gap-y-4',
				lg: 'gap-y-6',
				xl: 'gap-y-8'
			},
			align: {
				start: 'items-start',
				end: 'items-end',
				center: 'items-center',
				baseline: 'items-baseline',
				stretch: 'items-stretch'
			},
			justify: {
				start: 'justify-start',
				end: 'justify-end',
				center: 'justify-center',
				between: 'justify-between',
				around: 'justify-around',
				evenly: 'justify-evenly'
			},
			flow: {
				row: 'grid-flow-row',
				'row-dense': 'grid-flow-row-dense',
				col: 'grid-flow-col',
				'col-dense': 'grid-flow-col-dense',
				dense: 'grid-flow-dense'
			},
			...GENERIC_CONTAINER_CLASSES.variants
		}
	} as const;
	
	export type GridProps = HTMLAttributes<HTMLDivElement> & VProps;
</script>

<script lang="ts">
	import { cn } from '$lib/xui/utils';

	let {
		columns = 1,
		variant = "ghost",
		gap = "md",
		gapX,
		gapY,
		p,
		pl,
		pr,
		pt,
		pb,
		px,
		py,
		align,
		justify,
		flow,
		isBreakpoint = false,
		class: className,
		children,
		...restProps
	}: GridProps = $props();
</script>

<div
	class={cn('grid-flow', , className)}
	{...restProps}
>
	{@render children?.()}
</div>
