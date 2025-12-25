<script lang="ts">
	import { cm } from '$lib/xui/utils/classes';

	import type { H2PropsType } from './types';

	let { class: className, children, ...restProps }: H2PropsType = $props();
</script>

<h1 class={cm('text-4xl font-bold', className)} {...restProps}>
	{@render children?.()}
</h1>
