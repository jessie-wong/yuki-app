"use client";
import Link from "next/link";

interface BlogSidebarProps {
  categories: string[];
  tags: string[];
  selectedCategory?: string;
  selectedTag?: string;
}

export default function BlogSidebar({ categories, tags, selectedCategory = "", selectedTag = "" }: BlogSidebarProps) {
  return (
    <aside className="w-36 shrink-0 sticky top-24 self-start">
      <div className="mb-8">
        <h3 className="font-semibold mb-3 text-base">类别</h3>
        <ul className="flex flex-col gap-3">
          <li>
            <Link href="/blog" legacyBehavior>
              <a className={`block rounded-lg px-3 py-2 transition-colors text-sm font-medium cursor-pointer ${!selectedCategory ? "bg-primary/10 text-primary font-bold shadow" : "hover:bg-gray-100 text-gray-700"}`}>全部</a>
            </Link>
          </li>
          {categories.map(cat => (
            <li key={cat}>
              <Link href={`/blog?category=${encodeURIComponent(cat)}`} legacyBehavior>
                <a className={`block rounded-lg px-3 py-2 transition-colors text-sm font-medium cursor-pointer ${selectedCategory === cat ? "bg-primary/10 text-primary font-bold shadow" : "hover:bg-gray-100 text-gray-700"}`}>{cat}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-base">标签</h3>
        <ul className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <li key={tag}>
              <Link href={`/blog?tag=${encodeURIComponent(tag)}`} legacyBehavior>
                <a className={`inline-block rounded-full px-3 py-1 transition-colors text-xs font-medium cursor-pointer border ${selectedTag === tag ? "bg-primary/10 text-primary border-primary font-bold shadow" : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"}`}>{tag}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}