import BlogList from "@/components/blog/blog-list"

export default async function BlogPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">博客</h1>
          <p className="mt-2 text-muted-foreground">
            分享一些技术文章和个人想法
          </p>
        </div>
        <BlogList />
      </div>
    </div>
  )
}