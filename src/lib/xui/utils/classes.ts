import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { Class, ClassVariant, ClassVariants, ReactiveClassVariant } from '$lib/xui/types';

/**
 * Merges classes using twMerge and clsx to avoid duplication and allowing for dynamic classes.
 * @param inputs Classes to merge.
 * @returns The merged classes.
 */
export function classMerge(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

/**
 * Converts a window responsive value to a string.
 *
 * @example
 * ```ts
 * const GAP_MAP = {
 * 	none: 'gap-0',
 * 	xs: 'gap-1',
 * 	sm: 'gap-2',
 * 	md: 'gap-4',
 * 	lg: 'gap-6',
 * 	xl: 'gap-8'
 * } as const;
 *
 * getReactiveClasses("xs", GAP_MAP); => "gap-1"
 * getReactiveClasses({ xs: "xs", @md: "md" }, GAP_MAP); => "xs:gap-1 @md:gap-4"
 * getReactiveClasses({ initial: "xs", md: "md" }, GAP_MAP); => "gap-1 xs:gap-4 md:gap-4
 * ```
 * @param value The value to convert.
 * @param map The map with the values for each breakpoint.
 * @returns The string representation of the value.
 */
export function getReactiveClasses<T extends ClassVariant>(map: T, value: ReactiveClassVariant<T>): string | undefined {
	if (typeof value !== 'object') return map[value];

	return Object.entries(value)
		.map(([k, v]) => (k === 'initial' ? map[v] : `${k}:${map[v]}`))
		.join(' ');
}

/**
 * Creates a new class with merged base and variant classes.
 * @param classes {@link Class} The new class values.
 * @param extend {@link Class} The class to extend.
 * @returns The new class with merged base and variant classes.
 */
export function createClasses<T1 extends Partial<Class>, T2 extends Partial<Class>>(
	classes: T1,
	extend?: T2 | undefined
): Class & { variants: T1['variants'] & T2['variants'] } {
	const newBase = classMerge(classes.base, extend?.base);
	const newVariants: ClassVariants = {};

	if (classes.variants) {
		for (const [k, v] of Object.entries(classes.variants)) {
			const newVariant: ClassVariant = {};
			for (const [k2, v2] of Object.entries(v)) {
				newVariant[k2] = classMerge(v2, extend?.variants?.[k]?.[k2]);
			}
			newVariants[k] = newVariant;
		}
	}
	if (extend?.variants) {
		for (const [k, v] of Object.entries(extend.variants)) {
			const newVariant: ClassVariant = {};
			for (const [k2, v2] of Object.entries(v)) {
				newVariant[k2] = classMerge(v2, extend?.variants?.[k]?.[k2]);
			}
			newVariants[k] = newVariant;
		}
	}

	return {
		base: newBase,
		variants: newVariants
	};
}
