import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">聯繫我們</h1>

      <section className="mb-16 bg-card p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-primary">即時聊天</h2>
        <p className="mb-6 text-card-foreground">需要即時幫助？加入我們的 Telegram 群組，與客服人員直接對話：</p>
        <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
          <a href="https://t.me/YuheGroupSupport" target="_blank" rel="noopener noreferrer">
            加入 Telegram 群組
          </a>
        </Button>
      </section>

      <section className="bg-card p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-primary">常見問題</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-primary">如何購買預測？</AccordionTrigger>
            <AccordionContent className="text-card-foreground">
              您可以在我們的"購買預測"頁面選擇您感興趣的比賽，然後點擊"購買預測"按鈕。選擇您想要的預測類型（普通或VIP），完成付款後即可查看預測內容。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-primary">如何成為VIP會員？</AccordionTrigger>
            <AccordionContent className="text-card-foreground">
              您可以在"VIP會員"頁面了解VIP會員的福利，並點擊"立即升級VIP"按鈕進行升級。升級過程中您需要選擇會員期限並完成付款。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-primary">如何申請退款？</AccordionTrigger>
            <AccordionContent className="text-card-foreground">
              如果您購買的預測結果不準確，您可以在比賽結束後24小時內在"我的帳戶"頁面申請退款。請參考我們的"賠付政策"頁面了解詳細的退款流程和條件。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}

