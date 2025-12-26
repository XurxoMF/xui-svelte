import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';

import type { GRID_CLASSES } from './classes';

export type GridProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof GRID_CLASSES>;
