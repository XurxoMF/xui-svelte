<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export type H3PropsType = HTMLAttributes<HTMLHeadingElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/xui/utils';

	let { class: className, children, ...restProps }: H3PropsType = $props();
</script>

<h3 class={cn('text-3xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h3>
