/* @ds-bundle: {"format":4,"namespace":"MetaspacesDesignSystem_504b95","components":[{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"FloatingBadge","sourcePath":"components/content/FloatingBadge.jsx"},{"name":"ProcessStep","sourcePath":"components/content/ProcessStep.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Field.jsx"},{"name":"Textarea","sourcePath":"components/forms/Field.jsx"},{"name":"Select","sourcePath":"components/forms/Field.jsx"},{"name":"OptionCard","sourcePath":"components/forms/OptionCard.jsx"},{"name":"ProgressDots","sourcePath":"components/forms/ProgressDots.jsx"},{"name":"SearchSelect","sourcePath":"components/forms/SearchSelect.jsx"},{"name":"LOCALITIES","sourcePath":"data/localities.js"}],"sourceHashes":{"components/content/FaqItem.jsx":"0e0fa7427d65","components/content/FloatingBadge.jsx":"8b3310ca5a4b","components/content/ProcessStep.jsx":"13a312813286","components/content/SectionHeading.jsx":"5f240dbc42d8","components/content/ServiceCard.jsx":"e3a49dcc98ce","components/content/TestimonialCard.jsx":"c78d0b02377a","components/core/Button.jsx":"98de57171e64","components/core/Chip.jsx":"0efad14e5689","components/core/Icon.jsx":"62e35e3cda62","components/core/Pill.jsx":"be7f52120a33","components/core/Stat.jsx":"dc2c7aeb0dd2","components/forms/Field.jsx":"0a83bfdc3aec","components/forms/OptionCard.jsx":"8d31b262ecad","components/forms/ProgressDots.jsx":"6018d3ad41b5","components/forms/SearchSelect.jsx":"844287aeccc8","data/localities.js":"6910fc952539","ui_kits/ad-landing/ClosingCta.jsx":"288442142fd2","ui_kits/ad-landing/Footer.jsx":"524ce8160aec","ui_kits/ad-landing/Header.jsx":"1039ea93e53f","ui_kits/ad-landing/Hero.jsx":"325bfb9350fb","ui_kits/ad-landing/Process.jsx":"2f91d3b9dd31","ui_kits/ad-landing/RoomGrid.jsx":"b7b8a96563d6","ui_kits/ad-landing/StepForm.jsx":"27ca061eb8cb","ui_kits/ad-landing/TrustStrip.jsx":"cbb29dd484c8","ui_kits/website/Consult.jsx":"f4dc6f2ce4d8","ui_kits/website/HomeHero.jsx":"dd6b267da71f","ui_kits/website/Proof.jsx":"8eef19ad7e45","ui_kits/website/Reviews.jsx":"047abe7e84cf","ui_kits/website/Services.jsx":"a4d536bdcd05","ui_kits/website/SiteFooter.jsx":"1783347d3f47","ui_kits/website/SiteHeader.jsx":"827bd295d8ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MetaspacesDesignSystem_504b95 = window.MetaspacesDesignSystem_504b95 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/FaqItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FaqItem({
  question,
  answer,
  defaultOpen = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      padding: "20px 0",
      background: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-display)",
      fontSize: "17px",
      fontWeight: "var(--fw-bold)",
      color: open ? "var(--text-accent)" : "var(--text-heading)",
      transition: "color var(--dur-fast) var(--ease-out)"
    },
    "aria-expanded": open
  }, question, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      fontSize: "22px",
      fontWeight: 400,
      lineHeight: 1,
      color: "var(--text-accent)",
      transform: open ? "rotate(45deg)" : "none",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: open ? "1fr" : "0fr",
      transition: "grid-template-rows var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      paddingBottom: "22px",
      fontSize: "15px",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      maxWidth: "68ch"
    }
  }, answer))));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/FloatingBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FloatingBadge({
  icon,
  value,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 18px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,.94)",
      backdropFilter: "blur(10px)",
      boxShadow: "var(--shadow-float)",
      border: "1px solid rgba(255,255,255,.7)",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 34,
      height: 34,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-accent-soft)",
      color: "var(--terracotta-600)"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "16px",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--text-heading)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "var(--text-body)"
    }
  }, label)));
}
Object.assign(__ds_scope, { FloatingBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FloatingBadge.jsx", error: String((e && e.message) || e) }); }

// components/content/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProcessStep({
  number,
  title,
  description,
  icon,
  elevated = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: elevated ? "34px 28px 36px" : "28px 24px",
      borderRadius: "var(--radius-lg)",
      background: elevated ? "var(--surface-accent)" : "var(--surface-card)",
      color: elevated ? "var(--text-invert)" : "inherit",
      border: "1px solid " + (elevated ? "var(--surface-accent)" : "var(--border-soft)"),
      boxShadow: elevated ? "var(--shadow-accent)" : "var(--shadow-sm)",
      transform: elevated ? "translateY(-16px)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-extrabold)",
      fontSize: "15px",
      background: elevated ? "rgba(255,255,255,.18)" : "var(--surface-accent-soft)",
      color: elevated ? "#fff" : "var(--terracotta-600)"
    }
  }, icon || number), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h4)",
      color: elevated ? "#fff" : "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      lineHeight: 1.6,
      color: elevated ? "rgba(255,255,255,.88)" : "var(--text-body)"
    }
  }, description));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  maxWidth = 620,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      maxWidth,
      ...(align === "center" ? {
        marginInline: "auto"
      } : null),
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-eyebrow)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      margin: 0
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lede)",
      lineHeight: "var(--lh-lede)",
      color: "var(--text-body)"
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceCard({
  image,
  alt = "",
  title,
  description,
  badge,
  href,
  linkLabel,
  ratio = "4 / 3",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-soft)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
      transform: hover ? "var(--lift-hover)" : "none",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      background: "var(--surface-inset)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(1.04)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  }), badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      bottom: 14
    }
  }, badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px 22px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, description), linkLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "6px",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-accent)"
    }
  }, linkLabel, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover ? "translateX(4px)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out)"
    }
  }, "\u2192")) : null));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TestimonialCard({
  quote,
  name,
  meta,
  rating = 5,
  initial,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "28px 26px",
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-soft)",
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--star)",
      fontSize: "15px",
      letterSpacing: "2px"
    }
  }, "★".repeat(rating)), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-quote)",
      fontSize: "17px",
      lineHeight: 1.6,
      color: "var(--text-strong)"
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-inset)",
      color: "var(--text-heading)",
      fontWeight: "var(--fw-bold)"
    }
  }, initial || (typeof name === "string" ? name.charAt(0) : "")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "15px",
      color: "var(--text-heading)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--text-body)"
    }
  }, meta))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--fw-bold)",
  letterSpacing: "-0.01em",
  borderRadius: "var(--radius-pill)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
};
const sizes = {
  sm: {
    fontSize: "14px",
    padding: "9px 18px"
  },
  md: {
    fontSize: "15px",
    padding: "13px 26px"
  },
  lg: {
    fontSize: "16px",
    padding: "17px 34px"
  }
};
const variants = {
  primary: {
    background: "var(--surface-accent)",
    color: "var(--text-invert)",
    boxShadow: "var(--shadow-accent)"
  },
  ink: {
    background: "var(--surface-ink)",
    color: "var(--text-invert)",
    boxShadow: "var(--shadow-sm)"
  },
  secondary: {
    background: "var(--surface-card)",
    color: "var(--text-heading)",
    borderColor: "var(--border-hairline)",
    boxShadow: "var(--shadow-xs)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-heading)",
    borderColor: "transparent"
  },
  onPhoto: {
    background: "rgba(255,255,255,.92)",
    color: "var(--text-heading)",
    boxShadow: "var(--shadow-float)",
    backdropFilter: "blur(8px)"
  }
};
const hovers = {
  primary: {
    background: "var(--terracotta-700)"
  },
  ink: {
    background: "var(--ink-700)"
  },
  secondary: {
    borderColor: "var(--ink-300)",
    background: "var(--paper-050)"
  },
  ghost: {
    background: "var(--surface-accent-soft)",
    color: "var(--text-accent)"
  },
  onPhoto: {
    background: "#fff"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? "a" : "button";
  const css = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(hover && !disabled ? {
      transform: "var(--lift-hover)"
    } : null),
    ...(press && !disabled ? {
      transform: "var(--press-scale)"
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      opacity: 0.45,
      cursor: "not-allowed",
      boxShadow: "none",
      transform: "none"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href && disabled ? true : undefined,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  children,
  href,
  selected = false,
  icon,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "9px 16px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      fontWeight: "var(--fw-semibold)",
      cursor: "pointer",
      textDecoration: "none",
      background: selected ? "var(--surface-accent)" : "var(--surface-card)",
      color: selected ? "var(--text-invert)" : hover ? "var(--text-accent)" : "var(--text-strong)",
      border: "1px solid " + (selected ? "var(--surface-accent)" : hover ? "var(--terracotta-100)" : "var(--border-hairline)"),
      boxShadow: selected ? "var(--shadow-accent)" : "var(--shadow-xs)",
      transition: "all var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
const SIZES = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28
};
function Icon({
  name,
  size = "md",
  color = "currentColor",
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const px = typeof size === "number" ? size : SIZES[size] || 20;
  useEffect(() => {
    if (window.lucide && ref.current) window.lucide.createIcons({
      nameAttr: "data-lucide",
      attrs: {},
      icons: undefined
    });
  }, [name, px, strokeWidth]);
  return /*#__PURE__*/React.createElement("i", _extends({
    ref: ref,
    "data-lucide": name,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: px,
      height: px,
      color,
      strokeWidth,
      flex: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  accent: {
    background: "var(--surface-accent-soft)",
    color: "var(--terracotta-700)",
    border: "1px solid var(--terracotta-100)"
  },
  gold: {
    background: "var(--surface-gold-soft)",
    color: "#7A5E2C",
    border: "1px solid #E6D6B8"
  },
  olive: {
    background: "var(--surface-success-soft)",
    color: "#4C563B",
    border: "1px solid #D3DBC8"
  },
  ink: {
    background: "var(--surface-ink)",
    color: "var(--text-invert)",
    border: "1px solid var(--ink-900)"
  },
  paper: {
    background: "var(--surface-card)",
    color: "var(--text-heading)",
    border: "1px solid var(--border-hairline)"
  }
};
function Pill({
  children,
  tone = "accent",
  icon,
  uppercase = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      padding: uppercase ? "6px 14px" : "7px 15px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: uppercase ? "var(--fs-eyebrow)" : "13px",
      fontWeight: uppercase ? "var(--fw-bold)" : "var(--fw-semibold)",
      letterSpacing: uppercase ? "var(--ls-eyebrow)" : "0",
      textTransform: uppercase ? "uppercase" : "none",
      lineHeight: 1.2,
      ...tones[tone],
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  icon,
  align = "left",
  accent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      gap: "6px",
      textAlign: align,
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-accent-soft)",
      color: "var(--terracotta-600)",
      marginBottom: "4px"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-stat)",
      fontWeight: "var(--fw-extrabold)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-heading)",
      color: accent ? "var(--text-accent)" : "var(--text-heading)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-small)",
      lineHeight: 1.45,
      color: "var(--text-body)",
      maxWidth: "20ch"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  required = false,
  hint,
  error,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-heading)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "var(--red-600)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "var(--ink-300)"
    }
  }, hint) : null);
}
const control = {
  width: "100%",
  fontFamily: "var(--font-sans)",
  fontSize: "15px",
  color: "var(--text-heading)",
  padding: "14px 16px",
  borderRadius: "var(--radius-md)",
  background: "var(--surface-card)",
  border: "1px solid var(--border-hairline)",
  outline: "none",
  transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
};
function Input({
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...control,
      borderColor: invalid ? "var(--red-600)" : focus ? "var(--border-accent)" : "var(--border-hairline)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      ...style
    }
  }, rest));
}
function Textarea({
  invalid = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...control,
      resize: "vertical",
      lineHeight: 1.6,
      borderColor: invalid ? "var(--red-600)" : focus ? "var(--border-accent)" : "var(--border-hairline)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      ...style
    }
  }, rest));
}
function Select({
  options = [],
  placeholder,
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...control,
      appearance: "none",
      paddingRight: "44px",
      cursor: "pointer",
      borderColor: invalid ? "var(--red-600)" : focus ? "var(--border-accent)" : "var(--border-hairline)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      ...style
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--ink-300)",
      fontSize: "12px"
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Field, Input, Textarea, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/OptionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function OptionCard({
  icon,
  label,
  sublabel,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-pressed": selected,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "10px",
      padding: "20px 18px",
      minHeight: 108,
      cursor: "pointer",
      textAlign: "left",
      borderRadius: "var(--radius-md)",
      background: selected ? "var(--surface-accent-soft)" : "var(--surface-card)",
      border: "1.5px solid " + (selected ? "var(--border-accent)" : hover ? "var(--ink-200)" : "var(--border-soft)"),
      boxShadow: selected ? "var(--shadow-card)" : hover ? "var(--shadow-sm)" : "var(--shadow-xs)",
      transform: hover && !selected ? "translateY(-2px)" : "none",
      transition: "all var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 38,
      height: 38,
      borderRadius: "var(--radius-pill)",
      background: selected ? "var(--surface-accent)" : "var(--surface-inset)",
      color: selected ? "#fff" : "var(--terracotta-600)",
      transition: "all var(--dur-fast) var(--ease-out)"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "15px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-heading)",
      lineHeight: 1.3
    }
  }, label), sublabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--text-body)",
      lineHeight: 1.4
    }
  }, sublabel) : null);
}
Object.assign(__ds_scope, { OptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OptionCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/ProgressDots.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressDots({
  total,
  current = 0,
  onStepClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "progressbar",
    "aria-valuemin": 1,
    "aria-valuemax": total,
    "aria-valuenow": current + 1,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      ...style
    }
  }, rest), Array.from({
    length: total
  }).map((_, i) => {
    const done = i < current,
      active = i === current;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      onClick: onStepClick && i <= current ? () => onStepClick(i) : undefined,
      style: {
        height: 6,
        width: active ? 30 : 6,
        borderRadius: "var(--radius-pill)",
        background: active ? "var(--surface-accent)" : done ? "var(--terracotta-500)" : "var(--ink-200)",
        cursor: onStepClick && i <= current ? "pointer" : "default",
        transition: "width var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"
      }
    });
  }));
}
Object.assign(__ds_scope, { ProgressDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ProgressDots.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchSelect.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchSelect({
  options = [],
  value,
  onChange,
  placeholder = "Search…",
  emptyLabel = "No matches",
  style,
  ...rest
}) {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const list = options.filter(o => o.toLowerCase().includes(query.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    value: open ? query : value || "",
    placeholder: value || placeholder,
    onChange: e => {
      setQuery(e.target.value);
      setOpen(true);
    },
    onFocus: () => {
      setOpen(true);
      setFocus(true);
      setQuery("");
    },
    onBlur: () => {
      setFocus(false);
      setTimeout(() => setOpen(false), 130);
    },
    style: {
      width: "100%",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "var(--text-heading)",
      padding: "14px 16px",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)",
      border: "1px solid " + (focus ? "var(--border-accent)" : "var(--border-hairline)"),
      boxShadow: focus ? "var(--ring-focus)" : "none",
      outline: "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    }
  }), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      zIndex: 20,
      top: "calc(100% + 6px)",
      left: 0,
      right: 0,
      maxHeight: 220,
      overflowY: "auto",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-card-hover)",
      padding: "6px"
    }
  }, list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      fontSize: "14px",
      color: "var(--ink-300)"
    }
  }, emptyLabel) : list.map(o => /*#__PURE__*/React.createElement("div", {
    key: o,
    onMouseDown: () => {
      onChange && onChange(o);
      setOpen(false);
    },
    style: {
      padding: "10px 14px",
      borderRadius: "var(--radius-sm)",
      fontSize: "14px",
      cursor: "pointer",
      color: o === value ? "var(--text-accent)" : "var(--text-strong)",
      fontWeight: o === value ? "var(--fw-bold)" : "var(--fw-medium)",
      background: o === value ? "var(--surface-accent-soft)" : "transparent"
    },
    onMouseEnter: e => {
      if (o !== value) e.currentTarget.style.background = "var(--surface-inset)";
    },
    onMouseLeave: e => {
      if (o !== value) e.currentTarget.style.background = "transparent";
    }
  }, o))) : null);
}
Object.assign(__ds_scope, { SearchSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchSelect.jsx", error: String((e && e.message) || e) }); }

// data/localities.js
try { (() => {
const LOCALITIES = ["KR Puram", "Whitefield", "Hennur", "Sarjapur Road", "Marathahalli", "Electronic City", "HSR Layout", "JP Nagar", "Indiranagar", "Koramangala", "Yelahanka", "Hebbal", "Kalyan Nagar", "Horamavu", "TC Palya", "Margondanahalli", "Bellandur", "Manyata Tech Park", "Devanahalli", "Banaswadi", "Ramamurthy Nagar", "CV Raman Nagar", "Kadugodi", "Varthur", "Brookefield", "Kundalahalli", "Mahadevapura", "Hoodi", "Bommanahalli", "BTM Layout", "Jayanagar", "Banashankari", "Rajajinagar", "Malleshwaram", "Basavanagudi", "RT Nagar", "Frazer Town", "Cooke Town", "Kammanahalli", "Thanisandra", "Jakkur", "Nagawara", "Hosa Road", "Bannerghatta Road", "Other Bangalore"];
Object.assign(__ds_scope, { LOCALITIES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "data/localities.js", error: String((e && e.message) || e) }); }

// ui_kits/ad-landing/ClosingCta.jsx
try { (() => {
const {
  Icon
} = window.MetaspacesDesignSystem_504b95;
const PROOF = [{
  t: "Free design consultation",
  d: "Talk to a real designer, not a call center."
}, {
  t: "Transparent estimate",
  d: "Itemized pricing with no hidden costs."
}, {
  t: "End-to-end delivery",
  d: "Design, production and installation by one team."
}];
function ClosingCta() {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,520px)",
      gap: "clamp(28px,4vw,56px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/cta.jpg",
    alt: "Finished Metaspaces home",
    style: {
      width: "100%",
      aspectRatio: "4 / 3",
      objectFit: "cover",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-card)"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-eyebrow)",
      fontWeight: 700,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, "Free consultation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "12px"
    }
  }, "Let's design a home you'll love"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "14px",
      marginTop: "22px"
    }
  }, PROOF.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 26,
      height: 26,
      borderRadius: "999px",
      background: "var(--surface-success-soft)",
      color: "var(--olive-600)",
      flex: "none",
      marginTop: "2px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: "15px",
      color: "var(--text-heading)"
    }
  }, p.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, p.d))))))), /*#__PURE__*/React.createElement(StepForm, null))));
}
Object.assign(window, {
  ClosingCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ad-landing/ClosingCta.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ad-landing/Footer.jsx
try { (() => {
function Footer() {
  const cols = [{
    h: "Services",
    items: ["Modular Kitchen", "Wardrobes & Storage", "Living Room Interiors", "Bedroom Interiors", "Full Home Interiors"]
  }, {
    h: "Company",
    items: ["About Metaspaces", "Projects / Gallery", "Testimonials", "Bangalore Locations", "FAQ"]
  }, {
    h: "Contact",
    items: ["+91 86180 08947", "crm@metaspaces.in", "Mon–Sun · 10:00 AM – 7:00 PM"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-ink)",
      color: "rgba(255,255,255,.72)",
      paddingBlock: "64px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3,1fr)",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "22px",
      letterSpacing: "-.035em",
      color: "#fff"
    }
  }, "Metaspaces"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      lineHeight: 1.7,
      maxWidth: "38ch"
    }
  }, "Premium home interior designers in Bangalore. A Seasun Group company offering modular kitchens, wardrobes and complete home interiors with factory-backed furniture support.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "13px",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "#fff"
    }
  }, c.h), c.items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: "14px"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: "44px",
      paddingTop: "22px",
      borderTop: "1px solid rgba(255,255,255,.12)",
      fontSize: "13px"
    }
  }, "\xA9 2026 Metaspaces \xB7 A Seasun Group company. Home Interior Designers in Bangalore."));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ad-landing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ad-landing/Header.jsx
