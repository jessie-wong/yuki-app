import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* 个人介绍区域 */}
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-light text-gray-800 dark:text-gray-100 mb-4">
                Yuki Lab
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 fresh-gradient"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              欢迎来到我的个人空间 👋
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              这里是我分享技术学习、生活感悟、项目经验的地方。希望能通过文字记录成长，也希望能与志同道合的朋友交流。
            </p>
          </div>

          {/* 个人技能展示 */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center">
              技术栈
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { name: "React", icon: "⚛️", level: "精通" },
                { name: "TypeScript", icon: "📘", level: "熟练" },
                { name: "Next.js", icon: "⚡", level: "精通" },
                { name: "Node.js", icon: "🟢", level: "熟练" }
              ].map((skill, index) => (
                <Card key={index} padding="p-4" className="text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-1">{skill.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{skill.level}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* 功能区域 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* 技术博客 */}
            <Card hoverable>
              <div className="text-center space-y-4">
                <div className="w-14 h-14 mx-auto fresh-gradient rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">技术博客</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">分享技术学习心得和项目经验</p>
                </div>
                <Link 
                  href="/blog"
                  className="inline-block px-4 py-2 fresh-gradient text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
                >
                  阅读文章
                </Link>
              </div>
            </Card>

            {/* 生活分享 */}
            <Card hoverable>
              <div className="text-center space-y-4">
                <div className="w-14 h-14 mx-auto fresh-gradient rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">生活感悟</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">记录生活中的小确幸和思考</p>
                </div>
                <Link 
                  href="/life"
                  className="inline-block px-4 py-2 fresh-gradient text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
                >
                  查看分享
                </Link>
              </div>
            </Card>

            {/* 时间线 */}
            <Card hoverable>
              <div className="text-center space-y-4">
                <div className="w-14 h-14 mx-auto fresh-gradient rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">成长轨迹</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">记录学习和生活的里程碑</p>
                </div>
                <Link 
                  href="/timeline"
                  className="inline-block px-4 py-2 fresh-gradient text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
                >
                  查看轨迹
                </Link>
              </div>
            </Card>
          </div>

          {/* 最新动态 */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">最新动态</h2>
            <Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">正在学习 Next.js 15 的新特性</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">计划分享一些前端性能优化的经验</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">准备写一篇关于工作与生活平衡的思考</span>
                </div>
              </div>
            </Card>
          </div>

          {/* 装饰性线条元素 */}
          <div className="relative">
            <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-green-400 to-transparent"></div>
            <div className="absolute top-10 right-1/3 w-px h-16 bg-gradient-to-b from-blue-400 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-b from-purple-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
