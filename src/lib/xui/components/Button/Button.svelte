<script lang="ts">
	import { Button } from 'bits-ui';
	import { cn } from 'tailwind-variants';

	import type { ButtonProps } from './types';
	import { BUTTON_CLASSES } from './classes';

	let { variant, size, width, shadow, rounded, content, class: className, children, ...restProps }: ButtonProps = $props();
</script>

<Button.Root class={cn(BUTTON_CLASSES({ variant, size, width, shadow, rounded, content }), className)} {...restProps}>
	{@render children?.()}
</Button.Root>
