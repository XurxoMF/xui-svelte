import { Checkbox, type WithoutChildrenOrChild } from 'bits-ui';
import type { VariantProps } from 'tailwind-variants';

import type { CHECKBOX_CLASSES } from './classes';

export type CheckboxProps = WithoutChildrenOrChild<Checkbox.RootProps> & VariantProps<typeof CHECKBOX_CLASSES>;
