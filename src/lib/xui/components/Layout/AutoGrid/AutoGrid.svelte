<script lang="ts">
	import { cm, fcv, frcv } from '$lib/xui/utils/classes';

	import { AUTO_GRID_CLASSES } from './classes';
	import type { AutoGridProps } from './types';

	let {
		columns = 1,
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
		isBreakpoint = 'false',
		class: className,
		children,
		...restProps
	}: AutoGridProps = $props();

	// AUTO_GRID_CLASSES({ columns, variant, gap, gapX, gapY, p, pl, pr, pt, pb, px, py, align, justify, isBreakpoint })
</script>

<div
	class={cm(
		AUTO_GRID_CLASSES.base,
		fcv(AUTO_GRID_CLASSES.variants.columns, columns),
		fcv(AUTO_GRID_CLASSES.variants.variant, variant),
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
		fcv(AUTO_GRID_CLASSES.variants.rounded, rounded),
		frcv(AUTO_GRID_CLASSES.variants.align, align),
		frcv(AUTO_GRID_CLASSES.variants.justify, justify),
		fcv(AUTO_GRID_CLASSES.variants.isBreakpoint, isBreakpoint),
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
