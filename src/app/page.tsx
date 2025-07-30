import Timeline from "@/components/timeline/timeline"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container py-8 min-h-screen">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          Welcome to Yuki Lab
        </h1>
        <p className="mt-6 text-xl leading-8 text-muted-foreground">
          A personal blog and timeline showcase built with Next.js and Tailwind CSS.
        </p>
        <div className="mt-10">
          <Link 
            href="/blog"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            查看博客
          </Link>
        </div>
      </div>
    </div>
  )
}
