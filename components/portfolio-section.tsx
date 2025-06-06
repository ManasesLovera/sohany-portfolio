"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface Project {
  id: string
  title: string
  category: string
  image: string
  description: string
}

export function PortfolioSection() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")
  const sectionRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: "1",
      title: "Gaming Controller Stand",
      category: "mockups",
      image: "/images/projects/gaming-controller-stand.png",
      description: "Custom wooden gaming controller stands with promotional design",
    },
    {
      id: "2",
      title: "One Piece Fan Design",
      category: "posters",
      image: "/images/projects/one-piece-design.png",
      description: "Anime-themed promotional poster for One Piece fans",
    },
    {
      id: "3",
      title: "Yamaha Quality Stickers",
      category: "labels",
      image: "/images/projects/yamaha-stickers.png",
      description: "Quality inspection stickers and brand badges for Yamaha",
    },
    {
      id: "4",
      title: "Restaurant Branding",
      category: "presentations",
      image: "/images/projects/restaurant-design.png",
      description: "Complete branding package for restaurant with flamenco theme",
    },
    {
      id: "5",
      title: "Team Crancha Reef Logo",
      category: "cards",
      image: "/images/projects/team-crancha-reef.png",
      description: "Racing team logo design and vehicle application",
    },
    {
      id: "6",
      title: "SG Custom Works Branding",
      category: "cards",
      image: "/images/projects/sg-custom-works-branding.png",
      description: "Complete brand identity for custom woodworking business",
    },
    {
      id: "7",
      title: "MakroCell Business Materials",
      category: "cards",
      image: "/images/projects/makrocell-business.png",
      description: "Business cards and promotional materials for cell phone repair service",
    },
    {
      id: "8",
      title: "ASSB Solutions Tech Services",
      category: "social",
      image: "/images/projects/assb-solutions.png",
      description: "Social media posts and promotional materials for tech services",
    },
    {
      id: "9",
      title: "SG Custom Works Catalog",
      category: "catalogs",
      image: "/images/projects/sg-custom-catalog.png",
      description: "Comprehensive product catalog and service presentation",
    },
  ]

  const filters = [
    { key: "all", label: t("portfolio.categories.all") },
    { key: "banners", label: t("portfolio.categories.banners") },
    { key: "cards", label: t("portfolio.categories.cards") },
    { key: "catalogs", label: t("portfolio.categories.catalogs") },
    { key: "social", label: t("portfolio.categories.social") },
    { key: "packaging", label: t("portfolio.categories.packaging") },
    { key: "mockups", label: t("portfolio.categories.mockups") },
    { key: "posters", label: t("portfolio.categories.posters") },
    { key: "presentations", label: t("portfolio.categories.presentations") },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [filteredProjects])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-purple-50 via-green-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t("portfolio.title")}
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t("portfolio.subtitle")}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "hover:bg-purple-100 dark:hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-on-scroll group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
