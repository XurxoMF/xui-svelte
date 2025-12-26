<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { H1PropsType } from './types';

	let { class: className, children, ...restProps }: H1PropsType = $props();
</script>

<h1 class={cn('text-5xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
