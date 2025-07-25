import Link from "next/link";

export default function TimelineCard({
  title,
  date,
  summary,
  link,
}: {
  title: string;
  date: string;
  summary: string;
  link?: string;
}) {
  return (
    <div
      className={`mt-[52px] w-[calc(50%-2rem)] rounded-lg border bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-900`}
    >
      <h3 className="text-lg font-semibold text-teal-600">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      {/* 内容限制高度 + 溢出隐藏 */}
      <div className="relative max-h-48 overflow-hidden text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        {summary}

        {/* 渐变遮罩 */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-zinc-800 to-transparent pointer-events-none"></div>
      </div>
      {/* 查看更多按钮 */}
      {link && (
        <div className="mt-4 text-right">
          <Link
            href={link}
            className="text-sm text-teal-500 hover:underline font-medium"
          >
            查看更多 →
          </Link>
        </div>
      )}
    </div>
  );
}
