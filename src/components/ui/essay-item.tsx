import React from "react"
import { cn } from "@/lib/utils"

export interface EssayItemProps {
  title: string
  content: string
  date: string
  color: string
  className?: string
}

export function EssayItem({ title, content, date, color, className }: EssayItemProps) {
  return (
    <div className={cn(`border-l-4 pl-4 ${color}`, className)}>
      <h3 className="font-medium text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{content}</p>
      <span className="text-xs text-gray-500 mt-2 block">{date}</span>
    </div>
  )
} 