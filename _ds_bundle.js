/* @ds-bundle: {"format":4,"namespace":"ShatoyaDesreeDesignSystem_8bbdd9","components":[{"name":"AccordionItem","sourcePath":"components/content/AccordionItem.jsx"},{"name":"ContactLine","sourcePath":"components/content/ContactLine.jsx"},{"name":"GalleryTile","sourcePath":"components/content/GalleryTile.jsx"},{"name":"HoursTable","sourcePath":"components/content/HoursTable.jsx"},{"name":"ImagePlaceholder","sourcePath":"components/content/ImagePlaceholder.jsx"},{"name":"ProcessStep","sourcePath":"components/content/ProcessStep.jsx"},{"name":"ServiceRow","sourcePath":"components/content/ServiceRow.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"MobileNav","sourcePath":"components/navigation/MobileNav.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"StickyBookBar","sourcePath":"components/navigation/StickyBookBar.jsx"}],"sourceHashes":{"components/content/AccordionItem.jsx":"e47ea253c7a4","components/content/ContactLine.jsx":"d98677a18553","components/content/GalleryTile.jsx":"0dae97f5b863","components/content/HoursTable.jsx":"bbd44395ecbf","components/content/ImagePlaceholder.jsx":"68197170d89e","components/content/ProcessStep.jsx":"3f4f50bb7d8d","components/content/ServiceRow.jsx":"81e30b1f740a","components/content/Testimonial.jsx":"3724eb1d99d7","components/core/Badge.jsx":"aaf1801256f1","components/core/Button.jsx":"d4d271b1c98b","components/core/Rule.jsx":"b82bc0f89abc","components/core/SectionLabel.jsx":"1a16f968a1e6","components/forms/Input.jsx":"95bebe27940d","components/forms/Textarea.jsx":"1238dbf8fe7f","components/navigation/MobileNav.jsx":"9cc623c49f0c","components/navigation/SiteFooter.jsx":"5b5cc4da0d3a","components/navigation/SiteHeader.jsx":"7b31abdf4d4c","components/navigation/StickyBookBar.jsx":"92a21d9c35a8","ui_kits/website/app.page.jsx":"00a398dc3ad5","ui_kits/website/data.js":"62861995dd7f","ui_kits/website/sections-2.page.jsx":"565d52a412a9","ui_kits/website/sections.page.jsx":"2ce1cf233976","ui_kits/website/service-page.page.jsx":"3d5069f53f1b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ShatoyaDesreeDesignSystem_8bbdd9 = window.ShatoyaDesreeDesignSystem_8bbdd9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/AccordionItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One policy or FAQ line. Hairline top rule, brass plus/minus, slow reveal. */
function AccordionItem({
  question,
  children,
  defaultOpen = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--line-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    "aria-expanded": open,
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-24)',
      padding: 'var(--space-24) 0',
      minHeight: 'var(--tap-min)',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'clamp(1.25rem,2.2vw,1.5rem)',
      color: 'var(--text-display)'
    }
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: '14px',
      height: '14px',
      position: 'relative',
      color: 'var(--brass-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '6px',
      left: 0,
      width: '14px',
      height: '1px',
      background: 'currentColor'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: '6px',
      width: '1px',
      height: '14px',
      background: 'currentColor',
      transform: open ? 'scaleY(0)' : 'scaleY(1)',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: 'grid-template-rows var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'var(--space-32)',
      color: 'var(--text-body)',
      font: 'var(--type-body)',
      maxWidth: 'var(--measure)'
    }
  }, children))));
}
Object.assign(__ds_scope, { AccordionItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AccordionItem.jsx", error: String((e && e.message) || e) }); }

// components/content/ContactLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A labelled contact row: small-caps label, then the value as a large brass-underlined link. */
function ContactLine({
  label,
  value,
  href,
  external,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-8)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("a", {
    href: href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noreferrer noopener' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      justifySelf: 'start',
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.375rem,2.4vw,1.75rem)',
      lineHeight: 1.3,
      color: hover ? 'var(--brass-400)' : 'var(--text-display)',
      borderBottom: '1px solid ' + (hover ? 'var(--brass-400)' : 'var(--line-accent)'),
      paddingBottom: '4px',
      minHeight: 'var(--tap-min)',
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'var(--transition-control)'
    }
  }, value));
}
Object.assign(__ds_scope, { ContactLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContactLine.jsx", error: String((e && e.message) || e) }); }

// components/content/GalleryTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One image in the work grid. Lazy-loaded, alt text required, opens the lightbox on click. */
function GalleryTile({
  src,
  alt,
  ratio = '3 / 4',
  caption,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-label": alt,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      padding: 0,
      border: 0,
      background: 'var(--ink-800)',
      cursor: 'pointer',
      width: '100%',
      aspectRatio: ratio,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xs)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    decoding: "async",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: hover ? 'none' : 'saturate(.92)',
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out-soft),filter var(--dur-base) var(--ease-standard)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--line-hairline)',
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--bone-500)',
      textAlign: 'center',
      padding: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Photo"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, alt)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '32px 16px 12px',
      background: 'linear-gradient(180deg,transparent,rgba(5,5,5,.8))',
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--bone-100)',
      textAlign: 'left'
    }
  }, caption));
}
Object.assign(__ds_scope, { GalleryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GalleryTile.jsx", error: String((e && e.message) || e) }); }

// components/content/HoursTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Opening hours as a hairline-ruled definition list. Today's row is brass. */
function HoursTable({
  hours,
  today,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      ...style
    }
  }, rest), hours.map((h, i) => {
    const active = today === h.day;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: h.day
    }, /*#__PURE__*/React.createElement("dt", {
      style: {
        padding: 'var(--space-16) 0',
        borderTop: i ? '1px solid var(--line-hairline)' : '0',
        font: 'var(--type-label)',
        fontSize: 'var(--size-label)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-label)',
        color: active ? 'var(--text-accent)' : 'var(--text-muted)'
      }
    }, h.day), /*#__PURE__*/React.createElement("dd", {
      style: {
        margin: 0,
        padding: 'var(--space-16) 0',
        borderTop: i ? '1px solid var(--line-hairline)' : '0',
        textAlign: 'right',
        fontFamily: 'var(--font-ui)',
        fontVariantNumeric: 'tabular-nums',
        color: active ? 'var(--text-accent)' : h.closed ? 'var(--text-muted)' : 'var(--text-body)'
      }
    }, h.value));
  }));
}
Object.assign(__ds_scope, { HoursTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/HoursTable.jsx", error: String((e && e.message) || e) }); }

// components/content/ImagePlaceholder.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Explicitly-labelled stand-in for a photo that hasn't been supplied yet. */
function ImagePlaceholder({
  label,
  ratio = '4 / 5',
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "img",
    "aria-label": label,
    style: {
      aspectRatio: ratio,
      width: '100%',
      background: 'var(--ink-800)',
      border: '1px solid var(--line-hairline)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-24)',
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--brass-600)'
    }
  }, "Replace with photo"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      color: 'var(--bone-300)'
    }
  }, label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--bone-500)'
    }
  }, note));
}
Object.assign(__ds_scope, { ImagePlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImagePlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/content/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A numbered step in the "first visit" sequence. Rule above, brass numeral, short body. */
function ProcessStep({
  index,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--line-accent-soft)',
      paddingTop: 'var(--space-24)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: '2.25rem',
      lineHeight: 1,
      color: 'var(--brass-500)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-16)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: '1.5rem',
      lineHeight: 1.2,
      color: 'var(--text-display)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-12)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-body)',
      maxWidth: '34ch'
    }
  }, children));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One line of the service menu: name left, duration in small caps beneath, price right. Whole row books. */
