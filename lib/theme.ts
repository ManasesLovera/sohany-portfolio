export const themes = {
  light: {
    background: "#ffffff",
    foreground: "#1a1a1a",
    primary: "#a855f7", // lila (light purple)
    secondary: "#34d399", // menta (mint green)
    accent: "#60a5fa", // azul claro (light blue)
    muted: "#f8fafc",
    border: "#e2e8f0",
    card: "#ffffff",
    "card-foreground": "#1a1a1a",
    "primary-foreground": "#ffffff",
    "secondary-foreground": "#1a1a1a",
    "accent-foreground": "#1a1a1a",
    "muted-foreground": "#64748b",
  },
  dark: {
    background: "#0f0f23",
    foreground: "#f1f5f9",
    primary: "#c084fc", // lila (light purple) - darker variant
    secondary: "#6ee7b7", // menta (mint green) - darker variant
    accent: "#93c5fd", // azul claro (light blue) - darker variant
    muted: "#1e293b",
    border: "#334155",
    card: "#1e293b",
    "card-foreground": "#f1f5f9",
    "primary-foreground": "#1a1a1a",
    "secondary-foreground": "#1a1a1a",
    "accent-foreground": "#1a1a1a",
    "muted-foreground": "#94a3b8",
  },
}

export type Theme = keyof typeof themes
