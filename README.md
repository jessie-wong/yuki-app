# Yuki Lab - 个人空间集合

欢迎来到 Yuki Lab！这是我的个人空间，用于分享技术学习、生活感悟和项目经验。

## 🎯 项目目标

作为一个个人空间集合，这个网站旨在：

- 📝 **记录成长**：通过文字记录技术学习和生活感悟
- 🚀 **分享经验**：分享项目开发和技术学习的心得体会
- 💡 **交流思想**：与志同道合的朋友交流技术和生活
- 📚 **知识沉淀**：将学习到的知识系统化整理

## ✨ 功能特性

### 🏠 首页
- 个人介绍和技能展示
- 最新动态和项目状态
- 快速导航到各个功能模块

### 📖 博客
- 技术文章分享
- Markdown 支持
- 代码高亮显示
- 响应式设计

### 🌟 生活分享
- 生活感悟和随笔
- 日常记录和兴趣爱好
- 推荐阅读和书籍分享

### 📅 成长轨迹
- 时间线展示重要里程碑
- 学习和生活的重要时刻
- 可视化的成长历程

### 👤 关于我
- 个人简介和技能栈
- 项目经验展示
- 联系方式

## 🛠️ 技术栈

- **前端框架**: Next.js 15 + React 19
- **开发语言**: TypeScript
- **样式方案**: Tailwind CSS
- **内容管理**: MDX
- **部署平台**: Vercel

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm/yarn/pnpm

### 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 📁 项目结构

```
yuki-app/
├── src/
│   ├── app/                 # 页面路由
│   │   ├── page.tsx        # 首页
│   │   ├── blog/           # 博客相关页面
│   │   ├── life/           # 生活分享页面
│   │   ├── timeline/       # 时间线页面
│   │   └── about/          # 关于页面
│   ├── components/         # 组件库
│   │   ├── layout/         # 布局组件
│   │   ├── blog/           # 博客组件
│   │   ├── timeline/       # 时间线组件
│   │   └── ui/             # 通用UI组件
│   ├── lib/                # 工具函数
│   ├── markdown/           # Markdown 内容
│   └── types/              # TypeScript 类型定义
├── public/                 # 静态资源
└── docs/                   # 项目文档
```

## 🎨 设计理念

- **简约现代**：注重留白和层次感
- **响应式设计**：适配各种设备屏幕
- **深色模式**：支持浅色/深色主题切换
- **可访问性**：遵循 Web 可访问性标准
- **性能优化**：快速加载和流畅交互

## 📝 内容管理

### 添加博客文章
在 `src/markdown/` 目录下创建 `.md` 或 `.mdx` 文件：

```markdown
---
title: "文章标题"
date: "2024-01-20"
tags: ["技术", "前端"]
---

文章内容...
```

### 更新时间线
在 `src/components/timeline/timeline.tsx` 中添加新的时间节点。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 📞 联系我

- 📧 Email: yuki@example.com
- 🌐 GitHub: github.com/yuki
- 📍 位置: 北京，中国

---

**Yuki Lab** - 记录成长，分享生活 ✨
