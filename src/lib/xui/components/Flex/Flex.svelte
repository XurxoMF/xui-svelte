<script lang="ts">
	import { cn } from 'tailwind-variants';

	import { FLEX_CLASSES } from './classes';
	import type { FlexProps } from './types';

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
