import { Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            由{" "}
            <a
              href="https://twitter.com/yukilab"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              yukilab
            </a>
            {" "}构建。源代码可在{" "}
            <a
              href="https://github.com/yukilab"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            {" "}上获取。
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/yukilab" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com/yukilab" target="_blank" rel="noreferrer">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
} 