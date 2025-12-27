<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { H6PropsType } from './types';

	let { class: className, children, ...restProps }: H6PropsType = $props();
</script>

<h1 class={cn('text-lg font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
