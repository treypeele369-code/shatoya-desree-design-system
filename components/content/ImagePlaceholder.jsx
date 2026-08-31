import React from 'react';

/** Explicitly-labelled stand-in for a photo that hasn't been supplied yet. */
export function ImagePlaceholder({label,ratio='4 / 5',note,style,...rest}){
  return (
    <div role="img" aria-label={label} style={{aspectRatio:ratio,width:'100%',background:'var(--ink-800)',
      border:'1px solid var(--line-hairline)',display:'flex',flexDirection:'column',gap:'var(--space-8)',
      alignItems:'center',justifyContent:'center',padding:'var(--space-24)',textAlign:'center',...style}} {...rest}>
      <span style={{font:'var(--type-label)',fontSize:'var(--size-micro)',textTransform:'uppercase',
        letterSpacing:'var(--tracking-label)',color:'var(--brass-600)'}}>Replace with photo</span>
      <span style={{fontFamily:'var(--font-display)',fontSize:'1.25rem',color:'var(--bone-300)'}}>{label}</span>
      {note&&<span style={{font:'var(--type-body)',fontSize:'var(--size-body-sm)',color:'var(--bone-500)'}}>{note}</span>}
    </div>
  );
}
