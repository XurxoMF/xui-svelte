import { cv } from '$lib/xui/utils/classes';

import { GENERIC_COMPONENT_CLASSES } from '$lib/xui/components/classes';

/**
 * Button classes to use on the button component.
 */
export const BUTTON_CLASSES = cv(
	{
		base: 'shirnk-0 cursor-pointer flex items-center justify-center gap-1',
		variants: {
			content: {
				text: 'px-2',
				icon: 'aspect-square'
			}
		},
		defaultVariants: {
			content: { base: 'text' }
		}
	},
	GENERIC_COMPONENT_CLASSES
);
