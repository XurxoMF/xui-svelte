<script lang="ts">
	import { cn } from 'tailwind-variants';

	import { GRID_CLASSES } from './classes';
	import type { GridProps } from './types';

	let {
		variant,
		mode,
		width,
		height,
		p,
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
		justify,
		align,
		class: className,
		children,
		...restProps
	}: GridProps = $props();
</script>

<div
	class={cn(
		GRID_CLASSES({
			variant,
			mode,
			width,
			height,
			p,
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
			justify,
			align
		}),
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
