<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { PPropsType } from './types';

	let { class: className, children, ...restProps }: PPropsType = $props();
</script>

<p class={cn(className)} {...restProps}>
	{@render children?.()}
</p>