function ServiceRow({
  name,
  duration,
  price,
  note,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'baseline',
      columnGap: 'var(--space-24)',
      padding: 'var(--space-24) 0',
      borderBottom: '1px solid var(--line-accent-soft)',
      textDecoration: 'none',
      minHeight: 'var(--tap-min)',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'clamp(1.375rem,2.6vw,1.875rem)',
      lineHeight: 1.2,
      color: hover ? 'var(--brass-400)' : 'var(--text-display)',
      transition: 'var(--transition-control)'
    }
  }, name), (duration || note) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 'var(--space-8)',
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, [duration, note].filter(Boolean).join(' · '))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.25rem,2.2vw,1.625rem)',
      color: hover ? 'var(--brass-400)' : 'var(--text-accent)',
      fontVariantNumeric: 'tabular-nums',
      transition: 'var(--transition-control)'
    }
  }, price));
}
Object.assign(__ds_scope, { ServiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceRow.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A single review set large in the display serif. No stars, no cards, no shadow. */
function Testimonial({
  quote,
  name,
  meta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      maxWidth: '22ch',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--type-quote)',
      color: 'var(--text-display)',
      maxWidth: '20ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brass-500)'
    }
  }, "\u201C"), quote, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brass-500)'
    }
  }, "\u201D")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-32)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-16)',
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '32px',
      height: '1px',
      background: 'var(--line-accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, name), meta && /*#__PURE__*/React.createElement("span", null, meta)));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tiny letterspaced marker: category names, "House calls", duration chips. */
function Badge({
  children,
  tone = 'outline',
  style,
  ...rest
}) {
  const tones = {
    outline: {
      color: 'var(--brass-400)',
      border: '1px solid var(--line-accent-soft)',
      background: 'transparent'
    },
    solid: {
      color: 'var(--text-on-brass)',
      border: '1px solid var(--brass-500)',
      background: 'var(--brass-500)'
    },
    quiet: {
      color: 'var(--text-muted)',
      border: '1px solid var(--line-hairline)',
      background: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '0 18px',
    height: '40px',
    fontSize: 'var(--size-micro)'
  },
  md: {
    padding: '0 28px',
    height: 'var(--tap-min)',
    fontSize: 'var(--size-label)'
  },
  lg: {
    padding: '0 40px',
    height: '58px',
    fontSize: 'var(--size-label)'
  }
};

/** Primary call to action. On this site the primary action is always "Book Appointment". */
function Button({
  variant = 'primary',
  size = 'md',
  href,
  as,
  fullWidth = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button');
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-12)',
    fontFamily: 'var(--font-ui)',
    fontWeight: 'var(--weight-ui-medium)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-button)',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'var(--transition-control)',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? .38 : 1,
    whiteSpace: 'nowrap',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--brass-500)',
      color: 'var(--text-on-brass)',
      borderColor: 'var(--brass-500)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brass-400)',
      borderColor: 'var(--brass-600)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      borderColor: 'transparent',
      padding: '0',
      height: 'auto',
      minHeight: 'var(--tap-min)'
    },
    inverse: {
      background: 'var(--ink-900)',
      color: 'var(--bone-50)',
      borderColor: 'var(--ink-900)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hovers = {
    primary: {
      background: 'var(--brass-400)',
      borderColor: 'var(--brass-400)'
    },
    outline: {
      background: 'rgba(200,154,78,.10)',
      borderColor: 'var(--brass-500)',
      color: 'var(--brass-300)'
    },
    ghost: {
      color: 'var(--brass-400)'
    },
    inverse: {
      background: 'var(--ink-700)',
      borderColor: 'var(--ink-700)'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      ...style
    }
  }, rest), children, variant === 'ghost' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      height: '1px',
      width: '20px',
      background: 'currentColor',
      opacity: .7
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hairline divider. The brand's only separator — no borders on cards, no shadows. */
function Rule({
  tone = 'hairline',
  width = '100%',
  inset = 0,
  style,
  ...rest
}) {
  const bg = tone === 'brass' ? 'var(--line-accent)' : tone === 'soft' ? 'var(--line-accent-soft)' : 'var(--line-hairline)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      height: '1px',
      width,
      background: bg,
      marginLeft: inset,
      border: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small-caps eyebrow that opens every section. Optionally numbered, always letterspaced. */
function SectionLabel({
  children,
  index,
  tone = 'accent',
  style,
  ...rest
}) {
  const color = tone === 'accent' ? 'var(--text-accent)' : tone === 'muted' ? 'var(--text-muted)' : 'var(--text-display)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-16)',
      color,
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      ...style
    }
  }, rest), index && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .6,
      fontVariantNumeric: 'tabular-nums'
    }
  }, index), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 40px',
      height: '1px',
      background: 'currentColor',
      opacity: .45
    }
  }));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline-only text field. No boxes, no fills — the form reads like the rest of the page. */
