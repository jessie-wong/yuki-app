import { Section } from "@/components/ui/section"
import { aboutData } from "@/data/about"

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">{aboutData.title}</h1>
          <p className="mt-2 text-muted-foreground">
            {aboutData.subtitle}
          </p>
        </div>
        
        {aboutData.sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}
      </div>
    </div>
  )
} 