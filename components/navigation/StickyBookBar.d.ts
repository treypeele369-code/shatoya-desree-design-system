import * as React from 'react';
/**
 * Bottom-fixed mobile booking bar. Carries the class `sd-book-bar` so the page can hide it on desktop.
 * @startingPoint section="Navigation" subtitle="Persistent mobile booking bar" viewport="700x150"
 */
export interface StickyBookBarProps extends React.HTMLAttributes<HTMLDivElement> {
  bookingUrl?: string;
  /** Display number, e.g. "(470) 624-5865" — becomes a tap-to-call link. */
  phone?: string;
  phoneHref?: string;
  visible?: boolean;
}
export declare function StickyBookBar(props: StickyBookBarProps): JSX.Element;
