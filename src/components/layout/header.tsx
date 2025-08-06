"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { MainNav } from "./nav"
import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "../theme-toggle"
import { getAssetPath, cn } from "@/lib/utils"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-200 dark:border-green-800 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        {/* Logo - responsive sizing */}
        <div className="flex-shrink-0 mr-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image 
                src={getAssetPath("yukilab-logo.svg")} 
                alt="Yuki Lab" 
                width={76} 
                height={24} 
                className="h-6 w-auto text-foreground dark:invert transition-opacity duration-200 group-hover:opacity-80" 
              />
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex-1 hidden md:block">
            <MainNav />
          </div>
          <div className="flex items-center space-x-1 relative z-[71]">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200 active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-5 h-5">
                <Menu 
                  className={cn(
                    "absolute inset-0 h-5 w-5 text-gray-600 dark:text-gray-300 transition-all duration-200",
                    isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                  )} 
                />
                <X 
                  className={cn(
                    "absolute inset-0 h-5 w-5 text-gray-600 dark:text-gray-300 transition-all duration-200",
                    isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                  )} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
} 