<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export type H2PropsType = HTMLAttributes<HTMLHeadingElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className, children, ...restProps }: H2PropsType = $props();
</script>

<h2 class={cn('text-4xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h2>
