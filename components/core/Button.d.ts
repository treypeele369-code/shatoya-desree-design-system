import * as React from 'react';

/**
 * The site's action control. Uppercase Jost, heavy letterspacing, near-square corners.
 * Brass fill is reserved for the single primary action in a viewport; everything else is outline or ghost.
 * @startingPoint section="Core" subtitle="Booking CTA in four treatments" viewport="700x180"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** brass fill (primary CTA) | hairline brass border | inline text link with rule | solid ink for bone backgrounds */
  variant?: 'primary' | 'outline' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a>. Booking CTAs point at the Square booking URL. */
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
