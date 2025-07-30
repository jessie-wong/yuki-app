import Timeline from "@/components/timeline/timeline"

export default function Home() {
  return (
    <div className="container py-8 min-h-screen">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Welcome to Yuki Lab
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A personal blog and timeline showcase built with Next.js and Tailwind CSS.
        </p>
      </div>
      <div className="pb-16">
        <Timeline />
      </div>
    </div>
  )
}
