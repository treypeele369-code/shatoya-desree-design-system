import React from 'react';

/** Opening hours as a hairline-ruled definition list. Today's row is brass. */
export function HoursTable({hours,today,style,...rest}){
  return (
    <dl style={{margin:0,display:'grid',gridTemplateColumns:'1fr auto',...style}} {...rest}>
      {hours.map((h,i)=>{
        const active=today===h.day;
        return (
          <React.Fragment key={h.day}>
            <dt style={{padding:'var(--space-16) 0',borderTop:i?'1px solid var(--line-hairline)':'0',
              font:'var(--type-label)',fontSize:'var(--size-label)',textTransform:'uppercase',
              letterSpacing:'var(--tracking-label)',color:active?'var(--text-accent)':'var(--text-muted)'}}>{h.day}</dt>
            <dd style={{margin:0,padding:'var(--space-16) 0',borderTop:i?'1px solid var(--line-hairline)':'0',
              textAlign:'right',fontFamily:'var(--font-ui)',fontVariantNumeric:'tabular-nums',
              color:active?'var(--text-accent)':h.closed?'var(--text-muted)':'var(--text-body)'}}>{h.value}</dd>
          </React.Fragment>
        );
      })}
    </dl>
  );
}
