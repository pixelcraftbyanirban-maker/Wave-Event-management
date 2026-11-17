// Tailwind v3 handoff example
// Brand values remain unresolved.
module.exports = {
  theme: { extend: {
    colors: {
      background: {
        primary: "var(--color-background-primary)"
      },
      text: { primary: "var(--color-text-primary)" },
      brand: { primary: "var(--color-brand-primary)" }
    },
    spacing: { "300": "var(--spacing-300)" },
    fontFamily: {
      display: ["Oswald"],
      body: ["DM Sans"]
    },
    borderRadius: { small: "var(--radius-small)" }
  }}
};