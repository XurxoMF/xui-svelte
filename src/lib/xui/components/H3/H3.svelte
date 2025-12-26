<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { H3PropsType } from './types';

	let { class: className, children, ...restProps }: H3PropsType = $props();
</script>

<h1 class={cn('text-3xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
