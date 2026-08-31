import * as React from 'react';
/** A single work photo in the gallery grid. Renders a labelled placeholder when `src` is omitted. */
export interface GalleryTileProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  /** Required. Describes the actual service shown, e.g. "Retwist on shoulder-length locs". */
  alt: string;
  /** CSS aspect-ratio string. Mix "3 / 4", "1 / 1" and "4 / 5" for the masonry rhythm. */
  ratio?: string;
  /** Optional small-caps caption over a protection gradient. */
  caption?: string;
}
export declare function GalleryTile(props: GalleryTileProps): JSX.Element;
