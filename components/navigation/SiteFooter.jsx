import React from 'react';
import { Button } from '../core/Button.jsx';

/** Closing band: last booking CTA, mark, contact links, copyright. */
export function SiteFooter({brand='Shatoya Desree LLC',logoSrc,bookingUrl='#book',instagram,phone,phoneHref,address,year=new Date().getFullYear(),style,...rest}){
  const linkStyle={font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--bone-300)'};
  return (
    <footer style={{background:'var(--ink-1000)',borderTop:'1px solid var(--line-accent-soft)',
      padding:'var(--section-pad-y-tight) var(--gutter-mobile) calc(var(--bar-height) + var(--space-48))',...style}} {...rest}>
      <div style={{maxWidth:'var(--content-max)',margin:'0 auto',display:'flex',flexWrap:'wrap',
        gap:'var(--space-48)',alignItems:'flex-start',justifyContent:'space-between'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-24)'}}>
          {logoSrc&&<img src={logoSrc} alt={brand+' logo'} width="72" height="72"
            style={{width:'72px',height:'72px',borderRadius:'var(--radius-round)'}} />}
          <span style={{font:'var(--type-label)',textTransform:'uppercase',
            letterSpacing:'var(--tracking-wordmark)',color:'var(--bone-100)'}}>{brand}</span>
          {address&&<span style={{color:'var(--text-muted)',fontSize:'var(--size-body-sm)',maxWidth:'26ch'}}>{address}</span>}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-16)'}}>
          {instagram&&<a href={instagram} style={linkStyle}>Instagram</a>}
          {phone&&<a href={phoneHref||'tel:'+phone.replace(/[^0-9+]/g,'')} style={linkStyle}>{phone}</a>}
        </div>
        <Button variant="outline" size="lg" href={bookingUrl}>Book Appointment</Button>
      </div>
      <div style={{maxWidth:'var(--content-max)',margin:'var(--space-64) auto 0',
        paddingTop:'var(--space-24)',borderTop:'1px solid var(--line-hairline)',
        font:'var(--type-label)',fontSize:'var(--size-micro)',textTransform:'uppercase',
        letterSpacing:'var(--tracking-label)',color:'var(--bone-500)'}}>&copy; {year} {brand}</div>
    </footer>
  );
}