try { (() => {
const {
  Button,
  Icon
} = window.MetaspacesDesignSystem_504b95;
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(250,248,245,.86)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
      height: "76px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "22px",
      letterSpacing: "-.035em",
      color: "var(--ink-900)"
    }
  }, "Metaspaces"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+918618008947",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "15px",
      fontWeight: 700,
      color: "var(--text-heading)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: "sm",
    color: "var(--terracotta-600)"
  }), "86180 08947"), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "sm",
    onClick: () => window.scrollToLead && window.scrollToLead()
  }, "Book Free Consultation"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ad-landing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ad-landing/Hero.jsx
try { (() => {
const {
  Button,
  Pill,
  FloatingBadge,
  Icon
} = window.MetaspacesDesignSystem_504b95;
function scrollToLead() {
  const el = document.getElementById("lead");
  if (!el) return;
  const from = window.scrollY;
  const to = Math.max(0, from + el.getBoundingClientRect().top - 90);
  const dur = 520,
    t0 = performance.now();
  const ease = t => 1 - Math.pow(1 - t, 3);
  const tick = now => {
    const p = Math.min(1, (now - t0) / dur);
    window.scrollTo(0, from + (to - from) * ease(p));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
window.scrollToLead = scrollToLead;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: "clamp(48px,6vw,88px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.05fr)",
      gap: "clamp(32px,5vw,72px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "accent",
    uppercase: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: "sm"
    }),
    style: {
      whiteSpace: "nowrap"
    }
  }, "Premium Home Interiors"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-hero)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-hero)"
    }
  }, "Designing Beautiful Homes You'll Love to Live In"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lede)",
      lineHeight: "var(--lh-lede)",
      color: "var(--text-body)",
      maxWidth: "46ch"
    }
  }, "Modular kitchens, wardrobes and complete home interiors across Bangalore \u2014 designed, costed and executed by one accountable team."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: "sm"
    }),
    onClick: scrollToLead
  }, "Get My Free Estimate"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    href: "https://wa.me/918618008947",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: "sm"
    })
  }, "WhatsApp Us")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      color: "var(--ink-300)"
    }
  }, "Free consultation \xB7 Itemized quote \xB7 No obligation")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/hero.jpg",
    alt: "Finished Metaspaces home interior in Bangalore",
    style: {
      width: "100%",
      aspectRatio: "5 / 4",
      objectFit: "cover",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-card-hover)"
    }
  }), /*#__PURE__*/React.createElement(FloatingBadge, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "home"
    }),
    value: "500+",
    label: "Projects delivered",
    style: {
      position: "absolute",
      left: "-28px",
      top: "32px"
    }
  }), /*#__PURE__*/React.createElement(FloatingBadge, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "star"
    }),
    value: "4.8",
    label: "Google rating",
    style: {
      position: "absolute",
      right: "-20px",
      bottom: "34px"
    }
  }))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ad-landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ad-landing/Process.jsx
