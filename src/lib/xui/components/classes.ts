import { tv } from 'tailwind-variants';

/**
 * Classes used on every container.
 */
export const GENERIC_CONTAINER_CLASSES = tv({
	variants: {
		variant: {
			'ghost-base': 'bg-transparent',
			'ghost-error': 'bg-transparent',
			'ghost-success': 'bg-transparent',
			'ghost-warning': 'bg-transparent',
			'ghost-info': 'bg-transparent',
			'outline-base': 'border border-zinc-150 bg-transparent dark:border-zinc-800',
			'outline-error': 'border border-red-500 bg-transparent dark:border-red-800',
			'outline-success': 'border border-green-500 bg-transparent dark:border-green-800',
			'outline-warning': 'border border-yellow-400 bg-transparent dark:border-yellow-700',
			'outline-info': 'border border-blue-500 bg-transparent dark:border-blue-800',
			'card-base': 'border border-zinc-150 bg-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-850/50',
			'card-error': 'border border-red-500 bg-red-400/50 dark:border-red-800 dark:bg-red-900/50',
			'card-success': 'border border-green-500 bg-green-400/50 dark:border-green-800 dark:bg-green-900/50',
			'card-warning': 'border border-yellow-400 bg-yellow-300/50 dark:border-yellow-700 dark:bg-yellow-800/50',
			'card-info': 'border border-blue-500 bg-blue-400/50 dark:border-blue-800 dark:bg-blue-900/50',
			'solid-base': 'bg-zinc-150 dark:bg-zinc-800',
			'solid-error': 'bg-red-500 dark:bg-red-800',
			'solid-success': 'bg-green-500 dark:bg-green-800',
			'solid-warning': 'bg-yellow-400 dark:bg-yellow-700',
			'solid-info': 'bg-blue-500 dark:bg-blue-800'
		},
		p: {
			none: 'p-0',
			xs: 'p-1',
			sm: 'p-2',
			md: 'p-4',
			lg: 'p-6',
			xl: 'p-8'
		},
		pl: {
			none: 'pl-0',
			xs: 'pl-1',
			sm: 'pl-2',
			md: 'pl-4',
			lg: 'pl-6',
			xl: 'pl-8'
		},
		pr: {
			none: 'pr-0',
			xs: 'pr-1',
			sm: 'pr-2',
			md: 'pr-4',
			lg: 'pr-6',
			xl: 'pr-8'
		},
		pt: {
			none: 'pt-0',
			xs: 'pt-1',
			sm: 'pt-2',
			md: 'pt-4',
			lg: 'pt-6',
			xl: 'pt-8'
		},
		pb: {
			none: 'pb-0',
			xs: 'pb-1',
			sm: 'pb-2',
			md: 'pb-4',
			lg: 'pb-6',
			xl: 'pb-8'
		},
		px: {
			none: 'px-0',
			xs: 'px-1',
			sm: 'px-2',
			md: 'px-4',
			lg: 'px-6',
			xl: 'px-8'
		},
		py: {
			none: 'py-0',
			xs: 'py-1',
			sm: 'py-2',
			md: 'py-4',
			lg: 'py-6',
			xl: 'py-8'
		},
		shadow: {
			none: 'shadow-none',
			sm: 'shadow-sm',
			md: 'shadow-md',
			lg: 'shadow-lg',
			xl: 'shadow-xl',
			'2xl': 'shadow-2xl',
			'3xl': 'shadow-3xl',
			'4xl': 'shadow-4xl'
		},
		rounded: {
			none: 'rounded-none',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			xl: 'rounded-xl',
			'2xl': 'rounded-2xl',
			'3xl': 'rounded-3xl',
			'4xl': 'rounded-4xl',
			full: 'rounded-full'
		},
		position: {
			static: 'static',
			relative: 'relative',
			absolute: 'absolute',
			fixed: 'fixed',
			sticky: 'sticky'
		},
		top: {
			none: 'top-0',
			xs: 'top-1',
			sm: 'top-2',
			md: 'top-4',
			lg: 'top-6',
			xl: 'top-8'
		},
		right: {
			none: 'right-0',
			xs: 'right-1',
			sm: 'right-2',
			md: 'right-4',
			lg: 'right-6',
			xl: 'right-8'
		},
		bottom: {
			none: 'bottom-0',
			xs: 'bottom-1',
			sm: 'bottom-2',
			md: 'bottom-4',
			lg: 'bottom-6',
			xl: 'bottom-8'
		},
		left: {
			none: 'left-0',
			xs: 'left-1',
			sm: 'left-2',
			md: 'left-4',
			lg: 'left-6',
			xl: 'left-8'
		},
		inset: {
			none: 'inset-0',
			xs: 'inset-1',
			sm: 'inset-2',
			md: 'inset-4',
			lg: 'inset-6',
			xl: 'inset-8'
		},
		isBreakpoint: {
			true: '@container',
			false: ''
		}
	},
	defaultVariants: {
		variant: 'ghost-base',
		rounded: 'xl',
		isBreakpoint: false
	}
});

