<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { H5PropsType } from './types';

	let { class: className, children, ...restProps }: H5PropsType = $props();
</script>

<h1 class={cn('text-xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
