import { Colors } from './interfaces';

export const getThemeColor = (color: Colors): string => `var(--bs-${color})`;