/**
 * Classes used on most components.
 */
export const GENERIC_COMPONENT_CLASSES = tv({
	variants: {
		variant: {
			'ghost-base': 'bg-transparent',
			'ghost-error': 'bg-transparent',
			'ghost-success': 'bg-transparent',
			'ghost-warning': 'bg-transparent',
			'ghost-info': 'bg-transparent',
			'outline-base': 'border border-zinc-150 bg-transparent dark:border-zinc-800',
			'outline-error': 'border border-red-500 bg-transparent dark:border-red-800',
			'outline-success': 'border border-green-500 bg-transparent dark:border-green-800',
			'outline-warning': 'border border-yellow-400 bg-transparent dark:border-yellow-700',
			'outline-info': 'border border-blue-500 bg-transparent dark:border-blue-800',
			'card-base': 'border border-zinc-150 bg-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-850/50',
			'card-error': 'border border-red-500 bg-red-400/50 dark:border-red-800 dark:bg-red-900/50',
			'card-success': 'border border-green-500 bg-green-400/50 dark:border-green-800 dark:bg-green-900/50',
			'card-warning': 'border border-yellow-400 bg-yellow-300/50 dark:border-yellow-700 dark:bg-yellow-800/50',
			'card-info': 'border border-blue-500 bg-blue-400/50 dark:border-blue-800 dark:bg-blue-900/50',
			'solid-base': 'bg-zinc-150 dark:bg-zinc-800',
			'solid-error': 'bg-red-500 dark:bg-red-800',
			'solid-success': 'bg-green-500 dark:bg-green-800',
			'solid-warning': 'bg-yellow-400 dark:bg-yellow-700',
			'solid-info': 'bg-blue-500 dark:bg-blue-800'
		},
		size: {
			sm: 'h-6 text-sm',
			md: 'h-8 text-base',
			lg: 'h-10 text-lg'
		},
		width: {
			full: 'w-full',
			fit: 'w-fit',
			'flex-1': 'flex-1',
			'flex-2': 'flex-2',
			'flex-3': 'flex-3',
			'flex-4': 'flex-4'
		},
		shadow: {
			none: 'shadow-none',
			sm: 'shadow-sm',
			md: 'shadow-md',
			lg: 'shadow-lg',
			xl: 'shadow-xl',
			'2xl': 'shadow-2xl',
			'3xl': 'shadow-3xl',
			'4xl': 'shadow-4xl'
		},
		rounded: {
			none: 'rounded-none',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			xl: 'rounded-xl',
			full: 'rounded-full'
		}
	},
	defaultVariants: {
		variant: 'card-base',
		size: 'md',
		width: 'fit',
		shadow: 'sm',
		rounded: 'md'
	}
});
