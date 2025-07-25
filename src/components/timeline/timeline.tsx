"use client";
import { timeline } from "./type";
import * as LucideIcons from "lucide-react"; // 任意 icon lib
import { motion } from "framer-motion"; // 动画
import TimelineCard from "./timecard";

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl px-4 py-16">
      {/* 纵向中轴线 */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500/40 via-teal-500/80 to-teal-500/40" />
      {/* 事件节点 */}
      {timeline.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          className={`relative mb-16 flex ${
            item.side === "right" ? "justify-start" : "justify-end"
          }`}
        >
          {/* 连线圆点 */}
          <span
            className={`absolute top-[52px] left-1/2 -translate-x-1/2 rounded-full bg-teal-500 p-2 ring-4 ring-white dark:ring-gray-900`}
          >
            {item.icon &&
              (() => {
                // @ts-expect-error - Dynamically access icon component
                const IconComponent = LucideIcons[item.icon];
                return IconComponent ? (
                  <IconComponent className="h-4 w-4 text-white" />
                ) : null;
              })()}
          </span>

          <div
            className={`absolute flex items-center justify-center h-[40px] w-[150px] bg-white border-2 border-teal-500 left-1/2 -translate-x-1/2`}
          >
            {item.date}
          </div>

          {/* 卡片 */}
          <TimelineCard {...item} />
        </motion.div>
      ))}
    </div>
  );
}
