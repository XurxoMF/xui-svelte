import type { SCALES, THEMES } from './constants';

/**
 * The type of the available themes.
 */
export type Themes = (typeof THEMES)[number];

/**
 * The type of the available scales.
 */
export type Scales = (typeof SCALES)[number];
