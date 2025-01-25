import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-primary">
          煜赫國際
        </Link>
        <Button
          variant="outline"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base hidden sm:inline-flex"
        >
          聯繫
        </Button>
        <Button variant="ghost" className="sm:hidden" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <nav className="flex justify-center items-center space-x-6 mt-2 sm:mt-0 bg-secondary py-2 px-6 rounded-full w-full sm:w-auto">
        <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
          首頁
        </Link>
        <Link
          href="/pricing"
          className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
        >
          價格方案
        </Link>
        <Link
          href="/vip"
          className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
        >
          VIP專區
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
        >
          聯繫我們
        </Link>
      </nav>
    </header>
  )
}

