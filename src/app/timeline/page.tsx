import Timeline from "@/components/timeline/timeline"

export default function TimelinePage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">成长轨迹</h1>
          <p className="mt-2 text-muted-foreground">
            记录学习和生活中的重要时刻和里程碑
          </p>
        </div>
        
        <Timeline />
      </div>
    </div>
  )
} 