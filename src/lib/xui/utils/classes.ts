import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { Class, ClassVariant, ClassVariants, ReactiveClassVariant } from '$lib/xui/types';

/**
 * Merges classes using twMerge and clsx to avoid duplication and allowing for dynamic classes.
 *
 * @param inputs Classes to merge.
 * @returns The merged classes.
 */
export function cm(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

/**
 * Converts a class value to a string.
 *
 * @example
 * ```ts
 * const VARIANT = {
 * 	ghost: 'bg-ghost',
 * 	solid: 'bg-solid',
 * 	outline: 'bg-outline'
 * } as const;
 *
 * fcv(VARIANT, "solid"); => "bg-solid"
 * ```
 * @param cv {@link ClassVariant} The class variant.
 * @param value The value to convert.
 * @returns The string representation of the value.
 */
export function fcv<T extends ClassVariant>(cv: T, value: keyof T | undefined): string | undefined {
	if (!value) return undefined;

	return `${cv[value]}`;
}

/**
 * Converts a responsive class value to a string.
 *
 * @example
 * ```ts
 * const VARIANT = {
 * 	ghost: 'bg-ghost',
 * 	solid: 'bg-solid',
 * 	outline: 'bg-outline'
 * } as const;
 *
 * frcv(VARIANT, { xs: "ghost", @md: "outline" }); => "xs:bg-ghost @md:bg-outline"
 * ```
 * @param rcv {@link ReactiveClassVariant} The reactive class variant.
 * @param value The value to convert.
 * @returns The string representation of the value.
 */
export function frcv<T extends ClassVariant>(rcv: T, value: ReactiveClassVariant<T> | undefined): string | undefined {
	if (!value) return undefined;

	return Object.entries(value)
		.map(([k, v]) => v != undefined && (k === 'base' ? rcv[v] : `${k}:${rcv[v]}`))
		.join(' ');
}

/**
 * Creates a new Class and merges values if a second Class is provided.
 *
 * @example
 * ```ts
 * cv(
 * 	{ base: 'text-zinc-50', variants: { variant: { ghost: 'bg-zinc-900' }}},
 * 	{ base: 'opacity-50', variants: { variant: { ghost: 'border-1', outline: 'border-2' }, p: { none: 'p-0' }}}
 * );
 *
 * { base: 'text-zinc-50 opacity-50', variants: { variant: { ghost: 'bg-zinc-900 border-1', outline: 'border-2' }, p: { none: 'p-0' }}}
 * ```
 *
 * @param classes {@link Class} The new Class values.
 * @param extend {@link Class} The Class to extend.
 * @returns The new Class with merged values.
 */
export function cv<T1 extends Partial<Class>, T2 extends Partial<Class>>(
	classes: T1,
	extend?: T2 | undefined
): Class & { variants: T1['variants'] & T2['variants'] } {
	const newBase = cm(classes?.base, extend?.base);
	const newVariants: ClassVariants = {};

	if (classes?.variants) {
		for (const [k, v] of Object.entries(classes.variants)) {
			const newVariant: ClassVariant = {};
			for (const [k2, v2] of Object.entries(v)) {
				newVariant[k2] = cm(v2, extend?.variants?.[k]?.[k2]);
			}
			newVariants[k] = newVariant;
		}
	}
	if (extend?.variants) {
		for (const [k, v] of Object.entries(extend.variants)) {
			const newVariant: ClassVariant = {};
			for (const [k2, v2] of Object.entries(v)) {
				newVariant[k2] = cm(v2, extend?.variants?.[k]?.[k2]);
			}
			newVariants[k] = newVariant;
		}
	}

	return {
		base: newBase,
		variants: newVariants
	};
}
