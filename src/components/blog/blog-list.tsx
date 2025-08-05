import Link from 'next/link'
import type { BlogPost } from '@/types'
import { getBlogPosts } from '@/app/api/posts'

export default async function BlogList() {
  const posts = await getBlogPosts()

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">最新文章</h2>
      <div className="grid gap-4">
        {posts.map((post: BlogPost) => (
          <article key={post.slug} className="group relative rounded-lg border p-6 hover:bg-muted">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-semibold leading-none tracking-tight">
                    {post.title}
                  </h3>
                </div>
                <time className="text-sm text-muted-foreground" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              {post.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-muted-foreground/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}