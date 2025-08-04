# Yuki Blog 设计文档

## 1. 整体设计理念

### 1.1 视觉风格
- 简约现代
- 重视留白和层次
- 强调可读性
- 流畅的动画过渡
- 深浅色主题无缝切换

### 1.2 色彩系统
```css
// 浅色主题
--primary: #14b8a6;     // 主色调：清新青色
--bg-light: #ffffff;    // 背景色：纯白
--text-primary: #1f2937; // 主要文字：深灰
--text-secondary: #6b7280; // 次要文字：中灰

// 深色主题
--primary-dark: #2dd4bf; // 主色调：亮青色
--bg-dark: #111827;     // 背景色：深蓝灰
--text-primary-dark: #f3f4f6; // 主要文字：浅灰
--text-secondary-dark: #9ca3af; // 次要文字：中灰
```

### 1.3 字体系统
```css
// 无衬线字体
--font-sans: 'Geist Sans', system-ui;

// 等宽字体（代码块）
--font-mono: 'Geist Mono', monospace;

// 字体大小
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
```

## 2. 页面结构

### 2.1 布局组件
```typescript
// 布局组件结构
Layout
├── Header
│   ├── Logo
│   ├── Navigation
│   └── ThemeToggle
├── Main
│   └── {children}
└── Footer
    ├── Social Links
    └── Copyright
```

### 2.2 页面路由
```
/                   # 首页
├── /blog           # 博客列表
│   └── /[slug]     # 博客文章详情
├── /timeline       # 时间线
└── /about          # 关于页面
```

## 3. 功能模块设计

### 3.1 主题切换系统
```typescript
// 使用 next-themes 实现
interface ThemeConfig {
  light: string;    // 浅色主题配置
  dark: string;     // 深色主题配置
  system: string;   // 跟随系统
}

// 主题切换按钮组件
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  // 实现太阳/月亮图标切换动画
}
```

### 3.2 博客列表
```typescript
// 博客列表组件结构
BlogList
├── SearchBar          // 搜索功能
├── CategoryFilter     // 分类筛选
├── BlogCard[]        // 博客卡片列表
└── Pagination        // 分页控制

// 博客卡片组件
interface BlogCard {
  title: string;      // 标题
  excerpt: string;    // 摘要
  date: string;       // 发布日期
  readTime: string;   // 阅读时间
  category: string;   // 分类
  coverImage?: string; // 封面图片
}
```

### 3.3 评论系统
```typescript
// 评论组件结构
CommentSection
├── CommentForm      // 评论输入
├── CommentList      // 评论列表
└── CommentPagination // 评论分页

// 评论数据结构
interface Comment {
  id: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  createdAt: string;
  replies?: Comment[];
}
```

## 4. 交互设计

### 4.1 动画效果
```typescript
// 页面过渡动画
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// 主题切换动画
const themeTransition = {
  duration: 0.3,
  ease: "easeInOut",
};
```

### 4.2 响应式设计
```css
// 断点设计
--screen-sm: 640px;   // 手机
--screen-md: 768px;   // 平板
--screen-lg: 1024px;  // 小屏幕
--screen-xl: 1280px;  // 大屏幕

// 容器最大宽度
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
```

## 5. 组件设计规范

### 5.1 通用组件
```typescript
// 按钮组件
Button
├── Primary
├── Secondary
├── Ghost
└── Link

// 卡片组件
Card
├── Simple
├── Interactive
└── Featured

// 输入组件
Input
├── Text
├── TextArea
└── Search
```

### 5.2 专用组件
```typescript
// 博客相关
BlogComponents
├── TOC           // 目录导航
├── CodeBlock     // 代码块
├── ImageZoom     // 图片放大
└── ShareButtons  // 分享按钮

// 评论相关
CommentComponents
├── Editor        // Markdown 编辑器
├── Preview       // 预览
└── ReplyThread   // 回复线程
```

## 6. 性能优化

### 6.1 图片处理
- 使用 Next.js Image 组件
- 自动生成响应式图片
- 图片懒加载
- WebP 格式支持

### 6.2 代码分割
- 路由级别代码分割
- 组件懒加载
- 第三方库按需导入

### 6.3 缓存策略
- 静态页面缓存
- API 响应缓存
- 图片缓存

## 7. 实现步骤

### 第一阶段：基础架构
1. 设置项目结构
2. 实现主题切换
3. 创建基础布局组件
4. 配置路由系统

### 第二阶段：核心功能
1. 实现博客列表和详情页
2. 添加评论系统
3. 完善时间线功能
4. 开发搜索功能

### 第三阶段：优化和扩展
1. 添加动画效果
2. 优化性能
3. 增加社交分享
4. 完善 SEO

## 8. 技术栈选择

### 前端框架
- Next.js 15
- React 19
- TypeScript 5

### 样式解决方案
- Tailwind CSS
- CSS Modules
- Framer Motion

### 状态管理
- React Context
- Zustand

### 数据存储
- Prisma
- PostgreSQL
- Redis (缓存) 