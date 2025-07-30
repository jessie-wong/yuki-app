# Yuki App 项目结构分析文档

## 项目概述

**Yuki App** 是一个基于 Next.js 15 的个人博客和时间线展示应用，采用现代化的技术栈构建，支持 MDX 内容管理和响应式设计。

## 技术栈

### 核心技术
- **Next.js 15.4.4** - React 全栈框架，支持 App Router
- **React 19.1.0** - 前端 UI 库
- **TypeScript 5** - 类型安全的 JavaScript
- **Tailwind CSS 3.4.1** - 原子化 CSS 框架

### 内容管理
- **MDX** - Markdown + JSX 混合格式
- **@next/mdx** - Next.js MDX 集成
- **next-mdx-remote** - 运行时 MDX 编译
- **@tailwindcss/typography** - Markdown 样式支持

### 开发工具
- **ESLint** - 代码质量检查
- **PostCSS** - CSS 后处理器
- **Autoprefixer** - CSS 前缀自动添加

### 动画和图标
- **Framer Motion** - 动画库
- **Lucide React** - 图标库

### 内容增强
- **rehype-highlight** - 代码语法高亮
- **rehype-slug** - 标题锚点生成
- **rehype-autolink-headings** - 标题自动链接
- **remark-gfm** - GitHub Flavored Markdown 支持

## 项目结构

```
yuki-app/
├── 📁 src/                          # 源代码目录
│   ├── 📁 app/                      # Next.js App Router
│   │   ├── 📁 doc/                  # 文档页面
│   │   │   └── 📁 [slug]/           # 动态路由
│   │   │       └── page.tsx         # 文档页面组件
│   │   ├── 📁 mdx-page/             # MDX 页面
│   │   │   └── page.tsx             # MDX 页面组件
│   │   ├── favicon.ico              # 网站图标
│   │   ├── globals.css              # 全局样式
│   │   ├── layout.tsx               # 根布局组件
│   │   └── page.tsx                 # 首页组件
│   ├── 📁 components/               # 可复用组件
│   │   └── 📁 timeline/             # 时间线组件
│   │       ├── timecard.tsx         # 时间卡片组件
│   │       ├── timeline.tsx         # 时间线主组件
│   │       └── type.ts              # 类型定义
│   ├── 📁 markdown/                 # MDX 内容文件
│   │   ├── blob.mdx                 # 博客文章
│   │   └── welcome.mdx              # 欢迎页面
│   └── mdx-components.tsx           # MDX 组件配置
├── 📁 public/                       # 静态资源
│   ├── file.svg                     # 文件图标
│   ├── globe.svg                    # 地球图标
│   ├── next.svg                     # Next.js 图标
│   ├── vercel.svg                   # Vercel 图标
│   └── window.svg                   # 窗口图标
├── package.json                     # 项目配置和依赖
├── next.config.ts                   # Next.js 配置
├── tailwind.config.ts               # Tailwind CSS 配置
├── tsconfig.json                    # TypeScript 配置
├── eslint.config.mjs                # ESLint 配置
├── postcss.config.mjs               # PostCSS 配置
└── README.md                        # 项目说明
```

## 核心功能模块

### 1. 时间线展示系统

**位置**: `src/components/timeline/`

#### 主要组件：
- **Timeline** (`timeline.tsx`) - 时间线主容器
  - 使用 Framer Motion 实现动画效果
  - 支持左右交替布局
  - 响应式设计，适配不同屏幕尺寸

- **TimelineCard** (`timecard.tsx`) - 时间卡片组件
  - 展示事件标题、日期和摘要
  - 支持链接跳转
  - 内容高度限制和渐变遮罩

- **类型定义** (`type.ts`) - 时间线数据结构
  ```typescript
  interface TimelineEvent {
    id: string;           // 唯一标识
    date: string;         // 日期
    title: string;        // 标题
    summary: string;      // 摘要
    icon?: string;        // 图标名称
    side?: "left" | "right"; // 布局位置
    link?: string;        // 链接地址
  }
  ```

