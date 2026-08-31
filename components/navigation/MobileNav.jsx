import React from 'react';
import { Button } from '../core/Button.jsx';

/** Full-height slide-in menu for phones. Opened from the header's letterspaced "Menu" text. */
export function MobileNav({open,onClose,links=[],bookingUrl='#book',phone,phoneHref,instagram,style,...rest}){
  React.useEffect(()=>{
    const esc=e=>{if(e.key==='Escape')onClose&&onClose()};
    window.addEventListener('keydown',esc); return ()=>window.removeEventListener('keydown',esc);
  },[onClose]);
  return (
    <div aria-hidden={!open} style={{position:'fixed',inset:0,zIndex:70,pointerEvents:open?'auto':'none',...style}} {...rest}>
      <div onClick={onClose} style={{position:'absolute',inset:0,background:'var(--overlay-scrim)',
        opacity:open?1:0,transition:'opacity var(--dur-base) var(--ease-standard)'}}></div>
      <nav style={{position:'absolute',top:0,right:0,bottom:0,width:'min(88vw,380px)',
        background:'var(--ink-1000)',borderLeft:'1px solid var(--line-accent-soft)',
        padding:'var(--space-32) var(--space-32) var(--space-48)',display:'flex',flexDirection:'column',
        transform:open?'none':'translateX(100%)',
        transition:'transform var(--dur-base) var(--ease-out-soft)'}}>
        <button onClick={onClose} style={{alignSelf:'flex-end',background:'none',border:0,cursor:'pointer',
          color:'var(--bone-300)',font:'var(--type-label)',textTransform:'uppercase',
          letterSpacing:'var(--tracking-label)',minHeight:'var(--tap-min)',padding:0}}>Close</button>
        <div style={{marginTop:'var(--space-32)',display:'flex',flexDirection:'column'}}>
          {links.map(l=>(
            <a key={l.href} href={l.href} onClick={onClose}
              style={{padding:'var(--space-16) 0',borderBottom:'1px solid var(--line-hairline)',
                fontFamily:'var(--font-display)',fontWeight:'var(--weight-display-light)',fontSize:'1.75rem',
                color:'var(--bone-50)',minHeight:'var(--tap-min)',display:'flex',alignItems:'center'}}>{l.label}</a>
          ))}
        </div>
        <div style={{marginTop:'auto',paddingTop:'var(--space-32)',display:'grid',gap:'var(--space-16)'}}>
          {phone&&<a href={phoneHref||'tel:'+phone.replace(/[^0-9+]/g,'')}
            style={{font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',
              color:'var(--bone-300)'}}>{phone}</a>}
          {instagram&&<a href={instagram} target="_blank" rel="noreferrer noopener"
            style={{font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',
              color:'var(--bone-300)'}}>Instagram</a>}
          <Button variant="primary" href={bookingUrl} fullWidth>Book Appointment</Button>
        </div>
      </nav>
    </div>
  );
}
