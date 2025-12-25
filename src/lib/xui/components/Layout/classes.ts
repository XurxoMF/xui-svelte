import { cv } from '$lib/xui/utils/classes';

/**
 * Classes used on every container.
 */
export const GENERIC_CONTAINER_CLASSES = cv({
	variants: {
		variant: {
			ghost: 'bg-transparent',
			outline: 'bg-transparent border-2 border-zinc-200 dark:border-zinc-900',
			solid: 'bg-zinc-200 dark:bg-zinc-900'
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
	}
});