function Input({
  label,
  id,
  type = 'text',
  hint,
  invalid = false,
  style,
  ...rest
}) {
  const inputId = id || 'in-' + (label || 'field').toLowerCase().replace(/\W+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    "aria-invalid": invalid || undefined,
    style: {
      appearance: 'none',
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid ' + (invalid ? 'var(--oxblood-700)' : 'var(--line-hairline)'),
      borderRadius: 0,
      padding: 'var(--space-12) 0',
      minHeight: 'var(--tap-min)',
      color: 'var(--text-display)',
      font: 'var(--type-body)',
      transition: 'var(--transition-control)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line message field. Same underline treatment as Input. */
function Textarea({
  label,
  id,
  rows = 4,
  hint,
  style,
  ...rest
}) {
  const fieldId = id || 'ta-' + (label || 'message').toLowerCase().replace(/\W+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    style: {
      appearance: 'none',
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid var(--line-hairline)',
      borderRadius: 0,
      padding: 'var(--space-12) 0',
      resize: 'vertical',
      color: 'var(--text-display)',
      font: 'var(--type-body)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MobileNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-height slide-in menu for phones. Opened from the header's letterspaced "Menu" text. */
function MobileNav({
  open,
  onClose,
  links = [],
  bookingUrl = '#book',
  phone,
  phoneHref,
  instagram,
  style,
  ...rest
}) {
  React.useEffect(() => {
    const esc = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": !open,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 70,
      pointerEvents: open ? 'auto' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(88vw,380px)',
      background: 'var(--ink-1000)',
      borderLeft: '1px solid var(--line-accent-soft)',
      padding: 'var(--space-32) var(--space-32) var(--space-48)',
      display: 'flex',
      flexDirection: 'column',
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform var(--dur-base) var(--ease-out-soft)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      alignSelf: 'flex-end',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'var(--bone-300)',
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      minHeight: 'var(--tap-min)',
      padding: 0
    }
  }, "Close"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-32)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: onClose,
    style: {
      padding: 'var(--space-16) 0',
      borderBottom: '1px solid var(--line-hairline)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display-light)',
      fontSize: '1.75rem',
      color: 'var(--bone-50)',
      minHeight: 'var(--tap-min)',
      display: 'flex',
      alignItems: 'center'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-32)',
      display: 'grid',
      gap: 'var(--space-16)'
    }
  }, phone && /*#__PURE__*/React.createElement("a", {
    href: phoneHref || 'tel:' + phone.replace(/[^0-9+]/g, ''),
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--bone-300)'
    }
  }, phone), instagram && /*#__PURE__*/React.createElement("a", {
    href: instagram,
    target: "_blank",
    rel: "noreferrer noopener",
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--bone-300)'
    }
  }, "Instagram"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: bookingUrl,
    fullWidth: true
  }, "Book Appointment"))));
}
Object.assign(__ds_scope, { MobileNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MobileNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Closing band: last booking CTA, mark, contact links, copyright. */
function SiteFooter({
  brand = 'Shatoya Desree LLC',
  logoSrc,
  bookingUrl = '#book',
  instagram,
  phone,
  phoneHref,
  address,
  year = new Date().getFullYear(),
  style,
  ...rest
}) {
  const linkStyle = {
    font: 'var(--type-label)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-label)',
    color: 'var(--bone-300)'
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--ink-1000)',
      borderTop: '1px solid var(--line-accent-soft)',
      padding: 'var(--section-pad-y-tight) var(--gutter-mobile) calc(var(--bar-height) + var(--space-48))',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-48)',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-24)'
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: brand + ' logo',
    width: "72",
    height: "72",
    style: {
      width: '72px',
      height: '72px',
      borderRadius: 'var(--radius-round)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wordmark)',
      color: 'var(--bone-100)'
    }
  }, brand), address && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--size-body-sm)',
      maxWidth: '26ch'
    }
  }, address)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-16)'
    }
  }, instagram && /*#__PURE__*/React.createElement("a", {
    href: instagram,
    style: linkStyle
  }, "Instagram"), phone && /*#__PURE__*/React.createElement("a", {
    href: phoneHref || 'tel:' + phone.replace(/[^0-9+]/g, ''),
    style: linkStyle
  }, phone)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "lg",
    href: bookingUrl
  }, "Book Appointment")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: 'var(--space-64) auto 0',
      paddingTop: 'var(--space-24)',
      borderTop: '1px solid var(--line-hairline)',
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--bone-500)'
    }
  }, "\xA9 ", year, " ", brand));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Fixed top bar. Transparent over the hero; on scroll it condenses to ink with a hairline and reveals the CTA. */
function SiteHeader({
  brand = 'Shatoya Desree',
  logoSrc,
  links = [],
  bookingUrl = '#book',
  scrolled = false,
  onMenu,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(11,10,9,.86)' : 'transparent',
      backdropFilter: scrolled ? 'var(--blur-bar)' : 'none',
      WebkitBackdropFilter: scrolled ? 'var(--blur-bar)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-accent-soft)' : '1px solid transparent',
      transition: 'background-color var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-mobile)',
      height: scrolled ? '68px' : '88px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-24)',
      transition: 'height var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-12)',
      textDecoration: 'none',
      flex: '0 0 auto'
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: brand + ' logo',
    width: "36",
    height: "36",
    style: {
      width: '36px',
      height: '36px',
      borderRadius: 'var(--radius-round)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wordmark)',
      color: 'var(--bone-50)',
      whiteSpace: 'nowrap',
      flex: '0 0 auto'
    }
  }, brand)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(16px,2.4vw,32px)',
      flex: '0 1 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sd-nav-links",
    style: {
      display: 'flex',
      gap: 'clamp(16px,2.2vw,32px)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--bone-300)',
      whiteSpace: 'nowrap'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "sd-nav-cta",
    style: {
      opacity: scrolled ? 1 : 0,
      transform: scrolled ? 'none' : 'translateY(-6px)',
      pointerEvents: scrolled ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: bookingUrl
  }, "Book Appointment")), onMenu && /*#__PURE__*/React.createElement("button", {
    className: "sd-menu-trigger",
    onClick: onMenu,
    "aria-label": "Open menu",
    style: {
      display: 'none',
      alignItems: 'center',
      gap: 'var(--space-8)',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'var(--bone-50)',
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      minHeight: 'var(--tap-min)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'grid',
      gap: '4px',
      width: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: '1px',
      background: 'currentColor'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: '1px',
      background: 'currentColor'
    }
  })), "Menu"))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StickyBookBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bottom-fixed booking bar for phones. Always one tap from booking. */
