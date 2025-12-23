<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export type PPropsType = HTMLAttributes<HTMLParagraphElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/xui/utils';

	let { class: className, children, ...restProps }: PPropsType = $props();
</script>

<p class={cn(className)} {...restProps}>
	{@render children?.()}
</p>