try { (() => {
const {
  ProcessStep,
  SectionHeading,
  Icon
} = window.MetaspacesDesignSystem_504b95;
const STEPS = [{
  n: "1",
  icon: "messages-square",
  title: "Consultation",
  desc: "We understand your home, lifestyle, timeline and budget — free of charge."
}, {
  n: "2",
  icon: "ruler",
  title: "Design & Quote",
  desc: "3D designs, material options and a transparent, itemized estimate."
}, {
  n: "3",
  icon: "factory",
  title: "Production",
  desc: "Factory-backed manufacturing and quality checks at every stage."
}, {
  n: "4",
  icon: "hard-hat",
  title: "Installation",
  desc: "On-site execution, finishing and a clean, on-time handover."
}];
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inset)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "How it works",
    title: "A simple, transparent process",
    lede: "Four clear stages from first conversation to handing over the keys to your finished home.",
    style: {
      marginBottom: "52px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "20px",
      alignItems: "start"
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement(ProcessStep, {
    key: s.n,
    number: s.n,
    title: s.title,
    description: s.desc,
    elevated: s.n === "2",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: "sm",
      color: s.n === "2" ? "#fff" : "var(--terracotta-600)"
    })
  })))));
}
Object.assign(window, {
  Process
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ad-landing/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ad-landing/RoomGrid.jsx
try { (() => {
const {
  ServiceCard,
  SectionHeading,
  Pill,
  Button,
  Icon
} = window.MetaspacesDesignSystem_504b95;
const ROOMS = [{
  img: "kitchen",
  title: "Modular Kitchen",
  desc: "L, U, parallel and island layouts with moisture-resistant ply.",
  price: "Starting ₹1.6L"
}, {
  img: "wardrobe",
  title: "Wardrobes & Storage",
  desc: "Sliding, hinged and walk-in storage tailored to your room.",
  price: "Starting ₹65K"
}, {
  img: "living",
  title: "Living Room",
  desc: "TV units, false ceilings, accent walls and layered lighting.",
  price: "Starting ₹90K"
}, {
  img: "bedroom",
  title: "Bedroom Interiors",
  desc: "Restful bedrooms with wardrobes, study units and lighting.",
  price: "Starting ₹85K"
}, {
  img: "home",
  title: "Full Home Interiors",
  desc: "End-to-end interiors for 2BHK, 3BHK, apartments and villas.",
  price: "Starting ₹3.99L"
}, {
  img: "ceiling",
  title: "Ceiling & Lighting",
  desc: "False ceilings, pooja units, partitions and finishing touches.",
  price: "Starting ₹40K"
}];
function RoomGrid() {
  const [page, setPage] = React.useState(0);
  const shown = ROOMS.slice(page * 3, page * 3 + 3);
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "24px",
      marginBottom: "36px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Room by room",
    title: "Explore by room",
    lede: "Every space planned for how you actually live \u2014 with a transparent starting price."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    disabled: page === 0,
    onClick: () => setPage(0),
    style: {
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    disabled: page === 1,
    onClick: () => setPage(1),
    style: {
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: "sm"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--grid-gap)"
    }
  }, shown.map(r => /*#__PURE__*/React.createElement(ServiceCard, {
    key: r.title,
    image: "../../assets/img/" + r.img + ".jpg",
    alt: r.title,
    title: r.title,
    description: r.desc,
    linkLabel: "See designs",
    href: "#lead",
    onClick: e => {
      e.preventDefault();
      window.scrollToLead && window.scrollToLead();
    },
    badge: /*#__PURE__*/React.createElement(Pill, {
      tone: "paper"
    }, r.price)
  })))));
}
Object.assign(window, {
  RoomGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ad-landing/RoomGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ad-landing/StepForm.jsx
try { (() => {
const {
  OptionCard,
  ProgressDots,
  SearchSelect,
  Field,
  Input,
  Button,
  Pill,
  Icon
} = window.MetaspacesDesignSystem_504b95;
const LOCALITIES = ["KR Puram", "Whitefield", "Hennur", "Sarjapur Road", "Marathahalli", "Electronic City", "HSR Layout", "JP Nagar", "Indiranagar", "Koramangala", "Yelahanka", "Hebbal", "Kalyan Nagar", "Horamavu", "Bellandur", "Mahadevapura", "Hoodi", "BTM Layout", "Jayanagar", "Banashankari", "Thanisandra", "Bannerghatta Road", "Other Bangalore"];
const SERVICES = [{
  v: "Full Home Interiors",
  icon: "house",
  sub: "Most popular"
}, {
  v: "Modular Kitchen",
  icon: "chef-hat"
}, {
  v: "Wardrobes",
  icon: "door-open"
}, {
  v: "Living Room",
  icon: "sofa"
}, {
  v: "Bedroom",
  icon: "bed-double"
}, {
  v: "Something else",
  icon: "ellipsis"
}];
const PROPERTIES = ["1BHK", "2BHK", "3BHK", "4BHK+", "Villa", "Apartment"];
const TIMELINES = [{
  v: "Immediately",
  icon: "zap",
  sub: "Ready to start"
}, {
  v: "1–3 months",
  icon: "calendar-days"
}, {
  v: "3–6 months",
  icon: "calendar-clock"
}, {
  v: "Just exploring",
  icon: "search"
}];
function StepHeader({
  step,
  total,
  title,
  sub,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      marginBottom: "22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(ProgressDots, {
    total: total,
    current: step
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 700,
      color: "var(--text-body)"
    }
  }, "Step ", step + 1, " of ", total), step > 0 ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      marginLeft: "auto",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: 700,
      color: "var(--text-body)",
      display: "inline-flex",
      alignItems: "center",
      gap: "5px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: "sm"
  }), "Back") : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "22px"
    }
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--text-body)",
      marginTop: "4px"
    }
  }, sub) : null));
}
function StepForm() {
  const TOTAL = 5;
  const [step, setStep] = React.useState(0);
  const [a, setA] = React.useState({
    service: "",
    property: "",
    locality: "",
    timeline: "",
    name: "",
    phone: "",
    email: ""
  });
  const [done, setDone] = React.useState(false);
  const set = (k, v) => setA(p => ({
    ...p,
    [k]: v
  }));
  const pick = (k, v) => {
    set(k, v);
    setTimeout(() => setStep(s => Math.min(s + 1, TOTAL - 1)), 180);
  };
  const grid = cols => ({
    display: "grid",
    gridTemplateColumns: "repeat(" + cols + ",minmax(0,1fr))",
    gap: "12px"
  });
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--border-soft)",
        boxShadow: "var(--shadow-card)",
        padding: "44px 34px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
        borderRadius: "999px",
        background: "var(--surface-success-soft)",
        color: "var(--olive-600)",
        marginBottom: "18px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: "xl"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "22px",
        marginBottom: "10px"
      }
    }, "Thank you, ", a.name || "there", "!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "15px",
        color: "var(--text-body)",
        maxWidth: "40ch",
        margin: "0 auto 22px"
      }
    }, "Your request is ready \u2014 we've opened WhatsApp so you can send it instantly. Our design expert will reach out within one business day."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "message-circle",
        size: "sm"
      })
    }, "Open WhatsApp"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "20px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setDone(false);
        setStep(0);
      },
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: 700,
        color: "var(--text-body)"
      }
    }, "Start over")));
  }
  return /*#__PURE__*/React.createElement("div", {
    id: "lead",
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--border-soft)",
      boxShadow: "var(--shadow-card)",
      padding: "30px 30px 32px"
    }
  }, step === 0 && /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: "s0"
  }, /*#__PURE__*/React.createElement(StepHeader, {
    step: 0,
    total: TOTAL,
    title: "What do you need?",
    sub: "Pick the closest fit \u2014 you can add detail later."
  }), /*#__PURE__*/React.createElement("div", {
    style: grid(3)
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(OptionCard, {
    key: s.v,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon
    }),
    label: s.v,
    sublabel: s.sub,
    selected: a.service === s.v,
    onClick: () => pick("service", s.v)
  })))), step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: "s1"
  }, /*#__PURE__*/React.createElement(StepHeader, {
    step: 1,
    total: TOTAL,
    title: "What kind of home?",
    onBack: () => setStep(0)
  }), /*#__PURE__*/React.createElement("div", {
    style: grid(3)
  }, PROPERTIES.map(p => /*#__PURE__*/React.createElement(OptionCard, {
    key: p,
    label: p,
    selected: a.property === p,
    onClick: () => pick("property", p),
    style: {
      minHeight: "78px",
      justifyContent: "center"
    }
  })))), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: "s2"
  }, /*#__PURE__*/React.createElement(StepHeader, {
    step: 2,
    total: TOTAL,
    title: "Where in Bangalore?",
    sub: "We serve 20+ localities city-wide.",
    onBack: () => setStep(1)
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Locality",
    required: true
  }, /*#__PURE__*/React.createElement(SearchSelect, {
    options: LOCALITIES,
    value: a.locality,
    onChange: v => set("locality", v),
    placeholder: "Search your locality"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    disabled: !a.locality,
    onClick: () => setStep(3),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: "sm"
    })
  }, "Continue"))), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: "s3"
  }, /*#__PURE__*/React.createElement(StepHeader, {
    step: 3,
    total: TOTAL,
    title: "When would you like to start?",
    onBack: () => setStep(2)
  }), /*#__PURE__*/React.createElement("div", {
    style: grid(2)
  }, TIMELINES.map(t => /*#__PURE__*/React.createElement(OptionCard, {
    key: t.v,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: t.icon
    }),
    label: t.v,
    sublabel: t.sub,
    selected: a.timeline === t.v,
    onClick: () => pick("timeline", t.v)
  })))), step === 4 && /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: "s4"
  }, /*#__PURE__*/React.createElement(StepHeader, {
    step: 4,
    total: TOTAL,
    title: "Where should we send your estimate?",
    onBack: () => setStep(3)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: a.name,
    onChange: e => set("name", e.target.value),
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    required: true,
    hint: "We'll WhatsApp your itemized quote here."
  }, /*#__PURE__*/React.createElement(Input, {
    type: "tel",
    value: a.phone,
    onChange: e => set("phone", e.target.value),
    placeholder: "98XXXXXXXX"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    value: a.email,
    onChange: e => set("email", e.target.value),
    placeholder: "you@example.com"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      margin: "18px 0"
    }
  }, [a.service, a.property, a.locality, a.timeline].filter(Boolean).map(t => /*#__PURE__*/React.createElement(Pill, {
    key: t,
    tone: "paper"
  }, t))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !a.name || a.phone.length < 6,
    onClick: () => setDone(true),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: "sm"
    })
  }, "Get My Free Estimate"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      color: "var(--ink-300)",
      marginTop: "12px",
      textAlign: "center"
    }
  }, "By submitting, you agree to be contacted by Metaspaces. We respect your privacy.")));
}
Object.assign(window, {
  StepForm,
  StepHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ad-landing/StepForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ad-landing/TrustStrip.jsx
try { (() => {
const {
  Stat,
  Icon
} = window.MetaspacesDesignSystem_504b95;
const ITEMS = [{
  value: "500+",
  label: "Projects completed",
  icon: "home"
}, {
  value: "6–10",
  label: "Weeks average delivery",
  icon: "calendar-clock"
}, {
  value: "100%",
  label: "Transparent, itemized quotes",
  icon: "receipt-indian-rupee"
}, {
  value: "20+",
  label: "Bangalore localities served",
  icon: "map-pin"
}];
function TrustStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: "0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "24px",
      padding: "32px clamp(20px,3vw,40px)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)"
    }
  }, ITEMS.map(i => /*#__PURE__*/React.createElement(Stat, {
    key: i.label,
    value: i.value,
    label: i.label,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: i.icon
    })
  })))));
}
Object.assign(window, {
  TrustStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ad-landing/TrustStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Consult.jsx
try { (() => {
const {
  SectionHeading,
  Chip,
  Field,
  Input,
  Select,
  Textarea,
  Button,
  Icon
} = window.MetaspacesDesignSystem_504b95;
const AREAS = ["KR Puram", "Whitefield", "Hennur", "Sarjapur Road", "Marathahalli", "Electronic City", "HSR Layout", "JP Nagar", "Indiranagar", "Koramangala", "Hebbal", "Bellandur"];
const PROOF = [["Free design consultation", "Talk to a real designer, not a call center"], ["Transparent estimate", "Itemized pricing with no hidden costs"], ["End-to-end delivery", "Design, production and installation by one team"]];
function Consult() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: "0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Across the city",
    title: "Interior designers serving all of Bangalore",
    lede: "Metaspaces designs and delivers home interiors across East Bangalore and beyond.",
    style: {
      marginBottom: "32px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center"
    }
  }, AREAS.map(a => /*#__PURE__*/React.createElement(Chip, {
    key: a,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: "sm"
    })
  }, a))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "24px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: "14px",
      fontWeight: 700
    }
  }, "See all 20+ locations \u2192")))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,520px)",
      gap: "clamp(32px,5vw,64px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Free consultation",
    title: "Let's design a home you'll love",
    lede: "Tell us a little about your home. Our design expert will reach out with ideas, space planning and a transparent estimate \u2014 no obligation."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "14px"
    }
  }, PROOF.map(p => /*#__PURE__*/React.createElement("div", {
    key: p[0],
    style: {
      display: "flex",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 26,
      height: 26,
      borderRadius: 999,
      background: "var(--surface-success-soft)",
      color: "var(--olive-600)",
      flex: "none",
      marginTop: "2px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: "15px",
      color: "var(--text-heading)"
    }
  }, p[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, p[1]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: "sm"
    })
  }, "Call 86180 08947"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: "sm"
    })
  }, "WhatsApp us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-card)",
      padding: "30px"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "30px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      borderRadius: 999,
      background: "var(--surface-success-soft)",
      color: "var(--olive-600)",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: "xl"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "20px",
      marginBottom: "8px"
    }
  }, "Thank you!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--text-body)",
      maxWidth: "36ch",
      margin: "0 auto"
    }
  }, "Your request is ready \u2014 we've opened WhatsApp so you can send it instantly. Our team will reach out shortly.")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "20px"
    }
  }, "Book your free consultation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--text-body)",
      margin: "6px 0 22px"
    }
  }, "We'll respond within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    type: "tel",
    placeholder: "98XXXXXXXX"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "you@example.com"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Location",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Select area",
    options: AREAS
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Property",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Select type",
    options: ["1BHK", "2BHK", "3BHK", "4BHK+", "Villa", "Apartment"]
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "What do you need?"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Select service",
    options: ["Full Home Interiors", "Modular Kitchen", "Wardrobes", "Living Room", "Bedroom", "Other"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "Tell us about your home"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Book Free Consultation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      color: "var(--ink-300)",
      textAlign: "center"
    }
  }, "By submitting, you agree to be contacted by Metaspaces. We respect your privacy.")))))));
}
Object.assign(window, {
  Consult
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Consult.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeHero.jsx
try { (() => {
const {
  Button,
  Pill,
  Stat,
  Icon
} = window.MetaspacesDesignSystem_504b95;
const SLIDES = [{
  eyebrow: "★ Premium Home Interiors",
  title: "Designing Beautiful Homes You'll Love to Live In",
  a: "Book Free Consultation",
  b: "View Our Work",
  img: "hero"
}, {
  eyebrow: "Designed around your lifestyle",
  title: "Premium Home Interiors, Tailored to You",
  a: "Talk to a Design Expert",
  b: "Explore Services",
  img: "living"
}, {
  eyebrow: "End-to-end execution",
  title: "From Space Planning to Complete Execution",
  a: "Full Home Interiors",
  b: "See Our Process",
  img: "home"
}, {
  eyebrow: "Limited-period offer",
  title: "Full Home Interiors Starting ₹3.99 Lakh*",
  a: "Get Interior Estimate",
  b: "WhatsApp Us",
  img: "kitchen-big"
}];
const STATS = [{
  v: "500+",
  l: "Projects completed"
}, {
  v: "6–10",
  l: "Weeks average delivery time"
}, {
  v: "100%",
  l: "Transparent, itemized quotations"
}, {
  v: "20+",
  l: "Localities served city-wide"
}];
function HomeHero() {
  const [i, setI] = React.useState(0);
  const s = SLIDES[i];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: "0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      paddingTop: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      minHeight: "460px",
      display: "flex",
      alignItems: "center",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/" + s.img + ".jpg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,rgba(31,32,36,.82) 0%,rgba(31,32,36,.55) 48%,rgba(31,32,36,.12) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "clamp(32px,5vw,64px)",
      maxWidth: "640px",
      display: "flex",
      flexDirection: "column",
      gap: "22px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "paper",
    uppercase: true
  }, s.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-hero)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-hero)",
      color: "#fff"
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, s.a), /*#__PURE__*/React.createElement(Button, {
    variant: "onPhoto",
    size: "lg"
  }, s.b))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "clamp(32px,5vw,64px)",
      bottom: "26px",
      display: "flex",
      gap: "8px"
    }
  }, SLIDES.map((_, n) => /*#__PURE__*/React.createElement("span", {
    key: n,
    onClick: () => setI(n),
    style: {
      height: 6,
      width: n === i ? 28 : 6,
      borderRadius: 999,
      cursor: "pointer",
      background: n === i ? "var(--terracotta-600)" : "rgba(255,255,255,.5)",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBlock: "48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "24px"
    }
  }, STATS.map(st => /*#__PURE__*/React.createElement(Stat, {
    key: st.l,
    value: st.v,
    label: st.l
  })))));
}
Object.assign(window, {
  HomeHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Proof.jsx
try { (() => {
const {
  SectionHeading,
  ProcessStep,
  Pill,
  Icon
} = window.MetaspacesDesignSystem_504b95;
const WHY = [["user-round", "Personalized consultation", "Designs built around your family, habits and budget — never templated."], ["clipboard-list", "Transparent quotation", "Itemized, no hidden costs. You know exactly what you're paying for."], ["tree-pine", "Quality materials", "Durable, branded materials and hardware suited to Bangalore homes."], ["ruler", "Practical space planning", "Layouts that maximize storage, flow and natural light."], ["wrench", "End-to-end execution", "One team owns design, production and installation — start to finish."], ["factory", "Factory-backed support", "Furniture support through Seasun Group / Radian Ergo for reliable quality."]];
const STEPS = [["1", "Consultation", "We understand your home, lifestyle, timeline and budget — free of charge."], ["2", "Design & Quote", "3D designs, material options and a transparent, itemized estimate."], ["3", "Production", "Factory-backed manufacturing and quality checks at every stage."], ["4", "Installation", "On-site execution, finishing and a clean, on-time handover."]];
function Proof() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Transformations",
    title: "From bare space to a home you love",
    lede: "A look at the kind of before-and-after transformations we deliver across Bangalore.",
    style: {
      marginBottom: "40px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--grid-gap)"
    }
  }, [["before", "Before"], ["after", "After"], ["kitchen-2", "After"]].map(([img, lab], n) => /*#__PURE__*/React.createElement("figure", {
    key: n,
    style: {
      margin: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/" + (img === "kitchen-2" ? "kitchen" : img) + ".jpg",
    alt: lab,
    style: {
      width: "100%",
      aspectRatio: "4 / 3",
      objectFit: "cover",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      left: 14,
      top: 14
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: lab === "Before" ? "ink" : "accent"
  }, lab))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inset)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "How it works",
    title: "A simple, transparent process",
    lede: "Four clear stages from first conversation to handing over the keys to your finished home.",
    style: {
      marginBottom: "52px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "20px",
      alignItems: "start"
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement(ProcessStep, {
    key: s[0],
    number: s[0],
    title: s[1],
    description: s[2],
    elevated: s[0] === "2"
  }))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Why Metaspaces",
    title: "Premium design, backed by real accountability",
    style: {
      marginBottom: "44px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--grid-gap)"
    }
  }, WHY.map(w => /*#__PURE__*/React.createElement("div", {
    key: w[1],
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: "26px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: 999,
      background: "var(--surface-accent-soft)",
      color: "var(--terracotta-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: w[0]
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h4)"
    }
  }, w[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, w[2])))))));
}
Object.assign(window, {
  Proof
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reviews.jsx
try { (() => {
const {
  SectionHeading,
  TestimonialCard,
  FaqItem,
  Button
} = window.MetaspacesDesignSystem_504b95;
const REVIEWS = [["Metaspaces did an amazing job designing our home interiors! They really understood our style and needs, and the final result was exactly what we wanted. The whole process was smooth and stress-free.", "Manu Abraham", "Home interiors · Google review"], ["I recently worked with Metaspaces on designing my home interiors, and it was a truly enjoyable experience. I was aiming for an elegant and simple aesthetic, and the team delivered beautifully.", "Karthika Harindran", "Home interiors · Google review"], ["We absolutely loved the quality of work and professionalism that they carried. They were very accommodative to whatever we had to say.", "Deepa T P", "Local Guide · Google review"]];
const FAQS = [["Who is the best home interior designer in Bangalore?", "Metaspaces is among the most trusted home interior designers in Bangalore. We offer personalized design consultation, transparent quotations, quality materials and end-to-end execution. As part of Seasun Group with factory-backed furniture support, we deliver premium interiors across KR Puram, Whitefield, Hennur, Sarjapur Road, HSR Layout and every major Bangalore locality."], ["How much does 2BHK interior design cost in Bangalore?", "A 2BHK interior in Bangalore typically ranges from around ₹4 lakh for essential interiors to ₹8 lakh or more for a premium full-home package. The final cost depends on scope, material selection and finishes. We provide a free, transparent estimate after understanding your home."], ["How much does 3BHK interior design cost in Bangalore?", "A 3BHK interior in Bangalore generally starts around ₹6 lakh and can go up to ₹12 lakh or more for premium, fully customized interiors."], ["Do you provide modular kitchen interiors?", "Yes. We design and build modular kitchens in L-shape, U-shape, parallel and island layouts, with moisture-resistant ply, premium hardware and smart storage tailored to how you cook."], ["Do you provide free consultation?", "Yes. We offer a free, no-obligation design consultation. Share your home details and our design expert will discuss ideas, space planning and a transparent estimate."]];
function Reviews() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inset)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Loved by homeowners",
    title: "What Bangalore families say",
    style: {
      marginBottom: "44px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--grid-gap)",
      alignItems: "stretch"
    }
  }, REVIEWS.map(r => /*#__PURE__*/React.createElement(TestimonialCard, {
    key: r[1],
    quote: "“" + r[0] + "”",
    name: r[1],
    meta: r[2]
  }))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: "860px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Answers",
    title: "Frequently asked questions",
    lede: "Clear answers to the questions Bangalore homeowners ask us most.",
    style: {
      marginBottom: "32px"
    }
  }), /*#__PURE__*/React.createElement("div", null, FAQS.map((q, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: q[0],
    question: q[0],
    answer: q[1],
    defaultOpen: i === 0
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "32px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "View all FAQs")))));
}
Object.assign(window, {
  Reviews
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reviews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const {
  ServiceCard,
  SectionHeading,
  Button,
  Chip,
  Icon
} = window.MetaspacesDesignSystem_504b95;
const SERVICES = [{
  img: "kitchen",
  title: "Modular Kitchen",
  desc: "L-shaped, U-shaped, parallel and island kitchens with moisture-resistant ply, premium hardware and smart storage.",
  link: "Explore kitchens"
}, {
  img: "wardrobe",
  title: "Wardrobes & Storage",
  desc: "Sliding and hinged wardrobes, walk-ins and loft storage tailored to your room and routine.",
  link: "Explore wardrobes"
}, {
  img: "living",
  title: "Living Room Interiors",
  desc: "TV units, false ceilings, accent walls, lighting and furniture that make a warm first impression.",
  link: "Explore living rooms"
}, {
  img: "bedroom",
  title: "Bedroom Interiors",
  desc: "Restful master and kids' bedrooms with cohesive wardrobes, study units and ambient lighting.",
  link: "Explore bedrooms"
}, {
  img: "home",
  title: "Full Home Interiors",
  desc: "End-to-end interiors for 2BHK, 3BHK, apartments and villas — designed, costed and executed by us.",
  link: "Explore full home"
}, {
  img: "ceiling",
  title: "Ceiling, Lighting & Decor",
  desc: "False ceilings, layered lighting, pooja units, partitions and finishing touches that tie a home together.",
  link: "View all services"
}];
const KITCHEN_POINTS = [["Moisture & termite-resistant ply", "Built to last in Bangalore's climate"], ["Premium soft-close hardware", "Smooth, quiet, long-lasting fittings"], ["Smart storage & tall units", "Every inch planned around your routine"]];
function Services() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we do",
    align: "center",
    maxWidth: 740,
    title: "Complete home interior solutions, under one roof",
    lede: "Design consultation, space planning, modular kitchen, wardrobes, living and bedroom interiors, pooja units, TV units, false ceiling, lighting and furniture \u2014 designed and executed by one accountable team.",
    style: {
      marginBottom: "48px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--grid-gap)"
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    image: "../../assets/img/" + s.img + ".jpg",
    alt: s.title,
    title: s.title,
    description: s.desc,
    linkLabel: s.link
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inset)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: "clamp(32px,5vw,64px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "22px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Signature service",
    title: "Modular kitchens built for how Bangalore cooks",
    lede: "From compact apartment kitchens to spacious villa layouts, we design ergonomic work triangles, tall units and clever corner solutions \u2014 with finishes that handle daily Indian cooking."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "14px"
    }
  }, KITCHEN_POINTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p[0],
    style: {
      display: "flex",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 26,
      height: 26,
      borderRadius: 999,
      background: "var(--surface-success-soft)",
      color: "var(--olive-600)",
      flex: "none",
      marginTop: "2px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: "15px",
      color: "var(--text-heading)"
    }
  }, p[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, p[1]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Explore modular kitchens"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Get an estimate"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/kitchen-big.jpg",
    alt: "Premium modular kitchen by Metaspaces",
    style: {
      width: "100%",
      aspectRatio: "4 / 3",
      objectFit: "cover",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-card)"
    }
  }))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
