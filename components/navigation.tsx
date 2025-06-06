"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Globe, Menu, X } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-purple-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              SG
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("nav.portfolio")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("nav.contact")}
              </button>
            </div>
          </div>

          {/* Theme and Language Controls */}
          <div className="flex items-center space-x-2">
            {mounted && (
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            )}

            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className="p-2"
              >
                <Globe className="h-4 w-4 mr-1" />
                {language.toUpperCase()}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-purple-100 dark:border-gray-800">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                {t("nav.portfolio")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                {t("nav.contact")}
              </button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                {language === "en" ? "Español" : "English"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
