const DS = (window.ShatoyaDesreeDesignSystem_8bbdd9||{});
const { Button, SectionLabel, Badge, ServiceRow, ProcessStep } = DS;
const D = window.SD;

const wrap = {maxWidth:'var(--content-max)',margin:'0 auto',padding:'0 var(--gutter-mobile)'};
const section = {padding:'var(--section-pad-y) 0'};

function Reveal({children,delay=0,style,as:Tag='div'}){
  const ref=React.useRef(null); const [on,setOn]=React.useState(false);
  React.useEffect(()=>{
    const el=ref.current; if(!el) return;
    if(!('IntersectionObserver' in window)){setOn(true);return;}
    const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setOn(true);io.disconnect();}},{threshold:.1,rootMargin:'0px 0px -8% 0px'});
    io.observe(el); return ()=>io.disconnect();
  },[]);
  return <Tag ref={ref} style={{opacity:on?1:0,transform:on?'none':'translateY(var(--rise-distance))',
    transition:'opacity var(--dur-reveal) var(--ease-out-soft) '+delay+'ms, transform var(--dur-reveal) var(--ease-out-soft) '+delay+'ms',...style}}>{children}</Tag>;
}

const grainStyle={position:'absolute',inset:0,pointerEvents:'none',opacity:'var(--grain-opacity)',
  backgroundImage:"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='g'><feTurbulence baseFrequency='0.85' numOctaves='3'/></filter><rect width='140' height='140' filter='url(%23g)'/></svg>\")"};

/* ---------------------------------------------------------------- HERO */
function Hero(){
  return (
    <section id="top" style={{position:'relative',minHeight:'100svh',display:'grid',
      gridTemplateColumns:'var(--hero-cols, 1fr)',alignItems:'stretch',background:'var(--ink-1000)',overflow:'hidden'}}>
      <div className="sd-hero-photo" style={{position:'relative',minHeight:'46svh',order:'var(--hero-photo-order, 1)',
        background:'var(--ink-1000)'}}>
        <img src={D.heroImage.src} alt={D.heroImage.alt} fetchpriority="high"
          style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',
            objectPosition:'38% 42%',filter:'saturate(.94) contrast(1.03)'}} />
        <div style={{position:'absolute',inset:0,background:'var(--vignette)'}}></div>
        <div style={{position:'absolute',inset:0,background:'var(--overlay-hero)'}}></div>
        <div style={grainStyle}></div>
      </div>

      {/* type column */}
      <div style={{position:'relative',display:'flex',flexDirection:'column',justifyContent:'center',
        padding:'calc(var(--space-96) + 40px) var(--gutter-mobile) var(--space-64)',order:'var(--hero-type-order, 2)'}}>
        <Reveal>
          <SectionLabel tone="accent">Loctician &amp; Barber · {D.city}</SectionLabel>
          <h1 style={{marginTop:'var(--space-32)',font:'var(--type-hero)',fontSize:'clamp(3rem,8.5vw,6.5rem)',
            color:'var(--bone-50)',maxWidth:'9ch'}}>Shatoya<br/>Desree</h1>
        </Reveal>
        <Reveal delay={140}>
          <p style={{marginTop:'var(--space-32)',fontSize:'var(--size-body-lg)',color:'var(--bone-200)',maxWidth:'36ch'}}>
            Retwists, starter locs, fades and beard work — in a private suite on Grayson Highway.
            One chair, one stylist, your full appointment.
          </p>
          <div style={{marginTop:'var(--space-48)',display:'flex',flexWrap:'wrap',gap:'var(--space-24)',alignItems:'center'}}>
            <Button variant="primary" size="lg" href={D.booking} target="_blank" rel="noreferrer noopener">Book Appointment</Button>
            <Button variant="ghost" href="#gallery">See the work</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ TRUST STRIP */
