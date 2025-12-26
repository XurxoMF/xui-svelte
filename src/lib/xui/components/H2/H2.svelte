<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { H2PropsType } from './types';

	let { class: className, children, ...restProps }: H2PropsType = $props();
</script>

<h1 class={cn('text-4xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
