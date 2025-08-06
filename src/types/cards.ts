export type CardType = 
  | 'essay'           // 生活随笔
  | 'daily-record'    // 日常记录
  | 'hobby'          // 兴趣爱好
  | 'skill'          // 技能进度条
  | 'technology'     // 技术栈
  | 'project'        // 项目经验
  | 'contact'        // 联系方式
  | 'thought'        // 生活感悟

export interface BaseCardData {
  type: CardType
  className?: string
}

export interface EssayCardData extends BaseCardData {
  type: 'essay'
  title: string
  content: string
  date: string
  color: string
}

export interface DailyRecordCardData extends BaseCardData {
  type: 'daily-record'
  content: string
  date: string
  color: string
}

export interface HobbyCardData extends BaseCardData {
  type: 'hobby'
  name: string
  icon: string
  desc: string
}

export interface SkillCardData extends BaseCardData {
  type: 'skill'
  name: string
  percentage: number
  color: string
}

export interface TechnologyCardData extends BaseCardData {
  type: 'technology'
  name: string
  color: string
}

export interface ProjectCardData extends BaseCardData {
  type: 'project'
  title: string
  description: string
  year: string
  tags: string[]
  tagColors: string[]
}

export interface ContactCardData extends BaseCardData {
  type: 'contact'
  email: string
  social: {
    name: string
    icon: string
    bgColor: string
    url?: string
  }[]
}

export interface ThoughtCardData extends BaseCardData {
  type: 'thought'
  content: string
}

export type CardData = 
  | EssayCardData
  | DailyRecordCardData
  | HobbyCardData
  | SkillCardData
  | TechnologyCardData
  | ProjectCardData
  | ContactCardData
  | ThoughtCardData

export interface Section {
  title: string
  cards: CardData[]
  layout?: 'grid' | 'list' | 'single'
  gridCols?: number
}

export interface PageData {
  title: string
  subtitle: string
  sections: Section[]
}