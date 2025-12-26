/**
 * Removes keys from an object type.
 * Works like Omit<> but better.
 */
export type WithoutKeys<T, K extends keyof T> = T extends object ? Omit<T, Extract<keyof T, K>> : T;
