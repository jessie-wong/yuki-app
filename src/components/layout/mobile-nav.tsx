"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { cn } from "@/lib/utils"
import { navItems } from "./nav-items"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-16 left-0 right-0 z-[70] bg-background/95 backdrop-blur-sm border-b border-green-200 dark:border-green-800 shadow-lg transition-all duration-300 ease-out md:hidden",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="container py-6" role="navigation" aria-label="Mobile navigation">
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={onClose}
                className={cn(
                  "relative px-4 py-4 rounded-xl transition-all duration-200 text-base font-medium",
                  "hover:bg-green-50 dark:hover:bg-green-900/20 active:scale-95",
                  "touch-manipulation", // Better touch handling
                  pathname === item.path
                    ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                    : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                )}
                style={{
                  animationDelay: `${index * 75}ms`
                }}
              >
                <span className="flex items-center justify-between">
                  <span className="flex items-center">
                    {item.label}
                    {pathname === item.path && (
                      <div className="ml-3 w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                    )}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    →
                  </span>
                </span>
                {pathname === item.path && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 fresh-gradient rounded-r-full"></div>
                )}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu footer */}
          <div className="mt-8 pt-6 border-t border-green-200 dark:border-green-800">
            <div className="px-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                欢迎来到 Yuki Lab
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                分享技术学习、生活感悟、项目经验
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
} 