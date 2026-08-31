import * as React from 'react';
/** Large serif pull-quote review with a first name. Shown one at a time. */
export interface TestimonialProps extends React.HTMLAttributes<HTMLElement> {
  quote: string;
  /** Client first name only. */
  name: string;
  /** Optional qualifier, e.g. "Loc client, 6 years" */
  meta?: string;
}
export declare function Testimonial(props: TestimonialProps): JSX.Element;
