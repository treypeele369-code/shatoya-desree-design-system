import React from 'react';

/** A labelled contact row: small-caps label, then the value as a large brass-underlined link. */
export function ContactLine({label,value,href,external,style,...rest}){
  const [hover,setHover]=React.useState(false);
  return (
    <div style={{display:'grid',gap:'var(--space-8)',...style}} {...rest}>
      <span style={{font:'var(--type-label)',fontSize:'var(--size-micro)',textTransform:'uppercase',
        letterSpacing:'var(--tracking-label)',color:'var(--text-muted)'}}>{label}</span>
      <a href={href} target={external?'_blank':undefined} rel={external?'noreferrer noopener':undefined}
        onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
        style={{justifySelf:'start',fontFamily:'var(--font-display)',fontSize:'clamp(1.375rem,2.4vw,1.75rem)',
          lineHeight:1.3,color:hover?'var(--brass-400)':'var(--text-display)',
          borderBottom:'1px solid '+(hover?'var(--brass-400)':'var(--line-accent)'),paddingBottom:'4px',
          minHeight:'var(--tap-min)',display:'inline-flex',alignItems:'center',
          transition:'var(--transition-control)'}}>{value}</a>
    </div>
  );
}
