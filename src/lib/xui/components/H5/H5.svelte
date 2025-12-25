<script lang="ts">
	import { cm } from '$lib/xui/utils/classes';

	import type { H5PropsType } from './types';

	let { class: className, children, ...restProps }: H5PropsType = $props();
</script>

<h1 class={cm('text-xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
