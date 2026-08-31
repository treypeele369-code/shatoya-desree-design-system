import React from 'react';
import { Button } from '../core/Button.jsx';

/** Fixed top bar. Transparent over the hero; on scroll it condenses to ink with a hairline and reveals the CTA. */
export function SiteHeader({brand='Shatoya Desree',logoSrc,links=[],bookingUrl='#book',scrolled=false,onMenu,style,...rest}){
  return (
    <header style={{position:'fixed',top:0,left:0,right:0,zIndex:50,
      background:scrolled?'rgba(11,10,9,.86)':'transparent',
      backdropFilter:scrolled?'var(--blur-bar)':'none',WebkitBackdropFilter:scrolled?'var(--blur-bar)':'none',
      borderBottom:scrolled?'1px solid var(--line-accent-soft)':'1px solid transparent',
      transition:'background-color var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)',...style}} {...rest}>
      <div style={{maxWidth:'var(--content-max)',margin:'0 auto',padding:'0 var(--gutter-mobile)',
        height:scrolled?'68px':'88px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-24)',
        transition:'height var(--dur-base) var(--ease-standard)'}}>
        <a href="#top" style={{display:'flex',alignItems:'center',gap:'var(--space-12)',textDecoration:'none',flex:'0 0 auto'}}>
          {logoSrc&&<img src={logoSrc} alt={brand+' logo'} width="36" height="36"
            style={{width:'36px',height:'36px',borderRadius:'var(--radius-round)'}} />}
          <span style={{font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-wordmark)',
            color:'var(--bone-50)',whiteSpace:'nowrap',flex:'0 0 auto'}}>{brand}</span>
        </a>
        <nav style={{display:'flex',alignItems:'center',gap:'clamp(16px,2.4vw,32px)',flex:'0 1 auto'}}>
          <div className="sd-nav-links" style={{display:'flex',gap:'clamp(16px,2.2vw,32px)'}}>
            {links.map(l=>(
              <a key={l.href} href={l.href} style={{font:'var(--type-label)',textTransform:'uppercase',
                letterSpacing:'var(--tracking-label)',color:'var(--bone-300)',whiteSpace:'nowrap'}}>{l.label}</a>
            ))}
          </div>
          <div className="sd-nav-cta" style={{opacity:scrolled?1:0,transform:scrolled?'none':'translateY(-6px)',
            pointerEvents:scrolled?'auto':'none',
            transition:'opacity var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)'}}>
            <Button variant="primary" size="sm" href={bookingUrl}>Book Appointment</Button>
          </div>
          {onMenu&&<button className="sd-menu-trigger" onClick={onMenu} aria-label="Open menu"
            style={{display:'none',alignItems:'center',gap:'var(--space-8)',background:'none',border:0,
              cursor:'pointer',color:'var(--bone-50)',font:'var(--type-label)',textTransform:'uppercase',
              letterSpacing:'var(--tracking-label)',minHeight:'var(--tap-min)',padding:0}}>
            <span aria-hidden="true" style={{display:'grid',gap:'4px',width:'20px'}}>
              <span style={{height:'1px',background:'currentColor'}}></span>
              <span style={{height:'1px',background:'currentColor'}}></span>
            </span>Menu</button>}
        </nav>
      </div>
    </header>
  );
}
