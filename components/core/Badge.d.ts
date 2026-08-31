import * as React from 'react';
/** Letterspaced micro-label for categories, durations and service notes. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  tone?: 'outline' | 'solid' | 'quiet';
}
export declare function Badge(props: BadgeProps): JSX.Element;
