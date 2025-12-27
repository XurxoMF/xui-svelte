import { tv } from 'tailwind-variants';

/**
 * Checkbox classes to use on the checkbox component.
 */
export const CHECKBOX_CLASSES = tv({
	base: 'shirnk-0 flex cursor-pointer items-center justify-center outline-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-1 disabled:cursor-not-allowed disabled:opacity-25 dark:outline-zinc-200',
	variants: {
		variant: {
			ghost: 'rounded-md bg-transparent',
			outline: 'rounded-md bg-transparent inset-ring-2',
			card: 'rounded-md inset-ring-2',
			solid: 'rounded-md'
		},
		mode: {
			base: '',
			error: '',
			success: '',
			warning: '',
			info: ''
		},
		size: {
			sm: 'size-4 text-xs',
			md: 'size-5 text-sm',
			lg: 'size-6 text-base'
		}
	},
	compoundVariants: [
		{
			variant: 'ghost',
			mode: 'base',
			class: 'text-zinc-800 dark:text-zinc-200'
		},
		{
			variant: 'ghost',
			mode: 'error',
			class: 'text-red-400 dark:text-red-600'
		},
		{
			variant: 'ghost',
			mode: 'success',
			class: 'text-green-400 dark:text-green-600'
		},
		{
			variant: 'ghost',
			mode: 'warning',
			class: 'text-yellow-400 dark:text-yellow-600'
		},
		{
			variant: 'ghost',
			mode: 'info',
			class: 'text-blue-400 dark:text-blue-600'
		},

		{
			variant: 'outline',
			mode: 'base',
			class:
				'text-zinc-800 inset-ring-zinc-300 hover:bg-zinc-300 data-[state=checked]:bg-zinc-300 dark:text-zinc-200 dark:inset-ring-zinc-700 dark:hover:bg-zinc-700 dark:data-[state=checked]:bg-zinc-700'
		},
		{
			variant: 'outline',
			mode: 'error',
			class:
				'text-zinc-800 inset-ring-red-400 hover:bg-red-400 data-[state=checked]:bg-red-400 dark:text-zinc-200 dark:inset-ring-red-600 dark:hover:bg-red-600 dark:data-[state=checked]:bg-red-600'
		},
		{
			variant: 'outline',
			mode: 'success',
			class:
				'text-zinc-800 inset-ring-green-400 hover:bg-green-400 data-[state=checked]:bg-green-400 dark:text-zinc-200 dark:inset-ring-green-600 dark:hover:bg-green-600 dark:data-[state=checked]:bg-green-600'
		},
		{
			variant: 'outline',
			mode: 'warning',
			class:
				'text-zinc-800 inset-ring-yellow-400 hover:bg-yellow-400 data-[state=checked]:bg-yellow-400 dark:text-zinc-200 dark:inset-ring-yellow-600 dark:hover:bg-yellow-600 dark:data-[state=checked]:bg-yellow-600'
		},
		{
			variant: 'outline',
			mode: 'info',
			class:
				'text-zinc-800 inset-ring-blue-400 hover:bg-blue-400 data-[state=checked]:bg-blue-400 dark:text-zinc-200 dark:inset-ring-blue-600 dark:hover:bg-blue-600 dark:data-[state=checked]:bg-blue-600'
		},

		{
			variant: 'card',
			mode: 'base',
			class:
				'bg-zinc-200 text-zinc-800 inset-ring-zinc-300 backdrop-blur-sm hover:bg-zinc-300 data-[state=checked]:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-200 dark:inset-ring-zinc-700 dark:hover:bg-zinc-700 dark:data-[state=checked]:bg-zinc-700'
		},
		{
			variant: 'card',
			mode: 'error',
			class:
				'bg-red-300 text-zinc-800 inset-ring-red-400 backdrop-blur-sm hover:bg-red-400 data-[state=checked]:bg-red-400 dark:bg-red-800 dark:text-zinc-200 dark:inset-ring-red-600 dark:hover:bg-red-600 dark:data-[state=checked]:bg-red-600'
		},
		{
			variant: 'card',
			mode: 'success',
			class:
				'bg-green-300 text-zinc-800 inset-ring-green-400 backdrop-blur-sm hover:bg-green-400 data-[state=checked]:bg-green-400 dark:bg-green-800 dark:text-zinc-200 dark:inset-ring-green-600 dark:hover:bg-green-600 dark:data-[state=checked]:bg-green-600'
		},
		{
			variant: 'card',
			mode: 'warning',
			class:
				'bg-yellow-300 inset-ring-yellow-400 backdrop-blur-sm hover:bg-yellow-400 data-[state=checked]:bg-yellow-400 dark:bg-yellow-800 dark:inset-ring-yellow-600 dark:hover:bg-yellow-600 dark:data-[state=checked]:bg-yellow-600'
		},
		{
			variant: 'card',
			mode: 'info',
			class:
				'bg-blue-300 text-zinc-800 inset-ring-blue-400 backdrop-blur-sm hover:bg-blue-400 data-[state=checked]:bg-blue-400 dark:bg-blue-800 dark:text-zinc-200 dark:inset-ring-blue-600 dark:hover:bg-blue-600 dark:data-[state=checked]:bg-blue-600'
		},

		{
			variant: 'solid',
			mode: 'base',
			class: 'bg-zinc-300 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200'
		},
		{
			variant: 'solid',
			mode: 'error',
			class: 'bg-red-400 text-zinc-800 dark:bg-red-600 dark:text-zinc-200'
		},
		{
			variant: 'solid',
			mode: 'success',
			class: 'bg-green-400 text-zinc-800 dark:bg-green-600 dark:text-zinc-200'
		},
		{
			variant: 'solid',
			mode: 'warning',
			class: 'bg-yellow-400 text-zinc-800 dark:bg-yellow-600 dark:text-zinc-200'
		},
		{
			variant: 'solid',
			mode: 'info',
			class: 'bg-blue-400 text-zinc-800 dark:bg-blue-600 dark:text-zinc-200'
		}
	],
	defaultVariants: {
		variant: 'solid',
		modde: 'base',
		size: 'md'
	}
});