function TrustStrip(){
  const items=[
    ['Licensed','Georgia cosmetology'],
    ['Prepaid booking','Your time is held'],
    ['House calls','On request'],
    ['Locs & barbering','Both, by one hand']
  ];
  return (
    <section style={{borderTop:'1px solid var(--line-accent-soft)',borderBottom:'1px solid var(--line-accent-soft)',
      background:'var(--ink-1000)'}}>
      <div style={{...wrap,display:'grid',gridTemplateColumns:'var(--trust-cols, 1fr 1fr)',
        gap:'1px',background:'var(--line-hairline)'}}>
        {items.map(([t,s])=>(
          <div key={t} style={{background:'var(--ink-1000)',padding:'var(--space-32) var(--space-24)'}}>
            <div style={{font:'var(--type-label)',fontSize:'var(--size-micro)',textTransform:'uppercase',
              letterSpacing:'var(--tracking-label)',color:'var(--brass-500)'}}>{t}</div>
            <div style={{marginTop:'var(--space-8)',fontSize:'var(--size-body-sm)',color:'var(--text-muted)'}}>{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- ABOUT */
function About(){
  return (
    <section id="about" className="sd-on-bone" style={{...section,background:'var(--surface-page)',color:'var(--text-body)'}}>
      <div style={{...wrap,display:'grid',gap:'clamp(40px,6vw,96px)',gridTemplateColumns:'var(--about-cols, 1fr)',alignItems:'center'}}>
        <Reveal>
          <figure style={{margin:0}}>
            <img src={D.aboutImage.src} alt={D.aboutImage.alt} loading="lazy" decoding="async"
              style={{width:'100%',aspectRatio:'4 / 5',objectFit:'cover',borderRadius:'var(--radius-xs)'}} />
            <figcaption style={{marginTop:'var(--space-12)',font:'var(--type-label)',fontSize:'var(--size-micro)',
              textTransform:'uppercase',letterSpacing:'var(--tracking-label)',color:'var(--text-muted)'}}>
              Loc styling · in the suite
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={120}>
          <SectionLabel index="01" tone="accent">About</SectionLabel>
          <h2 style={{marginTop:'var(--space-24)',font:'var(--type-section)',color:'var(--text-display)',maxWidth:'13ch'}}>
            I take hair seriously.
          </h2>
          <div style={{marginTop:'var(--space-32)',display:'grid',gap:'var(--space-24)',maxWidth:'var(--measure-narrow)'}}>
            <p>I am Toya. I started out cutting — fades, lineups, beards — and I never put the clippers down.
              Then locs found me, and they became the work I am known for. Today I do both, out of a suite
              I built so the room would feel like somewhere you can exhale.</p>
            <p>My clients stay because I protect their hair. I will tell you the truth about your locs. I will
              not rush your retwist to squeeze in another head, and I will not put you in a style your hair
              cannot hold. You get the full appointment you paid for.</p>
            <p>Come as you are. I will handle the rest.</p>
          </div>
          <div style={{marginTop:'var(--space-40)',display:'flex',flexWrap:'wrap',gap:'var(--space-12)'}}>
            <Badge tone="quiet">Licensed in Georgia</Badge>
            <Badge tone="quiet">Locs · Cuts · Beards</Badge>
            <Badge tone="quiet">House calls available</Badge>
          </div>
          <div style={{marginTop:'var(--space-40)'}}>
            <Button variant="inverse" href={D.booking} target="_blank" rel="noreferrer noopener">Book Appointment</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ SERVICES */
function Services(){
  return (
    <section id="services" style={section}>
      <div style={wrap}>
        <Reveal>
          <SectionLabel index="02">Services &amp; Pricing</SectionLabel>
          <h2 style={{marginTop:'var(--space-24)',font:'var(--type-section)',maxWidth:'16ch'}}>The menu.</h2>
          <p style={{marginTop:'var(--space-24)',color:'var(--text-muted)',maxWidth:'48ch'}}>
            Prices include tax. Every line books directly. If you are not sure which length band you fall into,
            book the shorter one and I will tell you in the chair.
          </p>
        </Reveal>
        <div style={{marginTop:'var(--space-80)',display:'grid',gap:'var(--space-80)'}}>
          {D.menu.map((group,gi)=>(
            <Reveal key={group.slug} delay={gi*40}>
              <div style={{display:'grid',gap:'var(--space-24)',gridTemplateColumns:'var(--menu-cols, 1fr)',alignItems:'start'}}>
                <div style={{position:'var(--menu-sticky, static)',top:'112px'}}>
                  <SectionLabel tone="muted">{group.category}</SectionLabel>
                  <a href={'service.html#'+group.slug} style={{display:'inline-block',marginTop:'var(--space-16)',
                    font:'var(--type-label)',fontSize:'var(--size-micro)',textTransform:'uppercase',
                    letterSpacing:'var(--tracking-label)'}}>Read more</a>
                </div>
                <div>{group.items.map(it=>(
                  <ServiceRow key={it.name} {...it} href={D.booking} target="_blank" rel="noreferrer noopener" />
                ))}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal style={{marginTop:'var(--space-64)'}}>
          <Button variant="primary" size="lg" href={D.booking} target="_blank" rel="noreferrer noopener">Book Appointment</Button>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- FIRST VISIT */
function FirstVisit(){
  return (
    <section id="first-visit" style={{...section,paddingTop:0}}>
      <div style={wrap}>
        <Reveal>
          <SectionLabel index="03">First Time Here</SectionLabel>
          <h2 style={{marginTop:'var(--space-24)',font:'var(--type-subsection)',maxWidth:'20ch'}}>
            Nothing about booking should be a mystery.
          </h2>
        </Reveal>
        <Reveal delay={100} style={{marginTop:'var(--space-48)'}}>
          <div style={{display:'grid',gridTemplateColumns:'var(--steps-cols, 1fr)',gap:'var(--space-40)'}}>
            <ProcessStep index="01" title="Pick your service">
              Book by what you need and, for retwists, by your length. Unsure? Choose the shorter band —
              I will tell you in the chair and adjust.
            </ProcessStep>
            <ProcessStep index="02" title="Pay when you book">
              Booking is prepaid through Square, which is what holds your slot. Card, Apple Pay, Google Pay
              or Afterpay. Tax is already in the price.
            </ProcessStep>
            <ProcessStep index="03" title="Come to Suite 129">
              Park out front, walk in the main doors, take the corridor to 129. Come alone unless you are
              bringing a child I am also servicing.
            </ProcessStep>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window,{Reveal,Hero,TrustStrip,About,Services,FirstVisit,SDwrap:wrap,SDsection:section,SDgrain:grainStyle});
