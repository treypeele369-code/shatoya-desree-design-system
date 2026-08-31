import * as React from 'react';
/** Labelled photo stand-in at a fixed aspect ratio, so real imagery can be dropped in later. */
export interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** What photo belongs here, e.g. "Portrait of Toya at the chair" */
  label: string;
  ratio?: string;
  /** Optional shooting note, e.g. "Vertical, warm light, 4:5" */
  note?: string;
}
export declare function ImagePlaceholder(props: ImagePlaceholderProps): JSX.Element;
