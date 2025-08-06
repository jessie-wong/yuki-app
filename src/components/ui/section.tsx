import React from "react"
import { Section as SectionType, CardData } from "@/types/cards"
import { Card } from "./card"
import { DynamicCard } from "./dynamic-card"
import { cn } from "@/lib/utils"

interface SectionProps {
  section: SectionType
  className?: string
}

export function Section({ section, className }: SectionProps) {
  const renderCards = () => {
    switch (section.layout) {
      case 'grid': {
        const cols = section.gridCols || 2
        return (
          <div className={cn(`grid grid-cols-1 md:grid-cols-${cols} gap-4`, className)}>
            {section.cards.map((card: CardData, index: number) => (
              <DynamicCard key={index} data={card} />
            ))}
          </div>
        )
      }
      case 'list':
        return (
          <div className={cn("space-y-4", className)}>
            {section.cards.map((card: CardData, index: number) => (
              card.type === 'project' ? (
                <Card key={index}>
                  <DynamicCard data={card} />
                </Card>
              ) : (
                <DynamicCard key={index} data={card} />
              )
            ))}
          </div>
        )
      case 'single':
        return (
          <Card className={cn("space-y-4", className)}>
            {section.cards.map((card: CardData, index: number) => (
              <DynamicCard key={index} data={card} />
            ))}
          </Card>
        )
      default:
        // 默认布局：如果是单个卡片，用 Card 包装；如果是多个卡片，用网格布局
        if (section.cards.length === 1) {
          return (
            <Card className={className}>
              <DynamicCard data={section.cards[0]} />
            </Card>
          )
        } else {
          return (
            <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", className)}>
              {section.cards.map((card: CardData, index: number) => (
                <Card key={index}>
                  <DynamicCard data={card} />
                </Card>
              ))}
            </div>
          )
        }
    }
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
      {renderCards()}
    </div>
  )
} 