function StickyBookBar({
  bookingUrl = '#book',
  phone,
  phoneHref,
  visible = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sd-book-bar",
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 60,
      background: 'rgba(11,10,9,.92)',
      backdropFilter: 'var(--blur-bar)',
      WebkitBackdropFilter: 'var(--blur-bar)',
      boxShadow: 'var(--shadow-bar)',
      padding: 'var(--space-12) var(--gutter-mobile)',
      paddingBottom: 'calc(var(--space-12) + env(safe-area-inset-bottom))',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-12)',
      transform: visible ? 'none' : 'translateY(110%)',
      transition: 'transform var(--dur-base) var(--ease-out-soft)',
      ...style
    }
  }, rest), phone && /*#__PURE__*/React.createElement("a", {
    href: phoneHref || 'tel:' + phone.replace(/[^0-9+]/g, ''),
    style: {
      flex: '0 0 auto',
      height: 'var(--tap-min)',
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 var(--space-20)',
      border: '1px solid var(--line-accent-soft)',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-button)',
      color: 'var(--brass-400)'
    }
  }, "Call"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: bookingUrl,
    fullWidth: true
  }, "Book Appointment"));
}
Object.assign(__ds_scope, { StickyBookBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StickyBookBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.page.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  StickyBookBar,
  MobileNav
} = window.ShatoyaDesreeDesignSystem_8bbdd9 || {};
const D3 = window.SD;
const NAV = [{
  label: 'About',
  href: '#about'
}, {
  label: 'Services',
  href: '#services'
}, {
  label: 'Gallery',
  href: '#gallery'
}, {
  label: 'Policies',
  href: '#policies'
}, {
  label: 'Visit',
  href: '#visit'
}];
function App() {
  const [y, setY] = React.useState(0);
  const [menu, setMenu] = React.useState(false);
  const [shot, setShot] = React.useState(null);
  React.useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'Escape') setShot(null);
      if (shot != null && e.key === 'ArrowRight') setShot(s => (s + 1) % D3.gallery.length);
      if (shot != null && e.key === 'ArrowLeft') setShot(s => (s - 1 + D3.gallery.length) % D3.gallery.length);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [shot]);
  React.useEffect(() => {
    document.body.style.overflow = menu || shot != null ? 'hidden' : '';
  }, [menu, shot]);
  const step = d => setShot(s => (s + d + D3.gallery.length) % D3.gallery.length);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sd-header"
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    logoSrc: "../../assets/logo-badge.jpg",
    brand: D3.brand,
    scrolled: y > 80,
    bookingUrl: D3.booking,
    links: NAV,
    onMenu: () => setMenu(true)
  })), /*#__PURE__*/React.createElement(MobileNav, {
    open: menu,
    onClose: () => setMenu(false),
    links: NAV,
    bookingUrl: D3.booking,
    phone: D3.phone,
    phoneHref: D3.phoneHref,
    instagram: D3.instagram
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustStrip, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(FirstVisit, null), /*#__PURE__*/React.createElement(Gallery, {
    onOpen: setShot
  }), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Policies, null), /*#__PURE__*/React.createElement(Visit, null), /*#__PURE__*/React.createElement(FinalCta, null)), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: "../../assets/logo-badge.jpg",
    brand: D3.legal,
    bookingUrl: D3.booking,
    instagram: D3.instagram,
    phone: D3.phone,
    phoneHref: D3.phoneHref,
    address: D3.address
  }), /*#__PURE__*/React.createElement("div", {
    className: "sd-book-bar"
  }, /*#__PURE__*/React.createElement(StickyBookBar, {
    bookingUrl: D3.booking,
    phone: D3.phone,
    phoneHref: D3.phoneHref
  })), /*#__PURE__*/React.createElement(Lightbox, {
    index: shot,
    onClose: () => setShot(null),
    onStep: step
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.SD = {
  brand: 'Shatoya Desree',
  legal: 'Shatoya Desree LLC',
  stylist: 'Shatoya "Toya" Bennett',
  city: 'Lawrenceville, Georgia',
  address: '455 Grayson Hwy, Suite 129, Lawrenceville, GA 30046',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=455+Grayson+Hwy+Suite+129+Lawrenceville+GA+30046',
  phone: '(470) 624-5865',
  phoneHref: 'tel:+14706245865',
  email: 'shatoyadesree@gmail.com',
  instagram: 'https://www.instagram.com/shatoya.desree',
  instagramHandle: '@shatoya.desree',
  booking: 'https://square.site/book/0Q0830DRJQKZ6/shatoya-desree-llc-lawrenceville-ga',
  hours: [{
    day: 'Monday',
    value: '8:00 AM – 2:30 PM'
  }, {
    day: 'Tuesday',
    value: '8:00 AM – 2:30 PM'
  }, {
    day: 'Wednesday',
    value: '8:00 AM – 2:30 PM'
  }, {
    day: 'Thursday',
    value: '8:00 AM – 2:30 PM'
  }, {
    day: 'Friday',
    value: '8:00 AM – 2:30 PM'
  }, {
    day: 'Saturday',
    value: '5:00 AM – 12:00 PM'
  }, {
    day: 'Sunday',
    value: 'Closed',
    closed: true
  }],
  menu: [{
    category: 'Loc Maintenance',
    slug: 'loc-maintenance',
    items: [{
      name: 'Adult Retwist (Short – Shoulder)',
      duration: '1 hr',
      price: '$90'
    }, {
      name: 'Adult Retwist (Shoulder – Mid Back)',
      duration: '1 hr',
      price: '$100'
    }, {
      name: 'Adult Retwist (Long)',
      duration: '1 hr 10 min',
      price: '$110'
    }, {
      name: 'Adult Interlocking',
      duration: '1 hr 10 min',
      price: '$200'
    }, {
      name: 'Kid Retwist (up to age 15)',
      duration: '45 min',
      price: '$85'
    }, {
      name: 'Loc Repair',
      duration: '30 min',
      note: 'Per loc',
      price: '$10'
    }]
  }, {
    category: 'Starter Locs',
    slug: 'starter-locs',
    items: [{
      name: 'Instant Locs',
      duration: '7 hr 30 min',
      price: '$400'
    }, {
      name: 'Comb Coils',
      duration: '45 min',
      price: '$150'
    }, {
      name: 'Kids Comb Coil Starter (up to age 15)',
      duration: '45 min',
      price: '$100'
    }]
  }, {
    category: 'Loc Styling',
    slug: 'loc-styling',
    items: [{
      name: 'Platts',
      duration: '30 min',
      price: '$90'
    }, {
      name: 'Rod Set',
      duration: '1 hr 30 min',
      note: 'Consultation required',
      price: 'From $150'
    }]
  }, {
    category: 'Barbering',
    slug: 'barbering',
    items: [{
      name: 'Haircut with Beard',
      duration: '45 min',
      note: 'Shampoo, cut, beard trim',
      price: '$50'
    }, {
      name: 'Haircut',
      duration: '45 min',
      note: 'Shampoo and cut',
      price: '$35'
    }, {
      name: 'Beard Trim',
      duration: '30 min',
      price: '$20'
    }, {
      name: 'Kids Haircut (ages 5 – 15)',
      duration: '45 min',
      price: '$20'
    }]
  }],
  testimonials: [{
    quote: 'You will leave her chair happy and confident.',
    name: 'Tony',
    meta: 'Loc client, years'
  }, {
    quote: 'Did a fantastic job on trimming my beard. Highly recommend.',
    name: 'Larry',
    meta: 'Beard trim, head shave'
  }, {
    quote: 'Great friendly service and a clean environment.',
    name: 'Tyeshia',
    meta: 'House call'
  }],
  heroImage: {
    src: '../../assets/gallery/honey-loc-mohawk-side.jpg',
    alt: 'Honey-blonde locs styled into a curled mohawk, side profile'
  },
  aboutImage: {
    src: '../../assets/gallery/loc-updo-curls-side.jpg',
    alt: 'Locs styled into a curled updo with a braided side, side profile'
  },
  gallery: [{
    src: '../../assets/gallery/loc-updo-rolls-side.jpg',
    alt: 'Locs rolled and pinned into a sculpted updo over a braided base, side view',
    ratio: '1 / 1',
    caption: 'Loc Styling'
  }, {
    src: '../../assets/gallery/mens-retwist-top.jpg',
    alt: 'Fresh retwist on medium-length locs with clean parts, top view',
    ratio: '1 / 1',
    caption: 'Retwist'
  }, {
    src: '../../assets/gallery/comb-coils-back.jpg',
    alt: 'Tight comb coils on short natural hair, back view',
    ratio: '1 / 1',
    caption: 'Comb Coils'
  }, {
    src: '../../assets/gallery/red-platts-back.jpg',
    alt: 'Red locs braided into platts running back over the crown',
    ratio: '1 / 1',
    caption: 'Platts'
  }, {
    src: '../../assets/gallery/loc-updo-rolls-back.jpg',
    alt: 'Locs coiled into stacked rolls above a braided base, back view',
    ratio: '1 / 1',
    caption: 'Loc Styling'
  }, {
    src: '../../assets/gallery/kids-starter-locs-top.jpg',
    alt: 'Kids starter locs with clean parts across the crown, top view',
    ratio: '1 / 1',
    caption: 'Kids Starter'
  }, {
    src: '../../assets/gallery/twists-retwist-top.jpg',
    alt: 'Two-strand twists set on shoulder-length locs, top view',
    ratio: '1 / 1',
    caption: 'Retwist'
  }, {
    src: '../../assets/gallery/loc-buns-back.jpg',
    alt: 'Locs gathered into two low buns, back view',
    ratio: '1 / 1',
    caption: 'Loc Styling'
  }, {
    src: '../../assets/gallery/mens-retwist-parted.jpg',
    alt: 'Short locs freshly retwisted with a centre part, top view',
    ratio: '4 / 5',
    caption: 'Retwist'
  }, {
    src: '../../assets/gallery/loc-updo-curls-side.jpg',
    alt: 'Locs styled into a curled updo with a braided side, side profile',
    ratio: '1 / 1',
    caption: 'Loc Styling'
  }, {
    src: '../../assets/gallery/honey-loc-mohawk-side.jpg',
    alt: 'Honey-blonde locs styled into a curled mohawk, side profile',
    ratio: '4 / 5',
    caption: 'Loc Styling'
  }],
  policies: [{
    q: 'Deposits and payment',
    a: 'Booking is prepaid through Square, so your time is held the moment you reserve it. Card, Apple Pay, Google Pay and Afterpay all work. Sales tax is already included in the listed price.'
  }, {
    q: 'Cancellations',
    a: 'Cancel or move your appointment at least 24 hours ahead and there is no charge. Inside 24 hours a no-show fee applies, and it varies by service — $8 on a beard trim, up to $35 on a starter set.'
  }, {
    q: 'Running late',
    a: 'I hold your chair for 15 minutes. After that I may need to shorten the service or move you, because the next client is already on their way.'
  }, {
    q: 'Time in the chair',
    a: 'Every service is booked for a set window — most retwists are an hour. If your hair needs longer than the booked time, that is $25 extra, and I will always tell you before we go over.'
  }, {
    q: 'Extra guests',
    a: 'The suite is intimate, so please come alone unless you are bringing a child I am also servicing. It keeps the room calm for everyone.'
  }, {
    q: 'House calls',
    a: 'I do travel for house calls. Message me on Instagram or call and we will work out the details before you book.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/sections-2.page.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS2 = window.ShatoyaDesreeDesignSystem_8bbdd9 || {};
const {
  Button,
  SectionLabel,
  Testimonial,
  GalleryTile,
  AccordionItem,
  HoursTable,
  ContactLine
} = DS2;
const D2 = window.SD;
const wrap2 = window.SDwrap,
  section2 = window.SDsection;

/* -------------------------------------------------------------- GALLERY */
function Gallery({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "gallery",
    style: {
      ...section2,
      background: 'var(--ink-1000)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap2
  }, /*#__PURE__*/React.createElement(window.Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "04"
  }, "Gallery"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-24)',
      font: 'var(--type-section)',
      maxWidth: '16ch'
    }
  }, "The work speaks first."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-24)',
      color: 'var(--text-muted)',
      maxWidth: '44ch'
    }
  }, "Retwists, starter locs, comb coils, platts and styling \u2014 photographed in the suite, unretouched.")), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 100,
    style: {
      marginTop: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      columnCount: 'var(--gallery-cols, 2)',
      columnGap: 'var(--space-12)'
    }
  }, D2.gallery.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      breakInside: 'avoid',
      marginBottom: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(GalleryTile, _extends({}, g, {
    onClick: () => onOpen(i)
  })))))), /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      marginTop: 'var(--space-48)',
      display: 'flex',
      gap: 'var(--space-24)',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: D2.booking,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Book Appointment"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: D2.instagram,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "More on Instagram"))));
}

