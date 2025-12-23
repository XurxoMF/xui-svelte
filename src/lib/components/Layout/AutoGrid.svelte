<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	import { tv, type VariantProps } from 'tailwind-variants';

	import { GENERIC_CONTAINER_CLASSES } from '$lib/utils';

	/**
	 * Auto grid container classes to use on the auto grid container.
	 */
	export const AUTO_GRID_CONTAINER_CLASSES = tv({
		extend: GENERIC_CONTAINER_CLASSES,
		base: 'grid',
		variants: {
			columns: {
				1: 'grid-cols-1',
				2: 'grid-cols-1 @xl:grid-cols-2',
				3: 'grid-cols-1 @md:grid-cols-2 @4xl:grid-cols-3',
				4: 'grid-cols-1 @sm:grid-cols-2 @xl:grid-cols-3 @5xl:grid-cols-4',
				5: 'grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 @2xl:grid-cols-4 @6xl:grid-cols-5',
				6: 'grid-cols-1 @xs:grid-cols-2 @md:grid-cols-3 @xl:grid-cols-4 @3xl:grid-cols-5 @6xl:grid-cols-6',
				7: 'grid-cols-1 @xs:grid-cols-2 @sm:grid-cols-3 @lg:grid-cols-4 @xl:grid-cols-5 @4xl:grid-cols-6 @7xl:grid-cols-7',
				8: 'grid-cols-1 @xs:grid-cols-2 @sm:grid-cols-3 @md:grid-cols-4 @xl:grid-cols-5 @2xl:grid-cols-6 @5xl:grid-cols-7 @7xl:grid-cols-8',
				9: 'grid-cols-1 @xs:grid-cols-2 @sm:grid-cols-3 @md:grid-cols-4 @lg:grid-cols-5 @2xl:grid-cols-6 @3xl:grid-cols-7 @5xl:grid-cols-8 @7xl:grid-cols-9',
				10: 'grid-cols-1 @xs:grid-cols-2 @sm:grid-cols-3 @md:grid-cols-4 @lg:grid-cols-5 @xl:grid-cols-6 @2xl:grid-cols-7 @4xl:grid-cols-8 @5xl:grid-cols-9 @7xl:grid-cols-10',
				11: 'grid-cols-1 @xs:grid-cols-2 @sm:grid-cols-3 @md:grid-cols-4 @lg:grid-cols-5 @xl:grid-cols-6 @2xl:grid-cols-7 @3xl:grid-cols-8 @4xl:grid-cols-9 @6xl:grid-cols-10 @7xl:grid-cols-11',
				12: 'grid-cols-1 @xs:grid-cols-2 @sm:grid-cols-3 @md:grid-cols-4 @lg:grid-cols-5 @xl:grid-cols-6 @2xl:grid-cols-7 @3xl:grid-cols-8 @4xl:grid-cols-9 @5xl:grid-cols-10 @6xl:grid-cols-11 @7xl:grid-cols-12'
			}
		},
		defaultVariants: {
			columns: 1
		}
	});

	export type AutoGridProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof AUTO_GRID_CONTAINER_CLASSES>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let { columns, gap, padding, variant, isBreakpoint, class: className, children, ...restProps }: AutoGridProps = $props();
</script>

<div class={cn(AUTO_GRID_CONTAINER_CLASSES({ columns, variant, isBreakpoint }), className)} {...restProps}>
	{@render children?.()}
</div>
