<script lang="ts">
	import { cn } from 'tailwind-variants';

	import { FLEX_CLASSES } from './classes';
	import type { FlexProps } from './types';

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
		direction,
		gap,
		gapX,
		gapY,
		align,
		justify,
		class: className,
		children,
		...restProps
	}: FlexProps = $props();
</script>

<div
	class={cn(
		FLEX_CLASSES({
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
			direction,
			gap,
			gapX,
			gapY,
			align,
			justify
		}),
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
