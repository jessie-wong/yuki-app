import React from "react"
import { cn } from "@/lib/utils"

export interface Technology {
  name: string
  color: string
}

export interface TechnologyListProps {
  technologies: Technology[]
  className?: string
}

export function TechnologyList({ technologies, className }: TechnologyListProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {technologies.map((tech, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className={`w-2 h-2 ${tech.color} rounded-full`}></div>
          <span className="text-sm">{tech.name}</span>
        </div>
      ))}
    </div>
  )
} 