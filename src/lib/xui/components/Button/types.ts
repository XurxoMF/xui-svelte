import { Button } from 'bits-ui';

import type { VariantProps } from '$lib/xui/types';

import type { BUTTON_CLASSES } from './classes';

export type ButtonProps = Button.RootProps & VariantProps<typeof BUTTON_CLASSES>;
