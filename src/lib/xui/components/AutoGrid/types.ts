import type { HTMLAttributes } from 'svelte/elements';

import type { ReactiveClassVariantsProps } from '$lib/xui/types';

import type { AUTO_GRID_CLASSES } from './classes';

export type AutoGridProps = HTMLAttributes<HTMLDivElement> & ReactiveClassVariantsProps<typeof AUTO_GRID_CLASSES.variants>;
