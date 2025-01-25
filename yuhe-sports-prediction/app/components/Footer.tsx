import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-muted-foreground">&copy; 2023 煜赫國際. 版權所有.</p>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                服務條款
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                隱私政策
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                聯繫我們
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