#### 特色功能：
- 🎨 渐变中轴线设计
- ✨ 滚动触发动画
- 🎯 动态图标支持
- 📱 响应式布局
- 🔗 可选的链接跳转

### 2. MDX 内容管理系统

**位置**: `src/app/doc/[slug]/` 和 `src/markdown/`

#### 实现方式：
- **动态路由**: 使用 Next.js 动态路由 `[slug]` 支持任意文档路径
- **运行时编译**: 使用 `next-mdx-remote` 实现 MDX 的运行时编译
- **静态生成**: 通过 `generateStaticParams` 预生成已知页面

#### 功能特性：
- 📝 支持完整的 Markdown 语法
- 🎨 代码语法高亮
- 🔗 自动标题锚点
- 📱 响应式排版
- 🎯 SEO 优化

#### 配置的插件：
```typescript
// 代码高亮
rehypeHighlight
// 标题锚点
rehypeSlug
// 自动链接
rehypeAutolinkHeadings
// GitHub 风格 Markdown
remarkGfm
```

### 3. 样式系统

**位置**: `tailwind.config.ts` 和 `src/app/globals.css`

#### Tailwind CSS 配置：
- 集成 `@tailwindcss/typography` 插件
- 支持 MDX 内容样式
- 自定义渐变背景
- 响应式断点配置

#### 字体配置：
- **Geist Sans** - 主要字体
- **Geist Mono** - 等宽字体
- 支持暗色模式

## 路由结构

### 页面路由
```
/                    # 首页 - 时间线展示
/doc/[slug]         # 动态文档页面
/mdx-page           # MDX 页面示例
```

### 静态路由
- `/doc/welcome` - 欢迎页面
- `/doc/blob` - 博客文章

## 开发脚本

```json
{
  "dev": "next dev --turbopack",    # 开发服务器（使用 Turbopack）
  "build": "next build",            # 生产构建
  "start": "next start",            # 生产服务器
  "lint": "next lint"               # 代码检查
}
```

## 部署配置

### 构建优化
- 使用 Turbopack 加速开发
- 静态页面生成
- 图片优化
- 代码分割

### 性能特性
- ⚡ 快速页面加载
- 🎯 SEO 友好
- 📱 移动端优化
- 🌙 暗色模式支持

## 内容管理

### MDX 文件结构
```markdown
---
title: 文章标题
---

# 文章内容
支持完整的 Markdown 语法
```

### 时间线数据管理
时间线数据存储在 `src/components/timeline/type.ts` 中，支持：
- 事件添加和修改
- 图标配置
- 链接跳转
- 布局控制

## 扩展性

### 组件扩展
- 模块化组件设计
- TypeScript 类型安全
- 可复用的样式系统

### 内容扩展
- 支持任意 MDX 文件
- 动态路由支持
- 静态生成优化

### 功能扩展
- 主题切换
- 搜索功能
- 评论系统
- 分析统计

## 最佳实践

### 代码组织
- 组件按功能模块分组
- 类型定义集中管理
- 样式使用 Tailwind 原子类

### 性能优化
- 图片懒加载
- 代码分割
- 静态生成
- 缓存策略

### 用户体验
- 响应式设计
- 平滑动画
- 无障碍访问
- 加载状态

## 总结

Yuki App 是一个现代化的个人博客应用，具有以下特点：

1. **技术先进**: 使用最新的 Next.js 15 和 React 19
2. **功能完整**: 时间线展示 + MDX 内容管理
3. **设计精美**: 响应式布局 + 动画效果
4. **开发友好**: TypeScript + ESLint + 热重载
5. **性能优秀**: 静态生成 + 代码分割 + 图片优化

该项目为个人博客和内容展示提供了完整的解决方案，具有良好的扩展性和维护性。 