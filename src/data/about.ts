import { PageData } from "@/types/cards"

export const aboutData: PageData = {
  title: "关于我",
  subtitle: "你好，我是 Yuki，一名热爱技术的开发者",
  sections: [
    {
      title: "个人简介",
      layout: "single",
      cards: [
        {
          type: 'thought',
          content: "你好！我是 Yuki，一名全栈开发者，目前专注于前端技术栈。我热爱编程，享受通过代码创造价值的过程。"
        },
        {
          type: 'thought',
          content: "这个网站是我记录技术学习、分享生活感悟的个人空间。希望通过文字记录成长轨迹，也希望能与志同道合的朋友交流。"
        },
        {
          type: 'thought',
          content: "我相信技术改变世界，也相信持续学习的力量。在这里，我会分享我的技术心得、项目经验，以及生活中的小确幸。"
        }
      ]
    },
    {
      title: "技能栈",
      layout: "single",
      cards: [
        {
          type: 'skill',
          name: "前端开发",
          percentage: 90,
          color: "bg-blue-500"
        },
        {
          type: 'skill',
          name: "后端开发",
          percentage: 75,
          color: "bg-green-500"
        },
        {
          type: 'skill',
          name: "数据库",
          percentage: 60,
          color: "bg-purple-500"
        },
        {
          type: 'skill',
          name: "DevOps",
          percentage: 40,
          color: "bg-orange-500"
        }
      ]
    },
    {
      title: "技术栈",
      layout: "grid",
      gridCols: 2,
      cards: [
        {
          type: 'technology',
          name: "React / Next.js",
          color: "bg-blue-500"
        },
        {
          type: 'technology',
          name: "TypeScript",
          color: "bg-blue-500"
        },
        {
          type: 'technology',
          name: "Tailwind CSS",
          color: "bg-blue-500"
        },
        {
          type: 'technology',
          name: "Framer Motion",
          color: "bg-blue-500"
        },
        {
          type: 'technology',
          name: "Radix UI",
          color: "bg-blue-500"
        },
        {
          type: 'technology',
          name: "Node.js",
          color: "bg-green-500"
        },
        {
          type: 'technology',
          name: "Express.js",
          color: "bg-green-500"
        },
        {
          type: 'technology',
          name: "PostgreSQL",
          color: "bg-green-500"
        },
        {
          type: 'technology',
          name: "Redis",
          color: "bg-green-500"
        },
        {
          type: 'technology',
          name: "Docker",
          color: "bg-green-500"
        }
      ]
    },
    {
      title: "项目经验",
      layout: "list",
      cards: [
        {
          type: 'project',
          title: "个人博客系统",
          description: "基于 Next.js 和 TypeScript 构建的个人博客系统，支持 Markdown 渲染、主题切换、响应式设计等功能。",
          year: "2024年",
          tags: ["Next.js", "TypeScript", "Tailwind CSS"],
          tagColors: ["bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"]
        },
        {
          type: 'project',
          title: "电商管理系统",
          description: "全栈电商管理系统，包含商品管理、订单处理、用户管理、数据统计等功能模块。",
          year: "2023年",
          tags: ["React", "Node.js", "PostgreSQL"],
          tagColors: ["bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"]
        }
      ]
    },
    {
      title: "联系方式",
      layout: "single",
      cards: [
        {
          type: 'contact',
          email: "hello@yukilab.dev",
          social: [
            {
              name: "GitHub",
              icon: "G",
              bgColor: "bg-blue-500",
              url: "https://github.com/yuki"
            },
            {
              name: "LinkedIn",
              icon: "L",
              bgColor: "bg-blue-600",
              url: "https://linkedin.com/in/yuki"
            }
          ]
        }
      ]
    }
  ]
} 