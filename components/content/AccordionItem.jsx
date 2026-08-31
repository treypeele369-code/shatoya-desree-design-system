import React from 'react';

/** One policy or FAQ line. Hairline top rule, brass plus/minus, slow reveal. */
export function AccordionItem({question,children,defaultOpen=false,style,...rest}){
  const [open,setOpen]=React.useState(defaultOpen);
  return (
    <div style={{borderTop:'1px solid var(--line-hairline)',...style}} {...rest}>
      <button type="button" onClick={()=>setOpen(o=>!o)} aria-expanded={open}
        style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between',gap:'var(--space-24)',
          padding:'var(--space-24) 0',minHeight:'var(--tap-min)',background:'none',border:0,cursor:'pointer',
          textAlign:'left',fontFamily:'var(--font-display)',fontWeight:'var(--weight-display)',
          fontSize:'clamp(1.25rem,2.2vw,1.5rem)',color:'var(--text-display)'}}>
        <span>{question}</span>
        <span aria-hidden="true" style={{flex:'0 0 auto',width:'14px',height:'14px',position:'relative',color:'var(--brass-500)'}}>
          <span style={{position:'absolute',top:'6px',left:0,width:'14px',height:'1px',background:'currentColor'}}></span>
          <span style={{position:'absolute',top:0,left:'6px',width:'1px',height:'14px',background:'currentColor',
            transform:open?'scaleY(0)':'scaleY(1)',transition:'transform var(--dur-base) var(--ease-standard)'}}></span>
        </span>
      </button>
      <div style={{display:'grid',gridTemplateRows:open?'1fr':'0fr',
        transition:'grid-template-rows var(--dur-base) var(--ease-standard)'}}>
        <div style={{overflow:'hidden'}}>
          <div style={{paddingBottom:'var(--space-32)',color:'var(--text-body)',
            font:'var(--type-body)',maxWidth:'var(--measure)'}}>{children}</div>
        </div>
      </div>
    </div>
  );
}
