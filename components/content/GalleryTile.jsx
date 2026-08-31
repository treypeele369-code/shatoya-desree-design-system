import React from 'react';

/** One image in the work grid. Lazy-loaded, alt text required, opens the lightbox on click. */
export function GalleryTile({src,alt,ratio='3 / 4',caption,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  return (
    <button type="button" onClick={onClick} aria-label={alt}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:'block',padding:0,border:0,background:'var(--ink-800)',cursor:'pointer',
        width:'100%',aspectRatio:ratio,position:'relative',overflow:'hidden',borderRadius:'var(--radius-xs)',...style}} {...rest}>
      {src
        ? <img src={src} alt={alt} loading="lazy" decoding="async"
            style={{width:'100%',height:'100%',objectFit:'cover',
              filter:hover?'none':'saturate(.92)',transform:hover?'scale(1.03)':'scale(1)',
              transition:'transform var(--dur-slow) var(--ease-out-soft),filter var(--dur-base) var(--ease-standard)'}} />
        : <span style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:'8px',
            alignItems:'center',justifyContent:'center',border:'1px solid var(--line-hairline)',
            font:'var(--type-label)',fontSize:'var(--size-micro)',textTransform:'uppercase',
            letterSpacing:'var(--tracking-label)',color:'var(--bone-500)',textAlign:'center',padding:'12px'}}>
            <span>Photo</span><span style={{opacity:.7}}>{alt}</span></span>}
      {caption&&<span style={{position:'absolute',left:0,right:0,bottom:0,padding:'32px 16px 12px',
        background:'linear-gradient(180deg,transparent,rgba(5,5,5,.8))',font:'var(--type-label)',
        fontSize:'var(--size-micro)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',
        color:'var(--bone-100)',textAlign:'left'}}>{caption}</span>}
    </button>
  );
}
