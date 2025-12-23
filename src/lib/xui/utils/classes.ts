import { tv } from 'tailwind-variants';

/**
 * Generic container classes to use on every container.
 */
export const GENERIC_CONTAINER_CLASSES = tv({
	variants: {
		variant: {
			ghost: 'bg-transparent',
			outline: 'bg-transparent border border-zinc-800',
			card: 'bg-zinc-800/50 border border-zinc-800',
			solid: 'bg-zinc-800'
		},
		padding: {
			0: 'p-0',
			1: 'p-1',
			2: 'p-2',
			3: 'p-3',
			4: 'p-4',
			5: 'p-5',
			6: 'p-6',
			7: 'p-7',
			8: 'p-8'
		},
		gap: {
			0: 'gap-0',
			1: 'gap-1',
			2: 'gap-2',
			3: 'gap-3',
			4: 'gap-4',
			5: 'gap-5',
			6: 'gap-6',
			7: 'gap-7',
			8: 'gap-8'
		},
		isBreakpoint: {
			true: '@container'
		}
	},
	defaultVariants: {
		variant: 'ghost',
		padding: 4,
		gap: 4,
		isBreakpoint: false
	}
});
