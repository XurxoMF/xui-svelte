<script lang="ts">
	import { cm } from '$lib/xui/utils/classes';

	import type { H1PropsType } from './types';

	let { class: className, children, ...restProps }: H1PropsType = $props();
</script>

<h1 class={cm('text-5xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
