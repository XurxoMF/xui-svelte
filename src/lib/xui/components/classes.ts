import { cv } from '$lib/xui/utils/classes';

/**
 * Classes used on every container.
 */
export const GENERIC_CONTAINER_CLASSES = cv({
	variants: {
		variant: {
			'ghost-base': 'bg-transparent',
			'ghost-error': 'bg-transparent',
			'ghost-success': 'bg-transparent',
			'ghost-warning': 'bg-transparent',
			'ghost-info': 'bg-transparent',
			'outline-base': 'bg-transparent border-2 border-zinc-150 dark:border-zinc-850',
			'outline-error': 'bg-transparent border-2 border-red-400 dark:border-red-900',
			'outline-success': 'bg-transparent border-2 border-green-400 dark:border-green-900',
			'outline-warning': 'bg-transparent border-2 border-yellow-300 dark:border-yellow-800',
			'outline-info': 'bg-transparent border-2 border-blue-400 dark:border-blue-900',
			'card-base': 'bg-zinc-150/50 dark:bg-zinc-850/50 border-2 border-zinc-150 dark:border-zinc-850',
			'card-error': 'bg-red-400/50 dark:bg-red-900/50 border-2 border-red-400 dark:border-red-900',
			'card-success': 'bg-green-400/50 dark:bg-green-900/50 border-2 border-green-400 dark:border-green-900',
			'card-warning': 'bg-yellow-300/50 dark:bg-yellow-800/50 border-2 border-yellow-300 dark:border-yellow-800',
			'card-info': 'bg-blue-400/50 dark:bg-blue-900/50 border-2 border-blue-400 dark:border-blue-900',
			'solid-base': 'bg-zinc-150 dark:bg-zinc-850',
			'solid-error': 'bg-red-400 dark:bg-red-900',
			'solid-success': 'bg-green-400 dark:bg-green-900',
			'solid-warning': 'bg-yellow-300 dark:bg-yellow-800',
			'solid-info': 'bg-blue-400 dark:bg-blue-900'
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
		variant: { base: 'ghost-base' },
		rounded: { base: 'xl' },
		isBreakpoint: { base: 'false' }
	}
});

/**
 * Classes used on most components.
 */
export const GENERIC_COMPONENT_CLASSES = cv({
	variants: {
		variant: {
			'ghost-base': 'bg-transparent',
			'ghost-error': 'bg-transparent',
			'ghost-success': 'bg-transparent',
			'ghost-warning': 'bg-transparent',
			'ghost-info': 'bg-transparent',
			'outline-base': 'bg-transparent border-2 border-2 dark:border-zinc-800',
			'outline-error': 'bg-transparent border-2 border-red-500 dark:border-red-800',
			'outline-success': 'bg-transparent border-2 border-green-500 dark:border-green-800',
			'outline-warning': 'bg-transparent border-2 border-yellow-400 dark:border-yellow-700',
			'outline-info': 'bg-transparent border-2 border-blue-500 dark:border-blue-800',
			'card-base': 'bg-100/50 dark:bg-zinc-800/50 border-2 border-2 dark:border-zinc-800',
			'card-error': 'bg-red-500/50 dark:bg-red-800/50 border-2 border-red-500 dark:border-red-800',
			'card-success': 'bg-green-500/50 dark:bg-green-800/50 border-2 border-green-500 dark:border-green-800',
			'card-warning': 'bg-yellow-400/50 dark:bg-yellow-700/50 border-2 border-yellow-400 dark:border-yellow-700',
			'card-info': 'bg-blue-500/50 dark:bg-blue-800/50 border-2 border-blue-500 dark:border-blue-800',
			'solid-base': 'bg-100 dark:bg-zinc-800',
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
		variant: { base: 'card-base' },
		size: { base: 'md' },
		width: { base: 'fit' },
		rounded: { base: 'md' }
	}
});
