<script lang="ts">
	import { Button } from 'bits-ui';

	import { cm, frcv } from '$lib/xui/utils/classes';

	import type { ButtonProps } from './types';
	import { BUTTON_CLASSES } from './classes';

	let { variant, size, width, content, rounded, class: className, children, ...restProps }: ButtonProps = $props();
</script>

<Button.Root
	class={cm(
		BUTTON_CLASSES.base,
		frcv(BUTTON_CLASSES.variants.variant, variant),
		frcv(BUTTON_CLASSES.variants.size, size),
		frcv(BUTTON_CLASSES.variants.width, width),
		frcv(BUTTON_CLASSES.variants.content, content),
		frcv(BUTTON_CLASSES.variants.rounded, rounded),
		className
	)}
	{...restProps}
>
	{@render children?.()}
</Button.Root>
