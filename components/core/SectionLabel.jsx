import React from 'react';

/** Small-caps eyebrow that opens every section. Optionally numbered, always letterspaced. */
export function SectionLabel({children,index,tone='accent',style,...rest}){
  const color=tone==='accent'?'var(--text-accent)':tone==='muted'?'var(--text-muted)':'var(--text-display)';
  return (
    <div style={{display:'flex',alignItems:'center',gap:'var(--space-16)',color,
      font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',...style}} {...rest}>
      {index&&<span style={{opacity:.6,fontVariantNumeric:'tabular-nums'}}>{index}</span>}
      <span>{children}</span>
      <span aria-hidden="true" style={{flex:'0 0 40px',height:'1px',background:'currentColor',opacity:.45}}></span>
    </div>
  );
}
