"use client"

import { useRef, useEffect } from "react"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll")
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in-up")
              }, i * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t("about.title")}
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t("about.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-on-scroll">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{t("about.skills")}</h3>
            <ul className="space-y-4">
              {t("about.skillsList").map((skill: string, index: number) => (
                <li key={index} className="flex items-start space-x-3 animate-on-scroll">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="animate-on-scroll">
                  <div className="text-4xl font-bold text-purple-500 mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-4xl font-bold text-blue-500 mb-2">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Happy Clients</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-4xl font-bold text-green-500 mb-2">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-4xl font-bold text-purple-500 mb-2">9</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Specializations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
