import { Button } from "@/components/ui/button"

export default function VIPMemberPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">VIP 會員專區</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">尊享 VIP 福利</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "多場預測折扣", description: "購買多場預測享受優惠價格" },
            { title: "私人客服", description: "24/7 專屬客服支援" },
            { title: "專屬分析報告", description: "深度賽事分析，助您做出明智決策" },
          ].map((benefit, index) => (
            <div key={index} className="bg-card p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-primary">{benefit.title}</h3>
              <p className="text-card-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mb-16 bg-card p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-primary">成為 VIP 會員</h2>
        <p className="mb-8 text-lg text-card-foreground">
          加入我們的 VIP 會員計劃，享受獨家優惠和專業服務。
          <br />
          讓您的投資更有保障，贏面更大！
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          立即升級 VIP
        </Button>
      </section>
    </div>
  )
}

