import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { RootLayout } from "@/components/layout/root-layout"
import { getAssetPath } from "@/lib/utils"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Yuki Lab",
  description: "一个基于 Next.js 和 Tailwind CSS 构建的个人博客平台",
  icons: {
    icon: getAssetPath("yukilab-logo.svg"),
    shortcut: getAssetPath("yukilab-logo.svg"),
    apple: getAssetPath("yukilab-logo.svg"),
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootLayout>{children}</RootLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
