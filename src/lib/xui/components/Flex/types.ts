import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';

import type { FLEX_CLASSES } from './classes';

export type FlexProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof FLEX_CLASSES>;
