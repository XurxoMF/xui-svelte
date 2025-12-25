/**
 * Removes keys from an object type.
 * Works like Omit<> but better.
 */
export type WithoutKeys<T, K extends keyof T> = T extends object ? Omit<T, Extract<keyof T, K>> : T;

/**
 * If the type passes is true or false, convert it to a boolean, else return the type without modifications.
 */
export type AsBooleanOrKey<T> = T extends 'true' | 'false' | true | false ? boolean : T;

/**
 * A class variant.
 */
export type ClassVariant = Record<string | number, string>;

/**
 * Props for a class variant.
 */
export type ClassVariantProps<T extends ClassVariant> = keyof AsBooleanOrKey<T>;

/**
 * A class variants.
 */
export type ClassVariants = Record<string | number, ClassVariant>;

/**
 * A window responsive breakpoint.
 */
export type WindowReactiveBreakpoints = 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * A container responsive breakpoint.
 */
export type ContainerReactiveBreakpoints = 'base' | '@xs' | '@sm' | '@md' | '@lg' | '@xl' | '@2xl' | '@3xl' | '@4xl' | '@5xl' | '@6xl' | '@7xl';

/**
 * A reactive class variant.
 *
 * Can be a single key or an object with keys for each breakpoint.
 */
export type ReactiveClassVariant<T extends ClassVariant> = keyof T | Partial<Record<WindowReactiveBreakpoints | ContainerReactiveBreakpoints, keyof T>>;

/**
 * Props for a reactive class variant.
 */
export type ReactiveClassVariantProps<T extends ClassVariant> =
	| keyof AsBooleanOrKey<T>
	| Partial<Record<WindowReactiveBreakpoints | ContainerReactiveBreakpoints, keyof AsBooleanOrKey<T>>>;

/**
 * A class with variants, base styles...
 */
export type Class = { base: string; variants: ClassVariants };
