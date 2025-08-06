import Link from "next/link"

export default function LifePage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">生活感悟</h1>
          <p className="mt-2 text-muted-foreground">
            记录生活中的小确幸、思考和感悟
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 生活随笔 */}
          <div className="minimal-card dark:minimal-card-dark rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">生活随笔</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="font-medium text-gray-800 dark:text-gray-100">关于工作与生活的平衡</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  最近在思考如何在忙碌的工作中保持内心的平静...
                </p>
                <span className="text-xs text-gray-500 mt-2 block">2024-01-15</span>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-medium text-gray-800 dark:text-gray-100">学习新技术的乐趣</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  每次学习新技术都像重新认识这个世界...
                </p>
                <span className="text-xs text-gray-500 mt-2 block">2024-01-10</span>
              </div>
              
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="font-medium text-gray-800 dark:text-gray-100">阅读的力量</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  最近重读了《深入理解计算机系统》，有了新的感悟...
                </p>
                <span className="text-xs text-gray-500 mt-2 block">2024-01-05</span>
              </div>
            </div>
          </div>

          {/* 日常记录 */}
          <div className="minimal-card dark:minimal-card-dark rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">日常记录</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <p className="text-sm text-gray-800 dark:text-gray-100">今天学会了使用 Framer Motion 制作动画</p>
                  <span className="text-xs text-gray-500">2024-01-20</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div>
                  <p className="text-sm text-gray-800 dark:text-gray-100">读完了《原子习惯》，开始实践微习惯</p>
                  <span className="text-xs text-gray-500">2024-01-18</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <div>
                  <p className="text-sm text-gray-800 dark:text-gray-100">尝试了新的咖啡豆，味道很不错</p>
                  <span className="text-xs text-gray-500">2024-01-16</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div>
                  <p className="text-sm text-gray-800 dark:text-gray-100">开始学习吉他，希望能弹奏喜欢的歌曲</p>
                  <span className="text-xs text-gray-500">2024-01-12</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 兴趣爱好 */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">兴趣爱好</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "编程", icon: "💻", desc: "热爱写代码，享受创造的过程" },
              { name: "阅读", icon: "📚", desc: "喜欢技术书籍和科幻小说" },
              { name: "音乐", icon: "🎵", desc: "正在学习吉他，喜欢各种音乐" },
              { name: "咖啡", icon: "☕", desc: "咖啡爱好者，喜欢尝试不同豆子" }
            ].map((hobby, index) => (
              <div key={index} className="minimal-card dark:minimal-card-dark rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">{hobby.icon}</div>
                <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-1">{hobby.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">{hobby.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 推荐阅读 */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">推荐阅读</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "《深入理解计算机系统》", author: "Randal E. Bryant", category: "技术" },
              { title: "《原子习惯》", author: "James Clear", category: "个人成长" },
              { title: "《三体》", author: "刘慈欣", category: "科幻小说" }
            ].map((book, index) => (
              <div key={index} className="minimal-card dark:minimal-card-dark rounded-lg p-4">
                <h3 className="font-medium text-gray-800 dark:text-gray-100 mb-2">{book.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">作者：{book.author}</p>
                <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  {book.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 