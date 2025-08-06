import React from "react"
import { cn } from "@/lib/utils"

export interface ProgressBarProps {
  name: string
  percentage: number
  color: string
  className?: string
}

export function ProgressBar({ name, percentage, color, className }: ProgressBarProps) {
  return (
    <div className={cn("", className)}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`${color} h-2 rounded-full transition-all duration-300`} 
          style={{width: `${percentage}%`}}
        ></div>
      </div>
    </div>
  )
} 