/* --------------------------------------------------------- TESTIMONIALS */
function Testimonials() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI(n => (n + 1) % D2.testimonials.length), 9000);
    return () => clearInterval(t);
  }, []);
  const t = D2.testimonials[i];
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    style: {
      ...section2,
      background: 'var(--oxblood-800)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: window.SDgrain
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      position: 'relative',
      display: 'grid',
      gap: 'var(--space-48)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "05"
  }, "In Their Words"), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 'clamp(190px,24vw,260px)'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    key: i,
    quote: t.quote,
    name: t.name,
    meta: t.meta,
    style: {
      maxWidth: '26ch',
      animation: 'sdFade var(--dur-slow) var(--ease-out-soft)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-12)'
    }
  }, D2.testimonials.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setI(n),
    "aria-label": 'Review ' + (n + 1),
    "aria-current": n === i,
    style: {
      width: '56px',
      height: 'var(--tap-min)',
      padding: 0,
      border: 0,
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '100%',
      height: '1px',
      background: n === i ? 'var(--brass-500)' : 'var(--line-hairline)',
      transition: 'background-color var(--dur-base) var(--ease-standard)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--bone-500)'
    }
  }, "Reviews from Yelp and Google")));
}

/* ------------------------------------------------------------- POLICIES */
function Policies() {
  return /*#__PURE__*/React.createElement("section", {
    id: "policies",
    className: "sd-on-bone",
    style: {
      ...section2,
      background: 'var(--surface-page)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      display: 'grid',
      gap: 'clamp(40px,6vw,96px)',
      gridTemplateColumns: 'var(--policy-cols, 1fr)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "06",
    tone: "accent"
  }, "Policies & FAQ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-24)',
      font: 'var(--type-section)',
      color: 'var(--text-display)',
      maxWidth: '12ch'
    }
  }, "How I run the chair."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-24)',
      maxWidth: '34ch'
    }
  }, "None of this is meant to be strict. It is what keeps every appointment on time, including yours.")), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 120
  }, D2.policies.map((p, i) => /*#__PURE__*/React.createElement(AccordionItem, {
    key: p.q,
    question: p.q,
    defaultOpen: i === 0
  }, /*#__PURE__*/React.createElement("p", null, p.a))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    href: D2.booking,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Book Appointment")))));
}

