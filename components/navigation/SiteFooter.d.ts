import * as React from 'react';
/** Closing band with mark, contact links, final booking CTA and copyright. */
export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  brand?: string;
  logoSrc?: string;
  bookingUrl?: string;
  instagram?: string;
  phone?: string;
  phoneHref?: string;
  address?: string;
  year?: number;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
