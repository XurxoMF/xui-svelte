<script lang="ts">
	import { cm, frcv } from '$lib/xui/utils/classes';

	import { FLEX_CLASSES } from './classes';
	import type { FlexProps } from './types';

	let {
		direction = FLEX_CLASSES.defaultVariants.direction,
		variant = FLEX_CLASSES.defaultVariants.variant,
		gap = FLEX_CLASSES.defaultVariants.gap,
		gapX = FLEX_CLASSES.defaultVariants.gapX,
		gapY = FLEX_CLASSES.defaultVariants.gapY,
		p = FLEX_CLASSES.defaultVariants.p,
		pl = FLEX_CLASSES.defaultVariants.pl,
		pr = FLEX_CLASSES.defaultVariants.pr,
		pt = FLEX_CLASSES.defaultVariants.pt,
		pb = FLEX_CLASSES.defaultVariants.pb,
		px = FLEX_CLASSES.defaultVariants.px,
		py = FLEX_CLASSES.defaultVariants.py,
		rounded = FLEX_CLASSES.defaultVariants.rounded,
		align = FLEX_CLASSES.defaultVariants.align,
		justify = FLEX_CLASSES.defaultVariants.justify,
		isBreakpoint = FLEX_CLASSES.defaultVariants.isBreakpoint,
		class: className,
		children,
		...restProps
	}: FlexProps = $props();
</script>

<div
	class={cm(
		FLEX_CLASSES.base,
		frcv(FLEX_CLASSES.variants.direction, direction),
		frcv(FLEX_CLASSES.variants.variant, variant),
		frcv(FLEX_CLASSES.variants.gap, gap),
		frcv(FLEX_CLASSES.variants.gapX, gapX),
		frcv(FLEX_CLASSES.variants.gapY, gapY),
		frcv(FLEX_CLASSES.variants.p, p),
		frcv(FLEX_CLASSES.variants.pl, pl),
		frcv(FLEX_CLASSES.variants.pr, pr),
		frcv(FLEX_CLASSES.variants.pt, pt),
		frcv(FLEX_CLASSES.variants.pb, pb),
		frcv(FLEX_CLASSES.variants.px, px),
		frcv(FLEX_CLASSES.variants.py, py),
		frcv(FLEX_CLASSES.variants.rounded, rounded),
		frcv(FLEX_CLASSES.variants.align, align),
		frcv(FLEX_CLASSES.variants.justify, justify),
		frcv(FLEX_CLASSES.variants.isBreakpoint, isBreakpoint),
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
