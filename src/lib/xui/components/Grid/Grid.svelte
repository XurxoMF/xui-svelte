<script lang="ts">
	import { cm, frcv } from '$lib/xui/utils/classes';

	import { GRID_CLASSES } from './classes';
	import type { GridProps } from './types';

	let {
		columns = GRID_CLASSES.defaultVariants.columns,
		variant = GRID_CLASSES.defaultVariants.variant,
		gap = GRID_CLASSES.defaultVariants.gap,
		gapX = GRID_CLASSES.defaultVariants.gapX,
		gapY = GRID_CLASSES.defaultVariants.gapY,
		p = GRID_CLASSES.defaultVariants.p,
		pl = GRID_CLASSES.defaultVariants.pl,
		pr = GRID_CLASSES.defaultVariants.pr,
		pt = GRID_CLASSES.defaultVariants.pt,
		pb = GRID_CLASSES.defaultVariants.pb,
		px = GRID_CLASSES.defaultVariants.px,
		py = GRID_CLASSES.defaultVariants.py,
		rounded = GRID_CLASSES.defaultVariants.rounded,
		align = GRID_CLASSES.defaultVariants.align,
		justify = GRID_CLASSES.defaultVariants.justify,
		flow = GRID_CLASSES.defaultVariants.flow,
		isBreakpoint = GRID_CLASSES.defaultVariants.isBreakpoint,
		class: className,
		children,
		...restProps
	}: GridProps = $props();
</script>

<div
	class={cm(
		GRID_CLASSES.base,
		frcv(GRID_CLASSES.variants.columns, columns),
		frcv(GRID_CLASSES.variants.variant, variant),
		frcv(GRID_CLASSES.variants.gap, gap),
		frcv(GRID_CLASSES.variants.gapX, gapX),
		frcv(GRID_CLASSES.variants.gapY, gapY),
		frcv(GRID_CLASSES.variants.p, p),
		frcv(GRID_CLASSES.variants.pl, pl),
		frcv(GRID_CLASSES.variants.pr, pr),
		frcv(GRID_CLASSES.variants.pt, pt),
		frcv(GRID_CLASSES.variants.pb, pb),
		frcv(GRID_CLASSES.variants.px, px),
		frcv(GRID_CLASSES.variants.py, py),
		frcv(GRID_CLASSES.variants.rounded, rounded),
		frcv(GRID_CLASSES.variants.align, align),
		frcv(GRID_CLASSES.variants.justify, justify),
		frcv(GRID_CLASSES.variants.flow, flow),
		frcv(GRID_CLASSES.variants.isBreakpoint, isBreakpoint),
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
