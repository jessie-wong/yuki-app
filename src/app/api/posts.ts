import fs from 'fs'
import path from 'path'
import { sync } from 'glob'
import matter from 'gray-matter'
import type { BlogPost } from '@/types'

export async function getBlogPosts(): Promise<BlogPost[]> {
  const POSTS_DIR = path.join(process.cwd(), 'src/markdown')
  // 使用 glob 模式匹配 .md 和 .mdx 文件
  const posts = sync('*.{md,mdx}', { cwd: POSTS_DIR })
  
  return posts.map((filename) => {
    const filePath = path.join(POSTS_DIR, filename)
    const source = fs.readFileSync(filePath, 'utf8')
    const slug = filename.replace(/\.(md|mdx)$/, '')
    
    // 解析 frontmatter
    const { data: frontmatter, content } = matter(source)
    
    // 获取文件修改时间
    const stats = fs.statSync(filePath)
    const lastModified = stats.mtime
    
    // 从 frontmatter 中获取元数据，如果没有则使用默认值
    const title = frontmatter.title || slug.charAt(0).toUpperCase() + slug.slice(1)
    const date = frontmatter.date 
      ? new Date(frontmatter.date).toISOString().split('T')[0]
      : lastModified.toISOString().split('T')[0]
    
    // 从内容中提取第一段作为描述（如果 frontmatter 中没有提供）
    const description = frontmatter.description || content
      .split('\n')
      .find(line => line.trim() !== '')
      ?.replace(/[#\*\[\]`]/g, '')
      ?.trim()
      ?.slice(0, 200)
    
    return {
      slug,
      title,
      date,
      description,
      author: frontmatter.author,
      tags: frontmatter.tags,
      category: frontmatter.category || "技术"
    }
  }).sort((a, b) => b.date.localeCompare(a.date))
}