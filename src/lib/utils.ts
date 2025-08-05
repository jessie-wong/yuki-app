import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(filename: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return basePath ? `${basePath}/${filename}` : `/${filename}`
} 