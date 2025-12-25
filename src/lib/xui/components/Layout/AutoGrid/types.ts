import type { HTMLAttributes } from 'svelte/elements';

import type { ClassVariantProps, ReactiveClassVariantProps } from '$lib/xui/types';

import type { AUTO_GRID_CLASSES } from './classes';

export type AutoGridClassProps = {
	columns?: ClassVariantProps<typeof AUTO_GRID_CLASSES.variants.columns> | undefined;
	gap?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.gap> | undefined;
	gapX?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.gapX> | undefined;
	gapY?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.gapY> | undefined;
	align?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.align> | undefined;
	justify?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.justify> | undefined;
	variant?: ClassVariantProps<typeof AUTO_GRID_CLASSES.variants.variant> | undefined;
	p?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.p> | undefined;
	pl?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.pl> | undefined;
	pr?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.pr> | undefined;
	pt?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.pt> | undefined;
	pb?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.pb> | undefined;
	px?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.px> | undefined;
	py?: ReactiveClassVariantProps<typeof AUTO_GRID_CLASSES.variants.py> | undefined;
	rounded?: ClassVariantProps<typeof AUTO_GRID_CLASSES.variants.rounded> | undefined;
	position?: ClassVariantProps<typeof AUTO_GRID_CLASSES.variants.position> | undefined;
	top?: ClassVariantProps<typeof AUTO_GRID_CLASSES.variants.top> | undefined;
	right?: ClassVariantProps<typeof AUTO_GRID_CLASSES.variants.right> | undefined;
	bottom?: ClassVariantProps<typeof AUTO_GRID_CLASSES.variants.bottom> | undefined;
	left?: ClassVariantProps<typeof AUTO_GRID_CLASSES.variants.left> | undefined;
	inset?: ClassVariantProps<typeof AUTO_GRID_CLASSES.variants.inset> | undefined;
	isBreakpoint?: ClassVariantProps<typeof AUTO_GRID_CLASSES.variants.isBreakpoint> | undefined;
};

export type AutoGridProps = HTMLAttributes<HTMLDivElement> & AutoGridClassProps;
