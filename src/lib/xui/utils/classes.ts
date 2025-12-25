import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges classes using twMerge and clsx to avoid duplication and allowing for dynamic classes.
 *
 * @param inputs Classes to merge.
 * @returns The merged classes.
 */
export function cm(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export type WindowBreakpoint = 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ContainerBreakpoint = 'base' | '@xs' | '@sm' | '@md' | '@lg' | '@xl' | '@2xl' | '@3xl' | '@4xl' | '@5xl' | '@6xl' | '@7xl';
export type Breakpoint = WindowBreakpoint | ContainerBreakpoint;

export function frcv<const T extends Record<string, string>>(variant: T, value: string | Partial<Record<Breakpoint, keyof T>> | undefined): string | undefined {
	if (!value) return undefined;

	if (typeof value !== 'object') {
		return variant[value];
	}

	return Object.entries(value)
		.map(([breakpoint, key]) => {
			if (key === undefined) return null;
			const className = variant[key as keyof T];
			return breakpoint === 'base' ? className : `${breakpoint}:${className}`;
		})
		.filter(Boolean)
		.join(' ');
}

export function cv<
	const T extends {
		base?: string;
		variants?: Record<string, Record<string, string>>;
		defaultVariants?: Record<string, string | Partial<Record<Breakpoint, string>>>;
	},
	const E extends {
		base?: string;
		variants?: Record<string, Record<string, string>>;
		defaultVariants?: Record<string, string | Partial<Record<Breakpoint, string>>>;
	}
>(config: T, extend?: E) {
	return {
		base: `${config.base ?? ''} ${extend?.base ?? ''}`.trim(),
		variants: { ...config.variants, ...extend?.variants },
		defaultVariants: { ...config.defaultVariants, ...extend?.defaultVariants }
	} as T & E;
}
