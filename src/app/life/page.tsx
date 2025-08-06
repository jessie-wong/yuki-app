import { Section } from "@/components/ui/section"
import { lifeData } from "@/data/life"

export default function LifePage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">{lifeData.title}</h1>
          <p className="mt-2 text-muted-foreground">
            {lifeData.subtitle}
          </p>
        </div>
        
        {lifeData.sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}
      </div>
    </div>
  )
} 