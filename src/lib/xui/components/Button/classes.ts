import { tv } from 'tailwind-variants';

import { GENERIC_COMPONENT_CLASSES } from '$lib/xui/components/classes';

/**
 * Button classes to use on the button component.
 */
export const BUTTON_CLASSES = tv({
	extend: GENERIC_COMPONENT_CLASSES,
	base: 'shirnk-0 cursor-pointer whitespace-nowrap flex items-center justify-center gap-1',
	variants: {
		content: {
			text: 'px-2',
			icon: 'aspect-square'
		}
	},
	defaultVariants: {
		content: 'text'
	}
});
