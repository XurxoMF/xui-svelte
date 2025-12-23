import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export * from './classes';

/**
 * Merges classes using twMerge and clsx to avoid duplication and allowing for dynamic classes.
 * @param inputs Classes to merge.
 * @returns The merged classes.
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
