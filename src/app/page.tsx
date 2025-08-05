import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* 主标题区域 */}
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-light text-gray-800 dark:text-gray-100 mb-4">
                Yuki Lab
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 fresh-gradient"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              一个基于 Next.js 和 Tailwind CSS 构建的个人博客平台。
            </p>
          </div>

          {/* 功能区域 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* 博客卡片 */}
            <div className="minimal-card dark:minimal-card-dark rounded-lg p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto fresh-gradient rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">博客</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">探索最新的文章和见解</p>
                </div>
                <Link 
                  href="/blog"
                  className="inline-block px-6 py-2 fresh-gradient text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
                >
                  查看博客
                </Link>
              </div>
            </div>

            {/* 关于卡片 */}
            <div className="minimal-card dark:minimal-card-dark rounded-lg p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto fresh-gradient rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">关于</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">了解更多关于我们的信息</p>
                </div>
                <Link 
                  href="/about"
                  className="inline-block px-6 py-2 fresh-gradient text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
                >
                  了解更多
                </Link>
              </div>
            </div>
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
