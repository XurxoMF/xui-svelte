import type { HTMLAttributes } from 'svelte/elements';

import type { ClassVariantProps, ReactiveClassVariantProps } from '$lib/xui/types';

import type { GRID_CLASSES } from './classes';

export type GridClassProps = {
	columns?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.columns> | undefined;
	gap?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.gap> | undefined;
	gapX?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.gapX> | undefined;
	gapY?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.gapY> | undefined;
	align?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.align> | undefined;
	justify?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.justify> | undefined;
	flow?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.flow> | undefined;
	variant?: ClassVariantProps<typeof GRID_CLASSES.variants.variant> | undefined;
	p?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.p> | undefined;
	pl?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.pl> | undefined;
	pr?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.pr> | undefined;
	pt?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.pt> | undefined;
	pb?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.pb> | undefined;
	px?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.px> | undefined;
	py?: ReactiveClassVariantProps<typeof GRID_CLASSES.variants.py> | undefined;
	rounded?: ClassVariantProps<typeof GRID_CLASSES.variants.rounded> | undefined;
	position?: ClassVariantProps<typeof GRID_CLASSES.variants.position> | undefined;
	top?: ClassVariantProps<typeof GRID_CLASSES.variants.top> | undefined;
	right?: ClassVariantProps<typeof GRID_CLASSES.variants.right> | undefined;
	bottom?: ClassVariantProps<typeof GRID_CLASSES.variants.bottom> | undefined;
	left?: ClassVariantProps<typeof GRID_CLASSES.variants.left> | undefined;
	inset?: ClassVariantProps<typeof GRID_CLASSES.variants.inset> | undefined;
	isBreakpoint?: ClassVariantProps<typeof GRID_CLASSES.variants.isBreakpoint> | undefined;
};

export type GridProps = HTMLAttributes<HTMLDivElement> & GridClassProps;
