export interface TimelineEvent {
  id: string; // slug / 跳转锚点
  date: string; // 2025-05-22
  title: string; // 事件标题
  summary: string; // 摘要
  icon?: string; // lucide-react 图标名，可选
  side?: "left" | "right"; // 双列模式时决定左右
  link?: string; // 链接
}

export const timeline: TimelineEvent[] = [
  {
    id: "biye",
    date: "2018-06-25",
    title: "大学毕业",
    summary: `完成大学学业，获得【理学学士】学位。
    我的成就：
    1. 获得国家励志奖学金
    2. 获得校级优秀毕业生
    3. 获得校级优秀毕业论文
    4. 获得校级优秀毕业论文
    5. 获得校级优秀毕业论文
    6. 获得校级优秀毕业论文
    `,
    icon: "GraduationCap",
    side: "right",
  },
  {
    id: "yjs",
    date: "2021-06-25",
    title: "研究生毕业",
    summary: "完成研究生学业，获得【理学硕士】学位。",
    icon: "GraduationCap",
    side: "left",
  },
  {
    id: "launch4",
    date: "2025-05-22",
    title: "博客正式上线",
    summary: "发布第一篇文章，分享「Hello yukilab!」。",
    icon: "Rocket",
    side: "right",
  },
  {
    id: "launch5",
    date: "2025-05-22",
    title: "博客正式上线",
    summary: "发布第一篇文章，分享「Hello yukilab!」。",
    icon: "Rocket",
    side: "left",
    link: "/doc/blog",
  },
];
