<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { H4PropsType } from './types';

	let { class: className, children, ...restProps }: H4PropsType = $props();
</script>

<h1 class={cn('text-2xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
