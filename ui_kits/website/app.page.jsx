const { SiteHeader, SiteFooter, StickyBookBar, MobileNav } = (window.ShatoyaDesreeDesignSystem_8bbdd9||{});
const D3 = window.SD;
const NAV=[{label:'About',href:'#about'},{label:'Services',href:'#services'},
  {label:'Gallery',href:'#gallery'},{label:'Policies',href:'#policies'},{label:'Visit',href:'#visit'}];

function App(){
  const [y,setY]=React.useState(0);
  const [menu,setMenu]=React.useState(false);
  const [shot,setShot]=React.useState(null);
  React.useEffect(()=>{
    const on=()=>setY(window.scrollY);
    window.addEventListener('scroll',on,{passive:true}); return ()=>window.removeEventListener('scroll',on);
  },[]);
  React.useEffect(()=>{
    const k=e=>{
      if(e.key==='Escape') setShot(null);
      if(shot!=null&&e.key==='ArrowRight') setShot(s=>(s+1)%D3.gallery.length);
      if(shot!=null&&e.key==='ArrowLeft') setShot(s=>(s-1+D3.gallery.length)%D3.gallery.length);
    };
    window.addEventListener('keydown',k); return ()=>window.removeEventListener('keydown',k);
  },[shot]);
  React.useEffect(()=>{document.body.style.overflow=(menu||shot!=null)?'hidden':''},[menu,shot]);
  const step=d=>setShot(s=>(s+d+D3.gallery.length)%D3.gallery.length);
  return (
    <React.Fragment>
      <div className="sd-header"><SiteHeader logoSrc="../../assets/logo-badge.jpg" brand={D3.brand} scrolled={y>80}
        bookingUrl={D3.booking} links={NAV} onMenu={()=>setMenu(true)} /></div>
      <MobileNav open={menu} onClose={()=>setMenu(false)} links={NAV} bookingUrl={D3.booking}
        phone={D3.phone} phoneHref={D3.phoneHref} instagram={D3.instagram} />
      <main>
        <Hero/><TrustStrip/><About/><Services/><FirstVisit/>
        <Gallery onOpen={setShot}/><Testimonials/><Policies/><Visit/><FinalCta/>
      </main>
      <SiteFooter logoSrc="../../assets/logo-badge.jpg" brand={D3.legal} bookingUrl={D3.booking}
        instagram={D3.instagram} phone={D3.phone} phoneHref={D3.phoneHref} address={D3.address} />
      <div className="sd-book-bar"><StickyBookBar bookingUrl={D3.booking} phone={D3.phone} phoneHref={D3.phoneHref} /></div>
      <Lightbox index={shot} onClose={()=>setShot(null)} onStep={step} />
    </React.Fragment>
  );
}
window.App = App;
