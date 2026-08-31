import React from 'react';

/** A single review set large in the display serif. No stars, no cards, no shadow. */
export function Testimonial({quote,name,meta,style,...rest}){
  return (
    <figure style={{margin:0,maxWidth:'22ch',...style}} {...rest}>
      <blockquote style={{margin:0,font:'var(--type-quote)',color:'var(--text-display)',maxWidth:'20ch'}}>
        <span style={{color:'var(--brass-500)'}}>&ldquo;</span>{quote}<span style={{color:'var(--brass-500)'}}>&rdquo;</span>
      </blockquote>
      <figcaption style={{marginTop:'var(--space-32)',display:'flex',alignItems:'center',gap:'var(--space-16)',
        font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--text-muted)'}}>
        <span aria-hidden="true" style={{width:'32px',height:'1px',background:'var(--line-accent)'}}></span>
        <span style={{color:'var(--text-accent)'}}>{name}</span>{meta&&<span>{meta}</span>}
      </figcaption>
    </figure>
  );
}
