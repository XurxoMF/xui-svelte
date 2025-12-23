<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export type H1PropsType = HTMLAttributes<HTMLHeadingElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className, children, ...restProps }: H1PropsType = $props();
</script>

<h1 class={cn('text-5xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
