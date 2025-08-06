"use client"

import { Header } from "./header"
import { Footer } from "./footer"

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
} 