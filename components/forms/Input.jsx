import React from 'react';

/** Underline-only text field. No boxes, no fills — the form reads like the rest of the page. */
export function Input({label,id,type='text',hint,invalid=false,style,...rest}){
  const inputId=id||'in-'+(label||'field').toLowerCase().replace(/\W+/g,'-');
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-8)',...style}}>
      {label&&<label htmlFor={inputId} style={{font:'var(--type-label)',textTransform:'uppercase',
        letterSpacing:'var(--tracking-label)',color:'var(--text-muted)'}}>{label}</label>}
      <input id={inputId} type={type} aria-invalid={invalid||undefined}
        style={{appearance:'none',background:'transparent',border:0,
          borderBottom:'1px solid '+(invalid?'var(--oxblood-700)':'var(--line-hairline)'),
          borderRadius:0,padding:'var(--space-12) 0',minHeight:'var(--tap-min)',
          color:'var(--text-display)',font:'var(--type-body)',
          transition:'var(--transition-control)'}} {...rest} />
      {hint&&<span style={{fontSize:'var(--size-body-sm)',color:'var(--text-muted)'}}>{hint}</span>}
    </div>
  );
}
