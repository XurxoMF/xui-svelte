<script lang="ts">
	import { cm } from '$lib/xui/utils/classes';

	import type { PPropsType } from './types';

	let { class: className, children, ...restProps }: PPropsType = $props();
</script>

<p class={cm(className)} {...restProps}>
	{@render children?.()}
</p>
