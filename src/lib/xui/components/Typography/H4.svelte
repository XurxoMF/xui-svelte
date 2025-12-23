<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export type H4PropsType = HTMLAttributes<HTMLHeadingElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/xui/utils';

	let { class: className, children, ...restProps }: H4PropsType = $props();
</script>

<h4 class={cn('text-2xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h4>
