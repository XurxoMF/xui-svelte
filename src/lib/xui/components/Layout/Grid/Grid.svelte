<script lang="ts">
	import { cm, fcv, frcv } from '$lib/xui/utils/classes';

	import { GRID_CLASSES } from './classes';
	import type { GridProps } from './types';

	let {
		columns = { base: 1 },
		variant = 'ghost',
		gap = { base: 'sm' },
		gapX,
		gapY,
		p,
		pl,
		pr,
		pt,
		pb,
		px,
		py,
		rounded = 'xl',
		align,
		justify,
		flow,
		isBreakpoint = 'false',
		class: className,
		children,
		...restProps
	}: GridProps = $props();
</script>

<div
	class={cm(
		GRID_CLASSES.base,
		frcv(GRID_CLASSES.variants.columns, columns),
		fcv(GRID_CLASSES.variants.variant, variant),
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
		fcv(GRID_CLASSES.variants.rounded, rounded),
		frcv(GRID_CLASSES.variants.align, align),
		frcv(GRID_CLASSES.variants.justify, justify),
		frcv(GRID_CLASSES.variants.flow, flow),
		fcv(GRID_CLASSES.variants.isBreakpoint, isBreakpoint),
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
