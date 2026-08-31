import * as React from 'react';
export interface HoursEntry { day: string; value: string; closed?: boolean }
/** Opening-hours list. Pass `today` to highlight the current day in brass. */
export interface HoursTableProps extends React.HTMLAttributes<HTMLDListElement> {
  hours: HoursEntry[];
  today?: string;
}
export declare function HoursTable(props: HoursTableProps): JSX.Element;
