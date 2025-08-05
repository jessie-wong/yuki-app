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
    path: "/blog/",
    label: "博客",
  },
  {
    path: "/about/",
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
              "relative px-3 py-2 rounded-md transition-all duration-200 hover:bg-green-50 dark:hover:bg-green-900/20",
              pathname === item.path
                ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            )}
          >
            {item.label}
            {pathname === item.path && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 fresh-gradient rounded-full"></div>
            )}
          </Link>
        ))}
      </nav>
    </div>
  )
} 