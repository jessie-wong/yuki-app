import { PageData } from "@/types/cards"

export const lifeData: PageData = {
  title: "生活感悟",
  subtitle: "记录生活中的小确幸、思考和感悟",
  sections: [
    {
      title: "生活随笔",
      layout: "single",
      cards: [
        {
          type: 'essay',
          title: "关于工作与生活的平衡",
          content: "最近在思考如何在忙碌的工作中保持内心的平静...",
          date: "2024-01-15",
          color: "border-green-400"
        },
        {
          type: 'essay',
          title: "学习新技术的乐趣",
          content: "每次学习新技术都像重新认识这个世界...",
          date: "2024-01-10",
          color: "border-blue-400"
        },
        {
          type: 'essay',
          title: "阅读的力量",
          content: "最近重读了《深入理解计算机系统》，有了新的感悟...",
          date: "2024-01-05",
          color: "border-purple-400"
        }
      ]
    },
    {
      title: "日常记录",
      layout: "single",
      cards: [
        {
          type: 'daily-record',
          content: "今天学会了使用 Framer Motion 制作动画",
          date: "2024-01-20",
          color: "bg-green-400"
        },
        {
          type: 'daily-record',
          content: "读完了《原子习惯》，开始实践微习惯",
          date: "2024-01-18",
          color: "bg-blue-400"
        },
        {
          type: 'daily-record',
          content: "尝试了新的咖啡豆，味道很不错",
          date: "2024-01-16",
          color: "bg-purple-400"
        },
        {
          type: 'daily-record',
          content: "开始学习吉他，希望能弹奏喜欢的歌曲",
          date: "2024-01-12",
          color: "bg-orange-400"
        }
      ]
    },
    {
      title: "兴趣爱好",
      layout: "grid",
      gridCols: 4,
      cards: [
        {
          type: 'hobby',
          name: "编程",
          icon: "💻",
          desc: "热爱写代码，享受创造的过程"
        },
        {
          type: 'hobby',
          name: "阅读",
          icon: "📚",
          desc: "喜欢技术书籍和科幻小说"
        },
        {
          type: 'hobby',
          name: "音乐",
          icon: "🎵",
          desc: "正在学习吉他，喜欢各种音乐"
        },
        {
          type: 'hobby',
          name: "咖啡",
          icon: "☕",
          desc: "咖啡爱好者，喜欢尝试不同豆子"
        }
      ]
    },
    {
      title: "生活感悟",
      layout: "single",
      cards: [
        {
          type: 'thought',
          content: "生活就像编程一样，需要不断地调试和优化。有时候会遇到 bug，但只要保持耐心和坚持，总能找到解决方案。"
        },
        {
          type: 'thought',
          content: "最近在思考如何平衡工作与生活。就像代码需要模块化一样，生活也需要合理的规划和分配。"
        },
        {
          type: 'thought',
          content: "每一次的学习和尝试，都是对自己的一次升级。无论是技术上的进步，还是生活中的感悟，都值得被记录和分享。"
        }
      ]
    }
  ]
} 