/* ---------------------------------------------------------------- VISIT */
function Visit() {
  const todayName = D2.hours[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1].day;
  return /*#__PURE__*/React.createElement("section", {
    id: "visit",
    style: section2
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      display: 'grid',
      gap: 'clamp(40px,6vw,96px)',
      gridTemplateColumns: 'var(--visit-cols, 1fr)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "07"
  }, "Visit"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-24)',
      font: 'var(--type-section)',
      maxWidth: '12ch'
    }
  }, "Find the suite."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-40)',
      display: 'grid',
      gap: 'var(--space-32)'
    }
  }, /*#__PURE__*/React.createElement(ContactLine, {
    label: "Address \xB7 opens in Maps",
    value: D2.address,
    href: D2.mapsUrl,
    external: true
  }), /*#__PURE__*/React.createElement(ContactLine, {
    label: "Call or text",
    value: D2.phone,
    href: D2.phoneHref
  }), /*#__PURE__*/React.createElement(ContactLine, {
    label: "Instagram",
    value: D2.instagramHandle,
    href: D2.instagram,
    external: true
  }), /*#__PURE__*/React.createElement(ContactLine, {
    label: "Email",
    value: D2.email,
    href: 'mailto:' + D2.email
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-32)',
      color: 'var(--text-muted)',
      fontSize: 'var(--size-body-sm)',
      maxWidth: '40ch'
    }
  }, "Free lot parking in front of the building. Enter through the main doors and take the corridor to Suite 129. House calls are available on request \u2014 message me first."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-40)',
      display: 'flex',
      gap: 'var(--space-16)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: D2.booking,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Book Appointment"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    href: D2.phoneHref
  }, "Call"))), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--line-hairline)',
      background: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Map to Shatoya Desree LLC, 455 Grayson Hwy Suite 129, Lawrenceville GA",
    src: "https://maps.google.com/maps?q=455%20Grayson%20Hwy%20Suite%20129%20Lawrenceville%20GA%2030046&z=16&output=embed",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    style: {
      width: '100%',
      aspectRatio: '4 / 3',
      border: 0,
      display: 'block',
      filter: 'grayscale(1) contrast(1.05) brightness(.72)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "muted"
  }, "Hours"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(HoursTable, {
    hours: D2.hours,
    today: todayName
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-16)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Weekdays include a short break from 1:00 to 1:30 PM. By appointment only \u2014 walk-ins cannot be guaranteed a chair.")))));
}

/* ------------------------------------------------------------ FINAL CTA */
function FinalCta() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--ink-1000)',
      borderTop: '1px solid var(--line-accent-soft)',
      padding: 'var(--section-pad-y) 0',
      overflow: 'hidden',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: window.SDgrain
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap2,
      position: 'relative',
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-32)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-badge.jpg",
    alt: "Shatoya Desree LLC monogram",
    width: "88",
    height: "88",
    style: {
      width: '88px',
      height: '88px',
      borderRadius: 'var(--radius-round)'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-section)',
      maxWidth: '16ch'
    }
  }, "Your chair is one tap away."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: '40ch'
    }
  }, "Real-time availability through Square. Prepay, pick your time, and the slot is yours."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: D2.booking,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Book Appointment")));
}

/* -------------------------------------------------------------- LIGHTBOX */
function Lightbox({
  index,
  onClose,
  onStep
}) {
  if (index == null) return null;
  const g = D2.gallery[index];
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": g.alt,
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--overlay-scrim)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-24)',
      animation: 'sdFade var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: '520px',
      width: '100%',
      boxShadow: 'var(--shadow-overlay)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g.src,
    alt: g.alt,
    style: {
      width: '100%',
      maxHeight: '72vh',
      objectFit: 'contain',
      background: 'var(--ink-1000)',
      borderRadius: 'var(--radius-xs)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-16)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-16)',
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, g.caption), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(-1),
    style: btn
  }, "Prev"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(1),
    style: btn
  }, "Next"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      ...btn,
      color: 'var(--brass-400)'
    }
  }, "Close")))));
}
const btn = {
  background: 'none',
  border: 0,
  color: 'var(--bone-300)',
  cursor: 'pointer',
  font: 'inherit',
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-label)',
  minHeight: 'var(--tap-min)',
  padding: 0
};
Object.assign(window, {
  Gallery,
  Testimonials,
  Policies,
  Visit,
  FinalCta,
  Lightbox
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections-2.page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.page.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.ShatoyaDesreeDesignSystem_8bbdd9 || {};
const {
  Button,
  SectionLabel,
  Badge,
  ServiceRow,
  ProcessStep
} = DS;
const D = window.SD;
const wrap = {
  maxWidth: 'var(--content-max)',
  margin: '0 auto',
  padding: '0 var(--gutter-mobile)'
};
const section = {
  padding: 'var(--section-pad-y) 0'
};
function Reveal({
  children,
  delay = 0,
  style,
  as: Tag = 'div'
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: .1,
      rootMargin: '0px 0px -8% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateY(var(--rise-distance))',
      transition: 'opacity var(--dur-reveal) var(--ease-out-soft) ' + delay + 'ms, transform var(--dur-reveal) var(--ease-out-soft) ' + delay + 'ms',
      ...style
    }
  }, children);
}
const grainStyle = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  opacity: 'var(--grain-opacity)',
  backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='g'><feTurbulence baseFrequency='0.85' numOctaves='3'/></filter><rect width='140' height='140' filter='url(%23g)'/></svg>\")"
};

/* ---------------------------------------------------------------- HERO */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      minHeight: '100svh',
      display: 'grid',
      gridTemplateColumns: 'var(--hero-cols, 1fr)',
      alignItems: 'stretch',
      background: 'var(--ink-1000)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sd-hero-photo",
    style: {
      position: 'relative',
      minHeight: '46svh',
      order: 'var(--hero-photo-order, 1)',
      background: 'var(--ink-1000)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.heroImage.src,
    alt: D.heroImage.alt,
    fetchpriority: "high",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '38% 42%',
      filter: 'saturate(.94) contrast(1.03)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--vignette)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: grainStyle
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'calc(var(--space-96) + 40px) var(--gutter-mobile) var(--space-64)',
      order: 'var(--hero-type-order, 2)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "accent"
  }, "Loctician & Barber \xB7 ", D.city), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-32)',
      font: 'var(--type-hero)',
      fontSize: 'clamp(3rem,8.5vw,6.5rem)',
      color: 'var(--bone-50)',
      maxWidth: '9ch'
    }
  }, "Shatoya", /*#__PURE__*/React.createElement("br", null), "Desree")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-32)',
      fontSize: 'var(--size-body-lg)',
      color: 'var(--bone-200)',
      maxWidth: '36ch'
    }
  }, "Retwists, starter locs, fades and beard work \u2014 in a private suite on Grayson Highway. One chair, one stylist, your full appointment."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-48)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-24)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: D.booking,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Book Appointment"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#gallery"
  }, "See the work")))));
}

