"use client";
import { timeline } from "./type";
import * as LucideIcons from "lucide-react"; // 任意 icon lib
import TimelineCard from "./timecard";

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* 纵向中轴线 - 使用计算的高度 */}
      <div 
        className="absolute left-4 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500/40 via-teal-500/80 to-teal-500/40
        sm:left-1/2" 
      />
      {/* 事件节点 */}
      {timeline.map((item, idx) => {
        const right = idx % 2 === 0;
        return <div
          key={item.id}
          className={`relative mb-16 flex ${right ? "justify-end sm:justify-end" : "justify-end sm:justify-start"}`}
        >
          {/* 连线圆点 */}
          <span
            className={`absolute top-[52px] left-4 -translate-x-1/2 rounded-full bg-teal-500 p-2 ring-4 ring-background sm:left-1/2`}
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
            className={`absolute flex items-center justify-center h-[40px] w-[150px] bg-card border-2 border-teal-500 left-12 -translate-x-1/2 text-foreground sm:left-1/2`}
          >
            {item.date}
          </div>

          {/* 卡片容器 - 根据 side 决定位置 */}
          <div className={`w-[calc(100%-3rem)] sm:${right ? "mr-auto" : "ml-auto"} sm:w-[calc(50%-2rem)]`}>
            <TimelineCard {...item} />
          </div>
        </div>
      })}
      {/* 底部间距占位 */}
      <div className="h-16" />
    </div>
  );
}
