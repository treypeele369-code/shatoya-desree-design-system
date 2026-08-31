import * as React from 'react';
/** 1px hairline divider in neutral or brass. */
export interface RuleProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'hairline' | 'brass' | 'soft';
  width?: string;
  inset?: number | string;
}
export declare function Rule(props: RuleProps): JSX.Element;
