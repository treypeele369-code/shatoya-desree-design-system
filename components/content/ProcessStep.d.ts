import * as React from 'react';
/** Numbered step used in the "what happens on your first visit" sequence. */
export interface ProcessStepProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Two-digit numeral, e.g. "01" */
  index: string;
  title: string;
  children?: React.ReactNode;
}
export declare function ProcessStep(props: ProcessStepProps): JSX.Element;
