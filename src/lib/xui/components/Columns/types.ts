import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';

import type { COLUMNS_CLASSES } from './classes';

export type ColumnsProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof COLUMNS_CLASSES>;
