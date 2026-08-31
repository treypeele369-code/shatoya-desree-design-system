import React from 'react';

const sizes={
  sm:{padding:'0 18px',height:'40px',fontSize:'var(--size-micro)'},
  md:{padding:'0 28px',height:'var(--tap-min)',fontSize:'var(--size-label)'},
  lg:{padding:'0 40px',height:'58px',fontSize:'var(--size-label)'}
};

/** Primary call to action. On this site the primary action is always "Book Appointment". */
export function Button({variant='primary',size='md',href,as,fullWidth=false,disabled=false,children,style,...rest}){
  const Tag=as||(href?'a':'button');
  const base={
    display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--space-12)',
    fontFamily:'var(--font-ui)',fontWeight:'var(--weight-ui-medium)',
    textTransform:'uppercase',letterSpacing:'var(--tracking-button)',
    borderRadius:'var(--radius-sm)',border:'1px solid transparent',cursor:disabled?'not-allowed':'pointer',
    textDecoration:'none',transition:'var(--transition-control)',
    width:fullWidth?'100%':'auto',opacity:disabled?.38:1,whiteSpace:'nowrap',
    ...sizes[size]
  };
  const variants={
    primary:{background:'var(--brass-500)',color:'var(--text-on-brass)',borderColor:'var(--brass-500)'},
    outline:{background:'transparent',color:'var(--brass-400)',borderColor:'var(--brass-600)'},
    ghost:{background:'transparent',color:'var(--text-body)',borderColor:'transparent',padding:'0',height:'auto',minHeight:'var(--tap-min)'},
    inverse:{background:'var(--ink-900)',color:'var(--bone-50)',borderColor:'var(--ink-900)'}
  };
  const [hover,setHover]=React.useState(false);
  const hovers={
    primary:{background:'var(--brass-400)',borderColor:'var(--brass-400)'},
    outline:{background:'rgba(200,154,78,.10)',borderColor:'var(--brass-500)',color:'var(--brass-300)'},
    ghost:{color:'var(--brass-400)'},
    inverse:{background:'var(--ink-700)',borderColor:'var(--ink-700)'}
  };
  return (
    <Tag href={href} disabled={Tag==='button'?disabled:undefined}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{...base,...variants[variant],...(hover&&!disabled?hovers[variant]:null),...style}} {...rest}>
      {children}
      {variant==='ghost'&&<span aria-hidden="true" style={{display:'block',height:'1px',width:'20px',background:'currentColor',opacity:.7}}></span>}
    </Tag>
  );
}
