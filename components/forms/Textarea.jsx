import React from 'react';

/** Multi-line message field. Same underline treatment as Input. */
export function Textarea({label,id,rows=4,hint,style,...rest}){
  const fieldId=id||'ta-'+(label||'message').toLowerCase().replace(/\W+/g,'-');
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-8)',...style}}>
      {label&&<label htmlFor={fieldId} style={{font:'var(--type-label)',textTransform:'uppercase',
        letterSpacing:'var(--tracking-label)',color:'var(--text-muted)'}}>{label}</label>}
      <textarea id={fieldId} rows={rows}
        style={{appearance:'none',background:'transparent',border:0,borderBottom:'1px solid var(--line-hairline)',
          borderRadius:0,padding:'var(--space-12) 0',resize:'vertical',
          color:'var(--text-display)',font:'var(--type-body)'}} {...rest} />
      {hint&&<span style={{fontSize:'var(--size-body-sm)',color:'var(--text-muted)'}}>{hint}</span>}
    </div>
  );
}
