"use client"

import Link from "next/link"

export default function TimelineCard({
  title,
  date,
  summary,
  link,
}: {
  title: string
  date: string
  summary: string
  link?: string
}) {
  return (
    <div
      className={`mt-[52px] w-[calc(50%-2rem)] rounded-lg border bg-card p-6 shadow-md`}
    >
      <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">{title}</h3>
      <p className="text-base text-muted-foreground mb-2">{date}</p>
      {/* 内容限制高度 + 溢出隐藏 */}
      <div className="relative max-h-48 overflow-hidden text-foreground text-base leading-relaxed">
        {summary}

        {/* 渐变遮罩 */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent pointer-events-none"></div>
      </div>
      {/* 查看更多按钮 */}
      {link && (
        <div className="mt-4 text-right">
          <Link
            href={link}
            className="text-base text-teal-600 dark:text-teal-400 hover:underline font-medium"
          >
            查看更多 →
          </Link>
        </div>
      )}
    </div>
  )
}
