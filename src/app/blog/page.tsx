import BlogList from "@/components/blog/blog-list"
import BlogSidebar from "@/components/blog/blog-sidebar"
import { getBlogPosts } from "@/app/api/posts"
import { Suspense } from "react"

export default async function BlogPage(props: { searchParams?: { category?: string; tag?: string } }) {
  const allPosts = await getBlogPosts()
  const categories = Array.from(new Set(allPosts.map(post => post.category).filter(Boolean))).sort() as string[];
  const tags = Array.from(new Set(allPosts.flatMap(post => post.tags || []))).sort()

  const searchParams = await props.searchParams;
  const selectedCategory = searchParams?.category || ""
  const selectedTag = searchParams?.tag || ""

  return (
    <div className="container py-8 flex flex-row gap-8 justify-center max-w-screen-lg mx-auto">
      <div className="flex-1 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">博客</h1>
          <p className="mt-2 text-muted-foreground">
            分享一些技术文章和个人想法
          </p>
        </div>
        <BlogList allPosts={allPosts} selectedCategory={selectedCategory} selectedTag={selectedTag} />
      </div>
      <Suspense>
        <BlogSidebar categories={categories} tags={tags} selectedCategory={selectedCategory} selectedTag={selectedTag} />
      </Suspense>
    </div>
  )
}