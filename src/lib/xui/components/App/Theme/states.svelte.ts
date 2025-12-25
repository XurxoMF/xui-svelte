import type { Scales, Themes } from './types';

/**
 * The current theme.
 */
let theme: Themes = $state('light');

/**
 * Change the theme.
 * @param newTheme The new theme to apply.
 */
export function setTheme(newTheme: Themes): void {
	localStorage.setItem('THEME', newTheme);
	theme = newTheme;
	document.documentElement.dataset.theme = newTheme;
}

/**
 * Get the current theme.
 * @returns The current theme.
 */
export function getTheme(): Themes {
	return theme;
}

/**
 * The current scale.
 */
let scale: Scales = $state('base');

/**
 * Change the scale.
 * @param newScale The new scale to apply.
 */
export function setScale(newScale: Scales): void {
	localStorage.setItem('SCALE', newScale);
	scale = newScale;
	document.documentElement.dataset.scale = newScale;
}

/**
 * Get the current scale.
 * @returns The current scale.
 */
export function getScale(): Scales {
	return scale;
}
