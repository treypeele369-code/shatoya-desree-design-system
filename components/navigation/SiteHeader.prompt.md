One-line: the fixed desktop header; hide the nav links below 900px and rely on `StickyBookBar` instead.

```jsx
<SiteHeader logoSrc="assets/logo-badge.jpg" scrolled={y>80} bookingUrl={BOOKING_URL}
  links={[{label:'Services',href:'#services'},{label:'Gallery',href:'#gallery'}]} />
```
