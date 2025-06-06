export interface Project {
  id: string
  title: string
  category: string
  image: string
  description: string
}

export const projects: Project[] = [
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
    category: "packaging",
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
