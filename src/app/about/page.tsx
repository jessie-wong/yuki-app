export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">关于</h1>
          <p className="mt-2 text-muted-foreground">
            了解更多关于我们的信息
          </p>
        </div>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            欢迎来到 Yuki Lab！这是一个基于 Next.js 和 Tailwind CSS 构建的个人博客平台。
          </p>
          
          <h2>技术栈</h2>
          <ul>
            <li>Next.js 14 - React 框架</li>
            <li>TypeScript - 类型安全</li>
            <li>Tailwind CSS - 样式框架</li>
            <li>MDX - Markdown 支持</li>
          </ul>
          
          <h2>功能特性</h2>
          <ul>
            <li>响应式设计</li>
            <li>深色模式支持</li>
            <li>博客文章管理</li>
            <li>现代化 UI 设计</li>
          </ul>
          
          <p>
            这个项目展示了现代 Web 开发的最佳实践，包括性能优化、可访问性和用户体验设计。
          </p>
        </div>
      </div>
    </div>
  )
} 