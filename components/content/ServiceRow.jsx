import React from 'react';

/** One line of the service menu: name left, duration in small caps beneath, price right. Whole row books. */
export function ServiceRow({name,duration,price,note,href,style,...rest}){
  const [hover,setHover]=React.useState(false);
  return (
    <a href={href} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:'grid',gridTemplateColumns:'1fr auto',alignItems:'baseline',columnGap:'var(--space-24)',
        padding:'var(--space-24) 0',borderBottom:'1px solid var(--line-accent-soft)',textDecoration:'none',
        minHeight:'var(--tap-min)',transition:'var(--transition-control)',...style}} {...rest}>
      <span>
        <span style={{display:'block',fontFamily:'var(--font-display)',fontWeight:'var(--weight-display)',
          fontSize:'clamp(1.375rem,2.6vw,1.875rem)',lineHeight:1.2,
          color:hover?'var(--brass-400)':'var(--text-display)',transition:'var(--transition-control)'}}>{name}</span>
        {(duration||note)&&<span style={{display:'block',marginTop:'var(--space-8)',font:'var(--type-label)',
          fontSize:'var(--size-micro)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',
          color:'var(--text-muted)'}}>{[duration,note].filter(Boolean).join(' · ')}</span>}
      </span>
      <span style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.25rem,2.2vw,1.625rem)',
        color:hover?'var(--brass-400)':'var(--text-accent)',fontVariantNumeric:'tabular-nums',
        transition:'var(--transition-control)'}}>{price}</span>
    </a>
  );
}
