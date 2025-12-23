<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export type H6PropsType = HTMLAttributes<HTMLHeadingElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className, children, ...restProps }: H6PropsType = $props();
</script>

<h6 class={cn('text-lg font-bold', className)} {...restProps}>
	{@render children?.()}
</h6>
