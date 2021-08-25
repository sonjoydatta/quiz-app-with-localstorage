// Base type & interfaces
export type Variant = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export type Colors =
	| Variant
	| 'blue'
	| 'indigo'
	| 'purple'
	| 'pink'
	| 'red'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'teal'
	| 'cyan'
	| 'white'
	| 'gray'
	| 'gray-dark'
	| 'border';

// Element types & interfaces
export type BadgeVariant = Variant;

export type ButtonVariant = Variant | 'link';

export type ElementSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ElementBorders {
	rounded?: boolean;
	pill?: boolean;
	circle?: boolean;
}
