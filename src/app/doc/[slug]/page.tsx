import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

const SUFFIX = [".md", ".mdx"];

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
  let contentFilePath = null;
  for (const ext of SUFFIX) {
    const filePath = path.join(process.cwd(), "src/markdown", `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      contentFilePath = filePath;
      break;
    }
  }
  if (!contentFilePath) {
    notFound();
  }

  // 读取Markdown内容
  const source = fs.readFileSync(contentFilePath, "utf8");

  // 编译Markdown为React组件
  const res = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        // 在 MDX 文件中使用 GFM 语法（比如表格、任务列表、删除线等）；
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          // 代码高亮
          rehypeHighlight,
          // hash跳转，下面两个好像都需要
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
    // 动态导入时，需要使用 getMDXComponents 获取组件
    components: getMDXComponents({}),
  });
   
    return (
      <article className="prose mx-auto py-8 px-4 max-w-3xl">
        {res.content}
      </article>
    );
  }
   
  export function generateStaticParams() {
    return [{ slug: 'welcome' }, { slug: 'blob' }]
  }
   
  export const dynamicParams = false