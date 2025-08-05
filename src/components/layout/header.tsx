import Link from "next/link"
import Image from "next/image"
import { MainNav } from "./nav"
import { ThemeToggle } from "../theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="yukilab-logo.svg" alt="Yuki Lab" width={76} height={24} className="text-foreground dark:invert" />
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