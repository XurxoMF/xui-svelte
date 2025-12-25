import { cv } from '$lib/xui/utils/classes';

import { GENERIC_CONTAINER_CLASSES } from '$lib/xui/components/classes';

/**
 * Flex container classes to use on the flex container.
 */
export const FLEX_CLASSES = cv(GENERIC_CONTAINER_CLASSES, {
	base: 'flex',
	variants: {
		direction: {
			row: 'flex-row',
			'row-reverse': 'flex-row-reverse',
			column: 'flex-col',
			'column-reverse': 'flex-col-reverse'
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
		direction: { base: 'row' },
		gap: { base: 'md' }
	}
});
