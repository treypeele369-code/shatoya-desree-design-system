import * as React from 'react';
/** Labelled contact row — address, phone, Instagram, email. The value is always a working link. */
export interface ContactLineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small-caps label, e.g. "Call or text" */
  label: string;
  value: string;
  /** tel:, mailto:, a maps URL or the Instagram profile. */
  href: string;
  external?: boolean;
}
export declare function ContactLine(props: ContactLineProps): JSX.Element;
