import * as React from 'react';
export interface MobileNavLink { label: string; href: string }
/** Slide-in phone menu. Pair with SiteHeader below 900px. */
export interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
  links?: MobileNavLink[];
  bookingUrl?: string;
  phone?: string;
  phoneHref?: string;
  instagram?: string;
}
export declare function MobileNav(props: MobileNavProps): JSX.Element;
