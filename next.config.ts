import createMDX from '@next/mdx'
import { NextConfig } from 'next'
 
// 从环境变量获取 basePath，如果没有设置则为空字符串（相对路径）
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = basePath ? `${basePath}/` : ''

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  basePath,
  assetPrefix,
  trailingSlash: true,
  
  images: {
    unoptimized: true,
  },
}
 
const withMDX = createMDX({})
 
export default withMDX(nextConfig)