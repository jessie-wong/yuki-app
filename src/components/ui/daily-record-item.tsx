import React from "react"
import { cn } from "@/lib/utils"

export interface DailyRecordItemProps {
  content: string
  date: string
  color: string
  className?: string
}

export function DailyRecordItem({ content, date, color, className }: DailyRecordItemProps) {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div className={`w-3 h-3 ${color} rounded-full`}></div>
      <div>
        <p className="text-sm text-gray-800 dark:text-gray-100">{content}</p>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
    </div>
  )
} 