One-line: the always-present mobile booking bar — show it below 900px on every page.

```jsx
<StickyBookBar bookingUrl={BOOKING_URL} phone="(470) 624-5865" />
```

Reserve `calc(var(--bar-height) + 24px)` of bottom padding on the page so it never covers the footer.
