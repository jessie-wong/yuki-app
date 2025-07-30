"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  {
    path: "/",
    label: "首页",
  },
  {
    path: "/blog",
    label: "博客",
  },
  {
    path: "/about",
    label: "关于",
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex gap-6 md:gap-10">
      <nav className="flex items-center space-x-6 text-base font-medium">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "transition-colors hover:text-teal-500",
              pathname === item.path
                ? "text-teal-500"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
} 