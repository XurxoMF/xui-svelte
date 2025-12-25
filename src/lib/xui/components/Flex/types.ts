import type { HTMLAttributes } from 'svelte/elements';

import type { ReactiveClassVariantsProps } from '$lib/xui/types';

import type { FLEX_CLASSES } from './classes';

export type FlexProps = HTMLAttributes<HTMLDivElement> & ReactiveClassVariantsProps<typeof FLEX_CLASSES.variants>;
