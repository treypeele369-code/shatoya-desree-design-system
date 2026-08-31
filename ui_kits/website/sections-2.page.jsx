const DS2 = (window.ShatoyaDesreeDesignSystem_8bbdd9||{});
const { Button, SectionLabel, Testimonial, GalleryTile, AccordionItem, HoursTable, ContactLine } = DS2;
const D2 = window.SD;
const wrap2 = window.SDwrap, section2 = window.SDsection;

/* -------------------------------------------------------------- GALLERY */
function Gallery({onOpen}){
  return (
    <section id="gallery" style={{...section2,background:'var(--ink-1000)'}}>
      <div style={wrap2}>
        <window.Reveal>
          <SectionLabel index="04">Gallery</SectionLabel>
          <h2 style={{marginTop:'var(--space-24)',font:'var(--type-section)',maxWidth:'16ch'}}>The work speaks first.</h2>
          <p style={{marginTop:'var(--space-24)',color:'var(--text-muted)',maxWidth:'44ch'}}>
            Retwists, starter locs, comb coils, platts and styling — photographed in the suite, unretouched.
          </p>
        </window.Reveal>
        <window.Reveal delay={100} style={{marginTop:'var(--space-64)'}}>
          <div style={{columnCount:'var(--gallery-cols, 2)',columnGap:'var(--space-12)'}}>
            {D2.gallery.map((g,i)=>(
              <div key={i} style={{breakInside:'avoid',marginBottom:'var(--space-12)'}}>
                <GalleryTile {...g} onClick={()=>onOpen(i)} />
              </div>
            ))}
          </div>
        </window.Reveal>
        <window.Reveal style={{marginTop:'var(--space-48)',display:'flex',gap:'var(--space-24)',flexWrap:'wrap',alignItems:'center'}}>
          <Button variant="primary" href={D2.booking} target="_blank" rel="noreferrer noopener">Book Appointment</Button>
          <Button variant="ghost" href={D2.instagram} target="_blank" rel="noreferrer noopener">More on Instagram</Button>
        </window.Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- TESTIMONIALS */
function Testimonials(){
  const [i,setI]=React.useState(0);
  React.useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t=setInterval(()=>setI(n=>(n+1)%D2.testimonials.length),9000);
    return ()=>clearInterval(t);
  },[]);
  const t=D2.testimonials[i];
  return (
    <section id="reviews" style={{...section2,background:'var(--oxblood-800)',position:'relative',overflow:'hidden'}}>
      <div style={window.SDgrain}></div>
      <div style={{...wrap2,position:'relative',display:'grid',gap:'var(--space-48)'}}>
        <SectionLabel index="05">In Their Words</SectionLabel>
        <div style={{minHeight:'clamp(190px,24vw,260px)'}}>
          <Testimonial key={i} quote={t.quote} name={t.name} meta={t.meta}
            style={{maxWidth:'26ch',animation:'sdFade var(--dur-slow) var(--ease-out-soft)'}} />
        </div>
        <div style={{display:'flex',gap:'var(--space-12)'}}>
          {D2.testimonials.map((_,n)=>(
            <button key={n} onClick={()=>setI(n)} aria-label={'Review '+(n+1)} aria-current={n===i}
              style={{width:'56px',height:'var(--tap-min)',padding:0,border:0,background:'none',cursor:'pointer',
                display:'flex',alignItems:'center'}}>
              <span style={{display:'block',width:'100%',height:'1px',
                background:n===i?'var(--brass-500)':'var(--line-hairline)',
                transition:'background-color var(--dur-base) var(--ease-standard)'}}></span>
            </button>
          ))}
        </div>
        <div style={{font:'var(--type-label)',fontSize:'var(--size-micro)',textTransform:'uppercase',
          letterSpacing:'var(--tracking-label)',color:'var(--bone-500)'}}>Reviews from Yelp and Google</div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- POLICIES */
function Policies(){
  return (
    <section id="policies" className="sd-on-bone" style={{...section2,background:'var(--surface-page)',color:'var(--text-body)'}}>
      <div style={{...wrap2,display:'grid',gap:'clamp(40px,6vw,96px)',gridTemplateColumns:'var(--policy-cols, 1fr)',alignItems:'start'}}>
        <window.Reveal>
          <SectionLabel index="06" tone="accent">Policies &amp; FAQ</SectionLabel>
          <h2 style={{marginTop:'var(--space-24)',font:'var(--type-section)',color:'var(--text-display)',maxWidth:'12ch'}}>
            How I run the chair.
          </h2>
          <p style={{marginTop:'var(--space-24)',maxWidth:'34ch'}}>
            None of this is meant to be strict. It is what keeps every appointment on time,
            including yours.
          </p>
        </window.Reveal>
        <window.Reveal delay={120}>
          {D2.policies.map((p,i)=>(<AccordionItem key={p.q} question={p.q} defaultOpen={i===0}><p>{p.a}</p></AccordionItem>))}
          <div style={{marginTop:'var(--space-40)'}}>
            <Button variant="inverse" href={D2.booking} target="_blank" rel="noreferrer noopener">Book Appointment</Button>
          </div>
        </window.Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- VISIT */
function Visit(){
  const todayName=D2.hours[new Date().getDay()===0?6:new Date().getDay()-1].day;
  return (
    <section id="visit" style={section2}>
      <div style={{...wrap2,display:'grid',gap:'clamp(40px,6vw,96px)',gridTemplateColumns:'var(--visit-cols, 1fr)',alignItems:'start'}}>
        <window.Reveal>
          <SectionLabel index="07">Visit</SectionLabel>
          <h2 style={{marginTop:'var(--space-24)',font:'var(--type-section)',maxWidth:'12ch'}}>Find the suite.</h2>
          <div style={{marginTop:'var(--space-40)',display:'grid',gap:'var(--space-32)'}}>
            <ContactLine label="Address · opens in Maps" value={D2.address} href={D2.mapsUrl} external />
            <ContactLine label="Call or text" value={D2.phone} href={D2.phoneHref} />
            <ContactLine label="Instagram" value={D2.instagramHandle} href={D2.instagram} external />
            <ContactLine label="Email" value={D2.email} href={'mailto:'+D2.email} />
          </div>
          <p style={{marginTop:'var(--space-32)',color:'var(--text-muted)',fontSize:'var(--size-body-sm)',maxWidth:'40ch'}}>
            Free lot parking in front of the building. Enter through the main doors and take the corridor to
            Suite 129. House calls are available on request — message me first.
          </p>
          <div style={{marginTop:'var(--space-40)',display:'flex',gap:'var(--space-16)',flexWrap:'wrap'}}>
            <Button variant="primary" size="lg" href={D2.booking} target="_blank" rel="noreferrer noopener">Book Appointment</Button>
            <Button variant="outline" size="lg" href={D2.phoneHref}>Call</Button>
          </div>
        </window.Reveal>
        <window.Reveal delay={120}>
          <div style={{border:'1px solid var(--line-hairline)',background:'var(--ink-800)'}}>
            <iframe title="Map to Shatoya Desree LLC, 455 Grayson Hwy Suite 129, Lawrenceville GA"
              src="https://maps.google.com/maps?q=455%20Grayson%20Hwy%20Suite%20129%20Lawrenceville%20GA%2030046&z=16&output=embed"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              style={{width:'100%',aspectRatio:'4 / 3',border:0,display:'block',filter:'grayscale(1) contrast(1.05) brightness(.72)'}}></iframe>
          </div>
          <div style={{marginTop:'var(--space-40)'}}>
            <SectionLabel tone="muted">Hours</SectionLabel>
            <div style={{marginTop:'var(--space-16)'}}>
              <HoursTable hours={D2.hours} today={todayName} />
            </div>
            <p style={{marginTop:'var(--space-16)',fontSize:'var(--size-body-sm)',color:'var(--text-muted)'}}>
              Weekdays include a short break from 1:00 to 1:30 PM. By appointment only — walk-ins cannot be guaranteed a chair.
            </p>
          </div>
        </window.Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ FINAL CTA */
function FinalCta(){
  return (
    <section style={{position:'relative',background:'var(--ink-1000)',borderTop:'1px solid var(--line-accent-soft)',
      padding:'var(--section-pad-y) 0',overflow:'hidden',textAlign:'center'}}>
      <div style={window.SDgrain}></div>
      <div style={{...wrap2,position:'relative',display:'grid',justifyItems:'center',gap:'var(--space-32)'}}>
        <img src="../../assets/logo-badge.jpg" alt="Shatoya Desree LLC monogram" width="88" height="88"
          style={{width:'88px',height:'88px',borderRadius:'var(--radius-round)'}} />
        <h2 style={{font:'var(--type-section)',maxWidth:'16ch'}}>Your chair is one tap away.</h2>
        <p style={{color:'var(--text-muted)',maxWidth:'40ch'}}>
          Real-time availability through Square. Prepay, pick your time, and the slot is yours.
        </p>
        <Button variant="primary" size="lg" href={D2.booking} target="_blank" rel="noreferrer noopener">Book Appointment</Button>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- LIGHTBOX */
function Lightbox({index,onClose,onStep}){
  if(index==null) return null;
  const g=D2.gallery[index];
  return (
    <div role="dialog" aria-modal="true" aria-label={g.alt} onClick={onClose}
      style={{position:'fixed',inset:0,zIndex:100,background:'var(--overlay-scrim)',backdropFilter:'blur(8px)',
        WebkitBackdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center',
        padding:'var(--space-24)',animation:'sdFade var(--dur-base) var(--ease-standard)'}}>
      <div onClick={e=>e.stopPropagation()} style={{maxWidth:'520px',width:'100%',boxShadow:'var(--shadow-overlay)'}}>
        <img src={g.src} alt={g.alt} style={{width:'100%',maxHeight:'72vh',objectFit:'contain',
          background:'var(--ink-1000)',borderRadius:'var(--radius-xs)'}} />
        <div style={{marginTop:'var(--space-16)',display:'flex',justifyContent:'space-between',alignItems:'center',
          gap:'var(--space-16)',font:'var(--type-label)',fontSize:'var(--size-micro)',
          textTransform:'uppercase',letterSpacing:'var(--tracking-label)'}}>
          <span style={{color:'var(--text-accent)'}}>{g.caption}</span>
          <span style={{display:'flex',gap:'var(--space-16)'}}>
            <button onClick={()=>onStep(-1)} style={btn}>Prev</button>
            <button onClick={()=>onStep(1)} style={btn}>Next</button>
            <button onClick={onClose} style={{...btn,color:'var(--brass-400)'}}>Close</button>
          </span>
        </div>
      </div>
    </div>
  );
}
const btn={background:'none',border:0,color:'var(--bone-300)',cursor:'pointer',font:'inherit',
  textTransform:'uppercase',letterSpacing:'var(--tracking-label)',minHeight:'var(--tap-min)',padding:0};

Object.assign(window,{Gallery,Testimonials,Policies,Visit,FinalCta,Lightbox});
