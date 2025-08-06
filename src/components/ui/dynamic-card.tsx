import React from "react"
import { CardData } from "@/types/cards"
import { EssayItem } from "./essay-item"
import { DailyRecordItem } from "./daily-record-item"
import { HobbyCard } from "./hobby-card"
import { ProgressBar } from "./progress-bar"
import { Card } from "./card"

export function DynamicCard({ data }: { data: CardData }) {
  switch (data.type) {
    case 'essay':
      return (
        <EssayItem
          title={data.title}
          content={data.content}
          date={data.date}
          color={data.color}
          className={data.className}
        />
      )
    case 'daily-record':
      return (
        <DailyRecordItem
          content={data.content}
          date={data.date}
          color={data.color}
          className={data.className}
        />
      )
    case 'hobby':
      return (
        <HobbyCard
          name={data.name}
          icon={data.icon}
          desc={data.desc}
          className={data.className}
        />
      )
    case 'skill':
      return (
        <ProgressBar
          name={data.name}
          percentage={data.percentage}
          color={data.color}
          className={data.className}
        />
      )
    case 'technology':
      return (
        <div className={`flex items-center space-x-2 ${data.className || ''}`}>
          <div className={`w-2 h-2 ${data.color} rounded-full`}></div>
          <span className="text-sm">{data.name}</span>
        </div>
      )
    case 'project':
      return (
        <div className={`flex flex-col md:flex-row md:items-center md:justify-between ${data.className || ''}`}>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {data.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className={`px-2 py-1 ${data.tagColors[0]} text-xs rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <span className="text-sm text-gray-500">{data.year}</span>
          </div>
        </div>
      )
    case 'contact':
      return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${data.className || ''}`}>
          <div>
            <h3 className="text-lg font-semibold mb-4">社交媒体</h3>
            <div className="space-y-3">
              {data.social.map((social, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 ${social.bgColor} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-sm">{social.icon}</span>
                  </div>
                  <span className="text-sm">{social.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">邮箱</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {data.email}
            </p>
          </div>
        </div>
      )
    case 'thought':
      return (
        <div className={`prose prose-gray dark:prose-invert max-w-none ${data.className || ''}`}>
          <p>{data.content}</p>
        </div>
      )
    default:
      return null
  }
}