import * as React from 'react';
/** Collapsible policy / FAQ row. Stack several; the group needs no wrapper. */
export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  question: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}
export declare function AccordionItem(props: AccordionItemProps): JSX.Element;
