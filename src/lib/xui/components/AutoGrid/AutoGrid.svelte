<script lang="ts">
	import { cm, frcv } from '$lib/xui/utils/classes';

	import { AUTO_GRID_CLASSES } from './classes';
	import type { AutoGridProps } from './types';

	let {
		columns = AUTO_GRID_CLASSES.defaultVariants.columns,
		variant = AUTO_GRID_CLASSES.defaultVariants.variant,
		gap = AUTO_GRID_CLASSES.defaultVariants.gap,
		gapX = AUTO_GRID_CLASSES.defaultVariants.gapX,
		gapY = AUTO_GRID_CLASSES.defaultVariants.gapY,
		p = AUTO_GRID_CLASSES.defaultVariants.p,
		pl = AUTO_GRID_CLASSES.defaultVariants.pl,
		pr = AUTO_GRID_CLASSES.defaultVariants.pr,
		pt = AUTO_GRID_CLASSES.defaultVariants.pt,
		pb = AUTO_GRID_CLASSES.defaultVariants.pb,
		px = AUTO_GRID_CLASSES.defaultVariants.px,
		py = AUTO_GRID_CLASSES.defaultVariants.py,
		rounded = AUTO_GRID_CLASSES.defaultVariants.rounded,
		align = AUTO_GRID_CLASSES.defaultVariants.align,
		justify = AUTO_GRID_CLASSES.defaultVariants.justify,
		isBreakpoint = AUTO_GRID_CLASSES.defaultVariants.isBreakpoint,
		class: className,
		children,
		...restProps
	}: AutoGridProps = $props();

	// AUTO_GRID_CLASSES({ columns, variant, gap, gapX, gapY, p, pl, pr, pt, pb, px, py, align, justify, isBreakpoint })
</script>

<div
	class={cm(
		AUTO_GRID_CLASSES.base,
		frcv(AUTO_GRID_CLASSES.variants.columns, columns),
		frcv(AUTO_GRID_CLASSES.variants.variant, variant),
		frcv(AUTO_GRID_CLASSES.variants.gap, gap),
		frcv(AUTO_GRID_CLASSES.variants.gapX, gapX),
		frcv(AUTO_GRID_CLASSES.variants.gapY, gapY),
		frcv(AUTO_GRID_CLASSES.variants.p, p),
		frcv(AUTO_GRID_CLASSES.variants.pl, pl),
		frcv(AUTO_GRID_CLASSES.variants.pr, pr),
		frcv(AUTO_GRID_CLASSES.variants.pt, pt),
		frcv(AUTO_GRID_CLASSES.variants.pb, pb),
		frcv(AUTO_GRID_CLASSES.variants.px, px),
		frcv(AUTO_GRID_CLASSES.variants.py, py),
		frcv(AUTO_GRID_CLASSES.variants.rounded, rounded),
		frcv(AUTO_GRID_CLASSES.variants.align, align),
		frcv(AUTO_GRID_CLASSES.variants.justify, justify),
		frcv(AUTO_GRID_CLASSES.variants.isBreakpoint, isBreakpoint),
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
