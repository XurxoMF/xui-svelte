import type { HTMLAttributes } from 'svelte/elements';

import type { ReactiveClassVariantsProps } from '$lib/xui/types';

import type { GRID_CLASSES } from './classes';

export type GridProps = HTMLAttributes<HTMLDivElement> & ReactiveClassVariantsProps<typeof GRID_CLASSES.variants>;
