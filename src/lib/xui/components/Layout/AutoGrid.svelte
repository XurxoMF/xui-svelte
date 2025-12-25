<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	import { createClasses } from '$lib/xui/utils/classes';
	import { GENERIC_CONTAINER_CLASSES, type GenericContainerClassProps } from "$lib/xui/generics/classes";

	/**
	 * Auto grid container classes to use on the auto grid container.
	 */
	export const AUTO_GRID_CLASSES = createClasses(
		{
			base: 'grid',
			variants: {
				columns: {
					1: 'grid-cols-1',
					2: 'grid-cols-1 @xl:grid-cols-2',
					3: 'grid-cols-1 @md:grid-cols-2 @4xl:grid-cols-3',
					4: 'grid-cols-1 @sm:grid-cols-2 @xl:grid-cols-3 @5xl:grid-cols-4',
					5: 'grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 @2xl:grid-cols-4 @6xl:grid-cols-5',
					6: 'grid-cols-1 @xs:grid-cols-2 @md:grid-cols-3 @xl:grid-cols-4 @3xl:grid-cols-5 @6xl:grid-cols-6',
					7: 'grid-cols-1 @xs:grid-cols-2 @sm:grid-cols-3 @lg:grid-cols-4 @xl:grid-cols-5 @4xl:grid-cols-6 @7xl:grid-cols-7'
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
				}
			}
		},
		GENERIC_CONTAINER_CLASSES
	);

	type chao = Record<WindowReactiveBreakpoints | ContainerReactiveBreakpoints, keyof AsBooleanOrKey<typeof AUTO_GRID_CLASSES.variants.gap>>
	type hola = keyof AsBooleanOrKey<typeof AUTO_GRID_CLASSES.variants.gap> | chao;

	export type AutoGridClassProps = {
		columns?: ClassVariantProps<typeof AUTO_GRID_CLASSES.variants.columns> | undefined,
		gap?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.gap> | undefined,
		gapX?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.gapX> | undefined,
		gapY?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.gapY> | undefined,
		align?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.align> | undefined,
		justify?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.justify> | undefined
	}

	export type AutoGridProps = HTMLAttributes<HTMLDivElement> & GenericContainerClassProps &  AutoGridClassProps;
</script>

<script lang="ts">
	import { classMerge } from '$lib/xui/utils/classes';
	import type { AsBooleanOrKey, ClassVariantProps, ContainerReactiveBreakpoints, ReactiveClassVariantProps, WindowReactiveBreakpoints } from '$lib/xui/types';

	let {
		columns,
		variant,
		gap,
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
		isBreakpoint,
		class: className,
		children,
		...restProps
	}: AutoGridProps = $props();

	// AUTO_GRID_CLASSES({ columns, variant, gap, gapX, gapY, p, pl, pr, pt, pb, px, py, align, justify, isBreakpoint })
</script>

<div
	class={classMerge('grid-flow', , className)}
	{...restProps}
>
	{@render children?.()}
</div>
