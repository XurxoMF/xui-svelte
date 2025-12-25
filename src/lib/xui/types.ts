import type { cv } from '$lib/xui/utils/classes';

/**
 * Removes keys from an object type.
 * Works like Omit<> but better.
 */
export type WithoutKeys<T, K extends keyof T> = T extends object ? Omit<T, Extract<keyof T, K>> : T;

export type WindowBreakpoint = 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ContainerBreakpoint = 'base' | '@xs' | '@sm' | '@md' | '@lg' | '@xl' | '@2xl' | '@3xl' | '@4xl' | '@5xl' | '@6xl' | '@7xl';
export type Breakpoint = WindowBreakpoint | ContainerBreakpoint;

export type VariantProps<T extends ReturnType<typeof cv>> = {
	[K in keyof T['variants']]?: keyof T['variants'][K] | Partial<Record<Breakpoint, keyof T['variants'][K]>>;
};
