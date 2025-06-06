import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sohany Galan - Diseñadora Creativa",
  description:
    "Portfolio de Sohany Galan, diseñadora creativa especializada en tarjetas de presentación, redes sociales, branding y promociones.",
  keywords: "diseño gráfico, branding, tarjetas de presentación, redes sociales, diseñadora creativa",
  authors: [{ name: "Sohany Galan" }],
  openGraph: {
    title: "Sohany Galan - Diseñadora Creativa",
    description: "Portfolio de diseñadora creativa especializada en branding y diseño gráfico",
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
