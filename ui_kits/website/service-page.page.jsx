const { Button, SectionLabel, Badge, ServiceRow, Testimonial, GalleryTile, AccordionItem, ContactLine,
  SiteHeader, SiteFooter, StickyBookBar, MobileNav } = (window.ShatoyaDesreeDesignSystem_8bbdd9||{});
const D = window.SD;

const COPY = {
  'loc-maintenance':{
    h1:'Loc retwist & maintenance in Lawrenceville',
    lede:'Clean parts, protected roots, and a retwist that holds without tension. Booked by length, always with a shampoo and conditioner.',
    body:['A retwist is the appointment most of my clients keep on repeat, so I treat it like maintenance and not decoration. I look at your scalp, I look at how the last set grew in, and I tell you what I see.','Short to shoulder runs an hour. Longer hair gets a longer window. If your locs need more time than the booked slot, I will say so before we go over — never after.'],
    seoTitle:'Loc Retwist & Maintenance | Lawrenceville, GA | Shatoya Desree',
    seoDesc:'Adult and kids loc retwists, interlocking and loc repair in Lawrenceville, GA. Shampoo and conditioning included. Book online with Shatoya Desree LLC.'
  },
  'starter-locs':{
    h1:'Starter locs & instant locs in Lawrenceville',
    lede:'Comb coils, kids starter sets, and a full instant loc install — the beginning of a loc journey done properly.',
    body:['Instant locs are a full day in the chair, seven and a half hours, and worth every minute if you want to skip the awkward stage. Comb coils are the slower, traditional start.','We talk before we start. Hair density, length, how you plan to maintain it — the install is only as good as the plan behind it.'],
    seoTitle:'Starter Locs & Instant Locs | Lawrenceville, GA | Shatoya Desree',
    seoDesc:'Instant locs, comb coils and kids starter sets in Lawrenceville, GA. Consultation included. Book online with Shatoya Desree LLC.'
  },
  'loc-styling':{
    h1:'Loc styling — platts and rod sets',
    lede:'Styling that works with the locs you have, for an event or just because it is time for something different.',
    body:['Rod sets start at $150 and price out by length, so we consult first. Platts are quicker and hold well through a work week.','Styling is booked on top of maintenance, not instead of it. If you need a retwist too, book both.'],
    seoTitle:'Loc Styling, Platts & Rod Sets | Lawrenceville, GA | Shatoya Desree',
    seoDesc:'Loc styling in Lawrenceville, GA — platts and rod sets by Shatoya Desree LLC. Consultation for length. Book online.'
  },
  'barbering':{
    h1:'Haircuts, fades and beard work',
    lede:'Shampoo, cut and a lineup that sits where it should. Beards shaped, not just shortened.',
    body:['I cut before I loc, and I never stopped. Cuts come with a shampoo, because a fade looks different on clean hair and it should.','Beard work is its own service or added to a cut. Kids five to fifteen have their own booking.'],
    seoTitle:'Barber, Fades & Beard Trims | Lawrenceville, GA | Shatoya Desree',
    seoDesc:'Haircuts, fades, lineups and beard trims in Lawrenceville, GA. Shampoo included. Book online with Shatoya Desree LLC.'
  }
};

