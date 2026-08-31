import * as React from 'react';
export interface HeaderLink { label: string; href: string }
/** Fixed site header — transparent over the hero, condensed ink bar after scroll with the booking CTA revealed. */
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  brand?: string;
  /** Path to the circular logo badge (assets/logo-badge.jpg). */
  logoSrc?: string;
  links?: HeaderLink[];
  bookingUrl?: string;
  /** Drive from a scroll listener at ~80px. */
  scrolled?: boolean;
  /** Supply to render the phone "Menu" trigger (shown below 900px via the `.sd-menu-trigger` class). */
  onMenu?: () => void;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
