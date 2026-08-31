import React from 'react';

/** Tiny letterspaced marker: category names, "House calls", duration chips. */
export function Badge({children,tone='outline',style,...rest}){
  const tones={
    outline:{color:'var(--brass-400)',border:'1px solid var(--line-accent-soft)',background:'transparent'},
    solid:{color:'var(--text-on-brass)',border:'1px solid var(--brass-500)',background:'var(--brass-500)'},
    quiet:{color:'var(--text-muted)',border:'1px solid var(--line-hairline)',background:'transparent'}
  };
  return (
    <span style={{display:'inline-block',padding:'6px 12px',borderRadius:'var(--radius-sm)',
      font:'var(--type-label)',fontSize:'var(--size-micro)',textTransform:'uppercase',
      letterSpacing:'var(--tracking-label)',...tones[tone],...style}} {...rest}>{children}</span>
  );
}
