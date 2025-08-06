export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">关于我</h1>
          <p className="mt-2 text-muted-foreground">
            你好，我是 Yuki，一名热爱技术的开发者
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* 个人简介 */}
          <div className="md:col-span-2">
            <div className="minimal-card dark:minimal-card-dark rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">个人简介</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="mb-4">
                  你好！我是 Yuki，一名全栈开发者，目前专注于前端技术栈。我热爱编程，享受通过代码创造价值的过程。
                </p>
                <p className="mb-4">
                  这个网站是我记录技术学习、分享生活感悟的个人空间。希望通过文字记录成长轨迹，也希望能与志同道合的朋友交流。
                </p>
                <p>
                  我相信技术改变世界，也相信持续学习的力量。在这里，我会分享我的技术心得、项目经验，以及生活中的小确幸。
                </p>
              </div>
            </div>
          </div>

          {/* 技能卡片 */}
          <div>
            <div className="minimal-card dark:minimal-card-dark rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">技能栈</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">前端开发</span>
                    <span className="text-xs text-gray-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">后端开发</span>
                    <span className="text-xs text-gray-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">数据库</span>
                    <span className="text-xs text-gray-500">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">DevOps</span>
                    <span className="text-xs text-gray-500">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 技术栈详情 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">技术栈</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="minimal-card dark:minimal-card-dark rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">前端技术</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">React / Next.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">TypeScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Vue.js</span>
                </div>
              </div>
            </div>

            <div className="minimal-card dark:minimal-card-dark rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">后端技术</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Node.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Express / Koa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">PostgreSQL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Redis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 项目经验 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">项目经验</h2>
          <div className="space-y-6">
            <div className="minimal-card dark:minimal-card-dark rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">个人博客系统</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                  进行中
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                基于 Next.js 和 TypeScript 构建的个人博客平台，支持 Markdown 渲染、主题切换、响应式设计等功能。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">Next.js</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">TypeScript</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">Tailwind CSS</span>
              </div>
            </div>

            <div className="minimal-card dark:minimal-card-dark rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">电商管理系统</h3>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                  已完成
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                为企业客户开发的电商后台管理系统，包含商品管理、订单处理、用户管理、数据统计等功能模块。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">Vue.js</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">Node.js</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>

        {/* 联系方式 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">联系我</h2>
          <div className="minimal-card dark:minimal-card-dark rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">yuki@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">github.com/yuki</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">北京，中国</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">在线时间：工作日 9:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 