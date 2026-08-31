import * as React from 'react';
/** Multi-line message field matching Input's underline treatment. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
