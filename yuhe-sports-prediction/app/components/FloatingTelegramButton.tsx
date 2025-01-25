import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function FloatingTelegramButton() {
  return (
    <a
      href="https://t.me/YuheGroupSupport"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
    >
      <Button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">聯繫我們的Telegram</span>
      </Button>
    </a>
  )
}

