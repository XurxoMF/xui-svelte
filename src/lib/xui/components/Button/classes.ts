import { tv } from 'tailwind-variants';

import { GENERIC_COMPONENT_CLASSES } from '$lib/xui/components/classes';

/**
 * Button classes to use on the button component.
 */
export const BUTTON_CLASSES = tv({
	extend: GENERIC_COMPONENT_CLASSES,
	base: 'shirnk-0 flex cursor-pointer items-center justify-center gap-1 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-25',
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
