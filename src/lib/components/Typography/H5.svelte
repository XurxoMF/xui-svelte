<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export type H5PropsType = HTMLAttributes<HTMLHeadingElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className, children, ...restProps }: H5PropsType = $props();
</script>

<h5 class={cn('text-xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h5>