function ServicePage(){
  const [slug,setSlug]=React.useState(()=>(location.hash||'#loc-maintenance').slice(1));
  const [y,setY]=React.useState(0);
  const [menu,setMenu]=React.useState(false);
  React.useEffect(()=>{
    const h=()=>setSlug((location.hash||'#loc-maintenance').slice(1));
    const s=()=>setY(window.scrollY);
    window.addEventListener('hashchange',h); window.addEventListener('scroll',s,{passive:true});
    return ()=>{window.removeEventListener('hashchange',h);window.removeEventListener('scroll',s)};
  },[]);
  const group=D.menu.find(m=>m.slug===slug)||D.menu[0];
  const copy=COPY[group.slug];
  React.useEffect(()=>{
    document.title=copy.seoTitle;
    document.querySelector('meta[name=description]').setAttribute('content',copy.seoDesc);
  },[copy]);
  const wrap={maxWidth:'var(--content-max)',margin:'0 auto',padding:'0 var(--gutter-mobile)'};
  return (
    <React.Fragment>
      <div className="sd-header"><SiteHeader logoSrc="../../assets/logo-badge.jpg" brand={D.brand} scrolled={y>40}
        bookingUrl={D.booking} links={D.menu.map(m=>({label:m.category,href:'#'+m.slug}))} onMenu={()=>setMenu(true)} /></div>
      <MobileNav open={menu} onClose={()=>setMenu(false)} bookingUrl={D.booking}
        links={[{label:'Home',href:'index.html'}].concat(D.menu.map(m=>({label:m.category,href:'#'+m.slug})))}
        phone={D.phone} phoneHref={D.phoneHref} instagram={D.instagram} />
      <main>
        <section style={{padding:'160px 0 var(--section-pad-y-tight)',borderBottom:'1px solid var(--line-hairline)'}}>
          <div style={wrap}>
            <nav style={{font:'var(--type-label)',fontSize:'var(--size-micro)',textTransform:'uppercase',
              letterSpacing:'var(--tracking-label)',color:'var(--text-muted)',marginBottom:'var(--space-32)'}}>
              <a href="index.html">Home</a> &nbsp;/&nbsp; <span>{group.category}</span>
            </nav>
            <h1 style={{font:'var(--type-section)',maxWidth:'16ch'}}>{copy.h1}</h1>
            <p style={{marginTop:'var(--space-32)',fontSize:'var(--size-body-lg)',color:'var(--bone-200)',maxWidth:'44ch'}}>{copy.lede}</p>
            <div style={{marginTop:'var(--space-40)',display:'flex',gap:'var(--space-16)',flexWrap:'wrap',alignItems:'center'}}>
              <Button variant="primary" size="lg" href={D.booking}>Book Appointment</Button>
              <Badge tone="quiet">{D.city}</Badge>
            </div>
          </div>
        </section>

        <section style={{padding:'var(--section-pad-y) 0'}}>
          <div style={{...wrap,display:'grid',gap:'clamp(40px,6vw,96px)',gridTemplateColumns:'var(--svc-cols, 1fr)'}}>
            <div>
              <SectionLabel index="01">What to expect</SectionLabel>
              <div style={{marginTop:'var(--space-32)',display:'grid',gap:'var(--space-24)',maxWidth:'var(--measure-narrow)'}}>
                {copy.body.map((p,i)=><p key={i}>{p}</p>)}
              </div>
            </div>
            <div>
              <SectionLabel index="02">Prices</SectionLabel>
              <div style={{marginTop:'var(--space-24)'}}>
                {group.items.map(it=><ServiceRow key={it.name} {...it} href={D.booking} />)}
              </div>
              <div style={{marginTop:'var(--space-40)'}}><Button variant="primary" href={D.booking}>Book Appointment</Button></div>
            </div>
          </div>
        </section>

        <section style={{padding:'var(--section-pad-y-tight) 0',background:'var(--ink-1000)'}}>
          <div style={wrap}>
            <SectionLabel index="03">Recent work</SectionLabel>
            <div style={{marginTop:'var(--space-32)',display:'grid',
              gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:'var(--space-12)'}}>
              {D.gallery.slice(0,4).map((g,i)=><GalleryTile key={i} {...g} ratio="1 / 1" />)}
            </div>
          </div>
        </section>

        <section style={{padding:'var(--section-pad-y) 0',background:'var(--oxblood-800)'}}>
          <div style={wrap}><Testimonial {...D.testimonials[0]} /></div>
        </section>

        <section style={{padding:'var(--section-pad-y-tight) 0',borderTop:'1px solid var(--line-hairline)'}}>
          <div style={wrap}>
            <SectionLabel tone="muted">Other services</SectionLabel>
            <div style={{marginTop:'var(--space-24)',display:'flex',flexWrap:'wrap',gap:'var(--space-32)'}}>
              {D.menu.filter(m=>m.slug!==group.slug).map(m=>(
                <a key={m.slug} href={'#'+m.slug} style={{fontFamily:'var(--font-display)',
                  fontSize:'clamp(1.25rem,2.2vw,1.625rem)',borderBottom:'1px solid var(--line-accent-soft)',
                  paddingBottom:'4px'}}>{m.category}</a>
              ))}
            </div>
            <div style={{marginTop:'var(--space-48)',display:'grid',gap:'var(--space-32)',
              gridTemplateColumns:'var(--svc-cols, 1fr)'}}>
              <ContactLine label="Address · opens in Maps" value={D.address} href={D.mapsUrl} external />
              <ContactLine label="Call or text" value={D.phone} href={D.phoneHref} />
            </div>
          </div>
        </section>

        <section className="sd-on-bone" style={{padding:'var(--section-pad-y) 0',background:'var(--surface-page)',color:'var(--text-body)'}}>
          <div style={{...wrap,maxWidth:'var(--content-max-narrow)'}}>
            <SectionLabel index="04" tone="accent">Good to know</SectionLabel>
            <div style={{marginTop:'var(--space-32)'}}>
              {D.policies.slice(0,4).map((p,i)=><AccordionItem key={p.q} question={p.q} defaultOpen={i===0}><p>{p.a}</p></AccordionItem>)}
            </div>
            <div style={{marginTop:'var(--space-40)'}}><Button variant="inverse" size="lg" href={D.booking}>Book Appointment</Button></div>
          </div>
        </section>
      </main>
      <SiteFooter logoSrc="../../assets/logo-badge.jpg" brand={D.legal} bookingUrl={D.booking}
        instagram={D.instagram} phone={D.phone} phoneHref={D.phoneHref} address={D.address} />
      <div className="sd-book-bar"><StickyBookBar bookingUrl={D.booking} phone={D.phone} phoneHref={D.phoneHref} /></div>
    </React.Fragment>
  );
}
window.ServicePage = ServicePage;
