import React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface HobbyCardProps {
  name: string
  icon: string
  desc: string
  className?: string
}

export function HobbyCard({ name, icon, desc, className }: HobbyCardProps) {
  return (
    <Card padding="p-4" className={cn("text-center", className)}>
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-1">{name}</h3>
      <p className="text-xs text-gray-600 dark:text-gray-300">{desc}</p>
    </Card>
  )
} 