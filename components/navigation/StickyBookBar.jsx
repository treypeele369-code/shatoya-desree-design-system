import React from 'react';
import { Button } from '../core/Button.jsx';

/** Bottom-fixed booking bar for phones. Always one tap from booking. */
export function StickyBookBar({bookingUrl='#book',phone,phoneHref,visible=true,style,...rest}){
  return (
    <div className="sd-book-bar" style={{position:'fixed',left:0,right:0,bottom:0,zIndex:60,
      background:'rgba(11,10,9,.92)',backdropFilter:'var(--blur-bar)',WebkitBackdropFilter:'var(--blur-bar)',
      boxShadow:'var(--shadow-bar)',padding:'var(--space-12) var(--gutter-mobile)',
      paddingBottom:'calc(var(--space-12) + env(safe-area-inset-bottom))',
      display:'flex',alignItems:'center',gap:'var(--space-12)',
      transform:visible?'none':'translateY(110%)',
      transition:'transform var(--dur-base) var(--ease-out-soft)',...style}} {...rest}>
      {phone&&<a href={phoneHref||'tel:'+phone.replace(/[^0-9+]/g,'')}
        style={{flex:'0 0 auto',height:'var(--tap-min)',display:'inline-flex',alignItems:'center',
          padding:'0 var(--space-20)',border:'1px solid var(--line-accent-soft)',borderRadius:'var(--radius-sm)',
          font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-button)',
          color:'var(--brass-400)'}}>Call</a>}
      <Button variant="primary" href={bookingUrl} fullWidth>Book Appointment</Button>
    </div>
  );
}