/* ------------------------------------------------------------ TRUST STRIP */
function TrustStrip() {
  const items = [['Licensed', 'Georgia cosmetology'], ['Prepaid booking', 'Your time is held'], ['House calls', 'On request'], ['Locs & barbering', 'Both, by one hand']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--line-accent-soft)',
      borderBottom: '1px solid var(--line-accent-soft)',
      background: 'var(--ink-1000)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'var(--trust-cols, 1fr 1fr)',
      gap: '1px',
      background: 'var(--line-hairline)'
    }
  }, items.map(([t, s]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: 'var(--ink-1000)',
      padding: 'var(--space-32) var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--brass-500)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, s)))));
}

/* --------------------------------------------------------------- ABOUT */
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "sd-on-bone",
    style: {
      ...section,
      background: 'var(--surface-page)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gap: 'clamp(40px,6vw,96px)',
      gridTemplateColumns: 'var(--about-cols, 1fr)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.aboutImage.src,
    alt: D.aboutImage.alt,
    loading: "lazy",
    decoding: "async",
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      objectFit: 'cover',
      borderRadius: 'var(--radius-xs)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-12)',
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, "Loc styling \xB7 in the suite"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01",
    tone: "accent"
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-24)',
      font: 'var(--type-section)',
      color: 'var(--text-display)',
      maxWidth: '13ch'
    }
  }, "I take hair seriously."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-32)',
      display: 'grid',
      gap: 'var(--space-24)',
      maxWidth: 'var(--measure-narrow)'
    }
  }, /*#__PURE__*/React.createElement("p", null, "I am Toya. I started out cutting \u2014 fades, lineups, beards \u2014 and I never put the clippers down. Then locs found me, and they became the work I am known for. Today I do both, out of a suite I built so the room would feel like somewhere you can exhale."), /*#__PURE__*/React.createElement("p", null, "My clients stay because I protect their hair. I will tell you the truth about your locs. I will not rush your retwist to squeeze in another head, and I will not put you in a style your hair cannot hold. You get the full appointment you paid for."), /*#__PURE__*/React.createElement("p", null, "Come as you are. I will handle the rest.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-40)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "quiet"
  }, "Licensed in Georgia"), /*#__PURE__*/React.createElement(Badge, {
    tone: "quiet"
  }, "Locs \xB7 Cuts \xB7 Beards"), /*#__PURE__*/React.createElement(Badge, {
    tone: "quiet"
  }, "House calls available")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    href: D.booking,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Book Appointment")))));
}

/* ------------------------------------------------------------ SERVICES */
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: section
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "02"
  }, "Services & Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-24)',
      font: 'var(--type-section)',
      maxWidth: '16ch'
    }
  }, "The menu."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-24)',
      color: 'var(--text-muted)',
      maxWidth: '48ch'
    }
  }, "Prices include tax. Every line books directly. If you are not sure which length band you fall into, book the shorter one and I will tell you in the chair.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-80)',
      display: 'grid',
      gap: 'var(--space-80)'
    }
  }, D.menu.map((group, gi) => /*#__PURE__*/React.createElement(Reveal, {
    key: group.slug,
    delay: gi * 40
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-24)',
      gridTemplateColumns: 'var(--menu-cols, 1fr)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'var(--menu-sticky, static)',
      top: '112px'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "muted"
  }, group.category), /*#__PURE__*/React.createElement("a", {
    href: 'service.html#' + group.slug,
    style: {
      display: 'inline-block',
      marginTop: 'var(--space-16)',
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, "Read more")), /*#__PURE__*/React.createElement("div", null, group.items.map(it => /*#__PURE__*/React.createElement(ServiceRow, _extends({
    key: it.name
  }, it, {
    href: D.booking,
    target: "_blank",
    rel: "noreferrer noopener"
  })))))))), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: 'var(--space-64)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: D.booking,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Book Appointment"))));
}

