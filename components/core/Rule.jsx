import React from 'react';

/** Hairline divider. The brand's only separator — no borders on cards, no shadows. */
export function Rule({tone='hairline',width='100%',inset=0,style,...rest}){
  const bg=tone==='brass'?'var(--line-accent)':tone==='soft'?'var(--line-accent-soft)':'var(--line-hairline)';
  return <div role="separator" style={{height:'1px',width,background:bg,marginLeft:inset,border:0,...style}} {...rest}></div>;
}
