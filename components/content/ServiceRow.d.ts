import * as React from 'react';
/**
 * A single priced service in the menu. Rows are links — every row goes to booking.
 * @startingPoint section="Content" subtitle="Priced service menu row" viewport="700x150"
 */
export interface ServiceRowProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  /** Small-caps line under the name, e.g. "45 min" */
  duration?: string;
  /** Formatted price string, e.g. "$110" or "$10 / loc" */
  price: string;
  /** Extra small-caps qualifier, e.g. "Consultation required" */
  note?: string;
  /** Booking URL — required in practice; the whole row is the tap target. */
  href?: string;
}
export declare function ServiceRow(props: ServiceRowProps): JSX.Element;
