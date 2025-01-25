import { Button } from "@/components/ui/button"
import UpcomingMatches from "../components/UpcomingMatches"

export default function PredictionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">購買預測</h1>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">即將開賽的熱門賽事</h2>
        <UpcomingMatches />
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        {[
          { title: "普通預測", price: "$100", refund: "不中退費100%" },
          { title: "VIP 預測", price: "$200", refund: "不中退費200%" },
        ].map((option, index) => (
          <div key={index} className="bg-card p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">{option.title}</h3>
            <p className="text-3xl font-bold mb-4 text-card-foreground">{option.price}</p>
            <p className="mb-6 text-muted-foreground">{option.refund}</p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">立即購買</Button>
          </div>
        ))}
      </section>

      <section className="text-center bg-card p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary">距離下一場比賽開始還有</h2>
        <div className="text-4xl font-bold text-primary mb-4" id="countdown">
          02:30:15
        </div>
        <p className="text-card-foreground">請在比賽開始前購買預測以獲得最佳效果</p>
      </section>
    </div>
  )
}

