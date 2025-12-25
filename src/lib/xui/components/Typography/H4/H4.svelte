<script lang="ts">
	import { cm } from '$lib/xui/utils/classes';

	import type { H4PropsType } from './types';

	let { class: className, children, ...restProps }: H4PropsType = $props();
</script>

<h1 class={cm('text-2xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
