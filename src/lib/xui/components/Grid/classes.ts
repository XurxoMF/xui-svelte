import { tv } from 'tailwind-variants';

import { GENERIC_CONTAINER_CLASSES } from '$lib/xui/components/classes';

/**
 * Grid container classes to use on the grid container.
 */
export const GRID_CLASSES = tv({
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
	},
	defaultVariants: {
		columns: 1,
		gap: 'md'
	}
});
