import React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
  shadow?: boolean
  padding?: string // tailwind padding class, e.g. 'p-6'
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, children, hoverable = false, shadow = false, padding = "p-6", ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "minimal-card dark:minimal-card-dark rounded-lg",
          padding,
          shadow && "shadow-md",
          hoverable && "hover:shadow-lg transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"

export { Card }