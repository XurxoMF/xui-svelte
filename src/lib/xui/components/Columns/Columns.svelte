<script lang="ts">
	import { cn } from 'tailwind-variants';

	import { COLUMNS_CLASSES } from './classes';
	import type { ColumnsProps } from './types';

	let {
		variant,
		p,
		pl,
		pt,
		pr,
		pb,
		px,
		py,
		shadow,
		rounded,
		position,
		top,
		right,
		bottom,
		left,
		inset,
		isBreakpoint,
		columns,
		gap,
		gapX,
		gapY,
		class: className,
		children,
		...restProps
	}: ColumnsProps = $props();
</script>

<div
	class={cn(
		COLUMNS_CLASSES({ variant, p, pl, pt, pr, pb, px, py, shadow, rounded, position, top, right, bottom, left, inset, isBreakpoint, columns, gap, gapX, gapY }),
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
