import * as React from 'react';
/** Letterspaced small-caps eyebrow with a trailing hairline. Opens each page section. */
export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Two-digit section number, e.g. "03" */
  index?: string;
  tone?: 'accent' | 'muted' | 'display';
}
export declare function SectionLabel(props: SectionLabelProps): JSX.Element;