/* --------------------------------------------------------- FIRST VISIT */
function FirstVisit() {
  return /*#__PURE__*/React.createElement("section", {
    id: "first-visit",
    style: {
      ...section,
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "03"
  }, "First Time Here"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-24)',
      font: 'var(--type-subsection)',
      maxWidth: '20ch'
    }
  }, "Nothing about booking should be a mystery.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    style: {
      marginTop: 'var(--space-48)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--steps-cols, 1fr)',
      gap: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement(ProcessStep, {
    index: "01",
    title: "Pick your service"
  }, "Book by what you need and, for retwists, by your length. Unsure? Choose the shorter band \u2014 I will tell you in the chair and adjust."), /*#__PURE__*/React.createElement(ProcessStep, {
    index: "02",
    title: "Pay when you book"
  }, "Booking is prepaid through Square, which is what holds your slot. Card, Apple Pay, Google Pay or Afterpay. Tax is already in the price."), /*#__PURE__*/React.createElement(ProcessStep, {
    index: "03",
    title: "Come to Suite 129"
  }, "Park out front, walk in the main doors, take the corridor to 129. Come alone unless you are bringing a child I am also servicing.")))));
}
Object.assign(window, {
  Reveal,
  Hero,
  TrustStrip,
  About,
  Services,
  FirstVisit,
  SDwrap: wrap,
  SDsection: section,
  SDgrain: grainStyle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/service-page.page.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  SectionLabel,
  Badge,
  ServiceRow,
  Testimonial,
  GalleryTile,
  AccordionItem,
  ContactLine,
  SiteHeader,
  SiteFooter,
  StickyBookBar,
  MobileNav
} = window.ShatoyaDesreeDesignSystem_8bbdd9 || {};
const D = window.SD;
const COPY = {
  'loc-maintenance': {
    h1: 'Loc retwist & maintenance in Lawrenceville',
    lede: 'Clean parts, protected roots, and a retwist that holds without tension. Booked by length, always with a shampoo and conditioner.',
    body: ['A retwist is the appointment most of my clients keep on repeat, so I treat it like maintenance and not decoration. I look at your scalp, I look at how the last set grew in, and I tell you what I see.', 'Short to shoulder runs an hour. Longer hair gets a longer window. If your locs need more time than the booked slot, I will say so before we go over — never after.'],
    seoTitle: 'Loc Retwist & Maintenance | Lawrenceville, GA | Shatoya Desree',
    seoDesc: 'Adult and kids loc retwists, interlocking and loc repair in Lawrenceville, GA. Shampoo and conditioning included. Book online with Shatoya Desree LLC.'
  },
  'starter-locs': {
    h1: 'Starter locs & instant locs in Lawrenceville',
    lede: 'Comb coils, kids starter sets, and a full instant loc install — the beginning of a loc journey done properly.',
    body: ['Instant locs are a full day in the chair, seven and a half hours, and worth every minute if you want to skip the awkward stage. Comb coils are the slower, traditional start.', 'We talk before we start. Hair density, length, how you plan to maintain it — the install is only as good as the plan behind it.'],
    seoTitle: 'Starter Locs & Instant Locs | Lawrenceville, GA | Shatoya Desree',
    seoDesc: 'Instant locs, comb coils and kids starter sets in Lawrenceville, GA. Consultation included. Book online with Shatoya Desree LLC.'
  },
  'loc-styling': {
    h1: 'Loc styling — platts and rod sets',
    lede: 'Styling that works with the locs you have, for an event or just because it is time for something different.',
    body: ['Rod sets start at $150 and price out by length, so we consult first. Platts are quicker and hold well through a work week.', 'Styling is booked on top of maintenance, not instead of it. If you need a retwist too, book both.'],
    seoTitle: 'Loc Styling, Platts & Rod Sets | Lawrenceville, GA | Shatoya Desree',
    seoDesc: 'Loc styling in Lawrenceville, GA — platts and rod sets by Shatoya Desree LLC. Consultation for length. Book online.'
  },
  'barbering': {
    h1: 'Haircuts, fades and beard work',
    lede: 'Shampoo, cut and a lineup that sits where it should. Beards shaped, not just shortened.',
    body: ['I cut before I loc, and I never stopped. Cuts come with a shampoo, because a fade looks different on clean hair and it should.', 'Beard work is its own service or added to a cut. Kids five to fifteen have their own booking.'],
    seoTitle: 'Barber, Fades & Beard Trims | Lawrenceville, GA | Shatoya Desree',
    seoDesc: 'Haircuts, fades, lineups and beard trims in Lawrenceville, GA. Shampoo included. Book online with Shatoya Desree LLC.'
  }
};
function ServicePage() {
  const [slug, setSlug] = React.useState(() => (location.hash || '#loc-maintenance').slice(1));
  const [y, setY] = React.useState(0);
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => {
    const h = () => setSlug((location.hash || '#loc-maintenance').slice(1));
    const s = () => setY(window.scrollY);
    window.addEventListener('hashchange', h);
    window.addEventListener('scroll', s, {
      passive: true
    });
    return () => {
      window.removeEventListener('hashchange', h);
      window.removeEventListener('scroll', s);
    };
  }, []);
  const group = D.menu.find(m => m.slug === slug) || D.menu[0];
  const copy = COPY[group.slug];
  React.useEffect(() => {
    document.title = copy.seoTitle;
    document.querySelector('meta[name=description]').setAttribute('content', copy.seoDesc);
  }, [copy]);
  const wrap = {
    maxWidth: 'var(--content-max)',
    margin: '0 auto',
    padding: '0 var(--gutter-mobile)'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sd-header"
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    logoSrc: "../../assets/logo-badge.jpg",
    brand: D.brand,
    scrolled: y > 40,
    bookingUrl: D.booking,
    links: D.menu.map(m => ({
      label: m.category,
      href: '#' + m.slug
    })),
    onMenu: () => setMenu(true)
  })), /*#__PURE__*/React.createElement(MobileNav, {
    open: menu,
    onClose: () => setMenu(false),
    bookingUrl: D.booking,
    links: [{
      label: 'Home',
      href: 'index.html'
    }].concat(D.menu.map(m => ({
      label: m.category,
      href: '#' + m.slug
    }))),
    phone: D.phone,
    phoneHref: D.phoneHref,
    instagram: D.instagram
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '160px 0 var(--section-pad-y-tight)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-32)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Home"), " \xA0/\xA0 ", /*#__PURE__*/React.createElement("span", null, group.category)), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-section)',
      maxWidth: '16ch'
    }
  }, copy.h1), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-32)',
      fontSize: 'var(--size-body-lg)',
      color: 'var(--bone-200)',
      maxWidth: '44ch'
    }
  }, copy.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-40)',
      display: 'flex',
      gap: 'var(--space-16)',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: D.booking
  }, "Book Appointment"), /*#__PURE__*/React.createElement(Badge, {
    tone: "quiet"
  }, D.city)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gap: 'clamp(40px,6vw,96px)',
      gridTemplateColumns: 'var(--svc-cols, 1fr)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01"
  }, "What to expect"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-32)',
      display: 'grid',
      gap: 'var(--space-24)',
      maxWidth: 'var(--measure-narrow)'
    }
  }, copy.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "02"
  }, "Prices"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-24)'
    }
  }, group.items.map(it => /*#__PURE__*/React.createElement(ServiceRow, _extends({
    key: it.name
  }, it, {
    href: D.booking
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: D.booking
  }, "Book Appointment"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y-tight) 0',
      background: 'var(--ink-1000)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "03"
  }, "Recent work"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-32)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
      gap: 'var(--space-12)'
    }
  }, D.gallery.slice(0, 4).map((g, i) => /*#__PURE__*/React.createElement(GalleryTile, _extends({
    key: i
  }, g, {
    ratio: "1 / 1"
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) 0',
      background: 'var(--oxblood-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Testimonial, D.testimonials[0]))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y-tight) 0',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "muted"
  }, "Other services"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-24)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-32)'
    }
  }, D.menu.filter(m => m.slug !== group.slug).map(m => /*#__PURE__*/React.createElement("a", {
    key: m.slug,
    href: '#' + m.slug,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.25rem,2.2vw,1.625rem)',
      borderBottom: '1px solid var(--line-accent-soft)',
      paddingBottom: '4px'
    }
  }, m.category))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-48)',
      display: 'grid',
      gap: 'var(--space-32)',
      gridTemplateColumns: 'var(--svc-cols, 1fr)'
    }
  }, /*#__PURE__*/React.createElement(ContactLine, {
    label: "Address \xB7 opens in Maps",
    value: D.address,
    href: D.mapsUrl,
    external: true
  }), /*#__PURE__*/React.createElement(ContactLine, {
    label: "Call or text",
    value: D.phone,
    href: D.phoneHref
  })))), /*#__PURE__*/React.createElement("section", {
    className: "sd-on-bone",
    style: {
      padding: 'var(--section-pad-y) 0',
      background: 'var(--surface-page)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      maxWidth: 'var(--content-max-narrow)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "04",
    tone: "accent"
  }, "Good to know"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-32)'
    }
  }, D.policies.slice(0, 4).map((p, i) => /*#__PURE__*/React.createElement(AccordionItem, {
    key: p.q,
    question: p.q,
    defaultOpen: i === 0
  }, /*#__PURE__*/React.createElement("p", null, p.a)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    href: D.booking
  }, "Book Appointment"))))), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: "../../assets/logo-badge.jpg",
    brand: D.legal,
    bookingUrl: D.booking,
    instagram: D.instagram,
    phone: D.phone,
    phoneHref: D.phoneHref,
    address: D.address
  }), /*#__PURE__*/React.createElement("div", {
    className: "sd-book-bar"
  }, /*#__PURE__*/React.createElement(StickyBookBar, {
    bookingUrl: D.booking,
    phone: D.phone,
    phoneHref: D.phoneHref
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ServicePage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/service-page.page.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AccordionItem = __ds_scope.AccordionItem;

__ds_ns.ContactLine = __ds_scope.ContactLine;

__ds_ns.GalleryTile = __ds_scope.GalleryTile;

__ds_ns.HoursTable = __ds_scope.HoursTable;

__ds_ns.ImagePlaceholder = __ds_scope.ImagePlaceholder;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ServiceRow = __ds_scope.ServiceRow;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.MobileNav = __ds_scope.MobileNav;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.StickyBookBar = __ds_scope.StickyBookBar;

})();