const {
  Icon
} = window.MetaspacesDesignSystem_504b95;
const LOCALITIES = ["KR Puram", "Whitefield", "Hennur", "Sarjapur Road", "Marathahalli", "Electronic City", "HSR Layout", "JP Nagar", "Indiranagar", "Koramangala", "Yelahanka", "Hebbal", "Kalyan Nagar", "Horamavu", "TC Palya", "Bellandur", "Manyata Tech Park", "Devanahalli", "Banaswadi", "Ramamurthy Nagar", "CV Raman Nagar", "Kadugodi", "Varthur", "Brookefield", "Mahadevapura", "Hoodi", "BTM Layout", "Jayanagar", "Banashankari", "Rajajinagar", "Malleshwaram", "RT Nagar", "Frazer Town", "Kammanahalli", "Thanisandra", "Nagawara", "Hosa Road", "Bannerghatta Road"];
function SiteFooter() {
  const cols = [["Services", ["Modular Kitchen", "Wardrobes & Storage", "Living Room Interiors", "Bedroom Interiors", "Full Home Interiors"]], ["Company", ["About Metaspaces", "Projects / Gallery", "Testimonials", "Bangalore Locations", "FAQ", "Free Consultation", "Contact"]], ["Contact", ["+91 86180 08947", "crm@metaspaces.in", "View studio on Google Maps", "Mon–Sun · 10:00 AM – 7:00 PM"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-ink)",
      color: "rgba(255,255,255,.72)",
      paddingBlock: "64px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr repeat(3,1fr)",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "22px",
      letterSpacing: "-.035em",
      color: "#fff"
    }
  }, "Metaspaces"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      lineHeight: 1.7,
      maxWidth: "38ch"
    }
  }, "Premium home interior designers in Bangalore. A Seasun Group company offering modular kitchens, wardrobes and complete home interiors with factory-backed furniture support."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginTop: "4px"
    }
  }, ["facebook", "instagram", "message-circle"].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 38,
      height: 38,
      borderRadius: 999,
      background: "rgba(255,255,255,.08)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: "sm"
  }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c[0],
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "13px",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "#fff"
    }
  }, c[0]), c[1].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: "14px"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: "48px",
      paddingTop: "26px",
      borderTop: "1px solid rgba(255,255,255,.12)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "13px",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "#fff",
      marginBottom: "12px"
    }
  }, "Interior designers near you in Bangalore"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px 16px",
      fontSize: "13px"
    }
  }, LOCALITIES.map(l => /*#__PURE__*/React.createElement("span", {
    key: l
  }, l))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      marginTop: "26px"
    }
  }, "\xA9 2026 Metaspaces \xB7 A Seasun Group company. All rights reserved. Home Interior Designers in Bangalore")));
}
function FloatingActions() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: "22px",
      bottom: "22px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/918618008947",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      borderRadius: 999,
      background: "var(--olive-600)",
      color: "#fff",
      boxShadow: "var(--shadow-float)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: "lg",
    color: "#fff"
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:+918618008947",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      borderRadius: 999,
      background: "var(--terracotta-600)",
      color: "#fff",
      boxShadow: "var(--shadow-accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: "lg",
    color: "#fff"
  })));
}
Object.assign(window, {
  SiteFooter,
  FloatingActions
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const {
  Button,
  Icon
} = window.MetaspacesDesignSystem_504b95;
const NAV = ["Home", "About", "Services", "Projects", "Testimonials", "Locations", "FAQ", "Contact"];
function SiteHeader() {
  const [active, setActive] = React.useState("Home");
  const [openMenu, setOpenMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(250,248,245,.9)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "28px",
      height: "80px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "22px",
      letterSpacing: "-.035em",
      color: "var(--ink-900)"
    }
  }, "Metaspaces"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "22px",
      marginLeft: "8px"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    onClick: () => {
      setActive(n);
      setOpenMenu(n === "Services" ? !openMenu : false);
    },
    style: {
      position: "relative",
      fontSize: "14.5px",
      fontWeight: active === n ? 700 : 600,
      cursor: "pointer",
      color: active === n ? "var(--text-accent)" : "var(--text-strong)",
      display: "inline-flex",
      alignItems: "center",
      gap: "4px"
    }
  }, n, n === "Services" ? /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: "sm"
  }) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+918618008947",
    style: {
      fontSize: "14.5px",
      fontWeight: 700,
      color: "var(--text-heading)"
    }
  }, "86180 08947"), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "sm"
  }, "Book Free Consultation"))), openMenu ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-soft)",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "flex",
      gap: "28px",
      padding: "18px 0"
    }
  }, ["All Services", "Modular Kitchen", "Wardrobes & Storage", "Living Room Interiors", "Bedroom Interiors", "Full Home Interiors"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      fontSize: "14px",
      fontWeight: 600
    }
  }, s)))) : null);
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.FloatingBadge = __ds_scope.FloatingBadge;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.OptionCard = __ds_scope.OptionCard;

__ds_ns.ProgressDots = __ds_scope.ProgressDots;

__ds_ns.SearchSelect = __ds_scope.SearchSelect;

__ds_ns.LOCALITIES = __ds_scope.LOCALITIES;

})();
