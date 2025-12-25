<script lang="ts">
	import { cm } from '$lib/xui/utils/classes';

	import type { H3PropsType } from './types';

	let { class: className, children, ...restProps }: H3PropsType = $props();
</script>

<h1 class={cm('text-3xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
