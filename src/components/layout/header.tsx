import Link from "next/link"
import Image from "next/image"
import { MainNav } from "./nav"
import { ThemeToggle } from "../theme-toggle"
import { getAssetPath } from "@/lib/utils"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-200 dark:border-green-800 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <div className="relative">
              <Image 
                src={getAssetPath("yukilab-logo.svg")} 
                alt="Yuki Lab" 
                width={76} 
                height={24} 
                className="text-foreground dark:invert transition-opacity duration-200 group-hover:opacity-80" 
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2">
          <div className="flex-1">
            <MainNav />
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
} 