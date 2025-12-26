import { tv } from 'tailwind-variants';

import { GENERIC_CONTAINER_CLASSES } from '$lib/xui/components/classes';

/**
 * Columns container classes to use on the columns container.
 */
export const COLUMNS_CLASSES = tv({
	extend: GENERIC_CONTAINER_CLASSES,
	variants: {
		columns: {
			1: 'columns-1',
			2: 'columns-1 @3xl:columns-2',
			3: 'columns-1 @2xl:columns-2 @6xl:columns-3',
			4: 'columns-1 @xl:columns-2 @4xl:columns-3 @8xl:columns-4',
			5: 'columns-1 @lg:columns-2 @3xl:columns-3 @6xl:columns-4 @9xl:columns-5',
			6: 'columns-1 @sm:columns-2 @2xl:columns-3 @4xl:columns-4 @6xl:columns-6',
			7: 'columns-1 @sm:columns-2 @2xl:columns-3 @4xl:columns-4 @6xl:columns-6 @9xl:columns-7'
		},
		gap: {
			none: 'gap-x-0 space-y-0',
			xs: 'gap-x-1 space-y-1',
			sm: 'gap-x-2 space-y-2',
			md: 'gap-x-4 space-y-4',
			lg: 'gap-x-6 space-y-6',
			xl: 'gap-x-8 space-y-8'
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
			none: 'space-y-0',
			xs: 'space-y-1',
			sm: 'space-y-2',
			md: 'space-y-4',
			lg: 'space-y-6',
			xl: 'space-y-8'
		}
	},
	defaultVariants: {
		columns: 1,
		gap: 'md'
	}
});
