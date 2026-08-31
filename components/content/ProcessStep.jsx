import React from 'react';

/** A numbered step in the "first visit" sequence. Rule above, brass numeral, short body. */
export function ProcessStep({index,title,children,style,...rest}){
  return (
    <div style={{borderTop:'1px solid var(--line-accent-soft)',paddingTop:'var(--space-24)',...style}} {...rest}>
      <span style={{display:'block',fontFamily:'var(--font-display)',fontSize:'2.25rem',lineHeight:1,
        color:'var(--brass-500)',fontVariantNumeric:'tabular-nums'}}>{index}</span>
      <h3 style={{marginTop:'var(--space-16)',fontFamily:'var(--font-display)',fontWeight:'var(--weight-display)',
        fontSize:'1.5rem',lineHeight:1.2,color:'var(--text-display)'}}>{title}</h3>
      <p style={{marginTop:'var(--space-12)',fontSize:'var(--size-body-sm)',color:'var(--text-body)',maxWidth:'34ch'}}>{children}</p>
    </div>
  );
}
