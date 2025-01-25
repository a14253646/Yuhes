import Link from "next/link"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "包天方案",
    price: "666U/天",
    winRate: "多場優勢",
    features: ["最低不少於6場", "贏半算贏，輸半算輸", "平局退回料費", "當日無凈勝場次全部退回", "打平退回本金666U"],
  },
  {
    name: "蛇料&精品協議",
    price: "300U-500U/場",
    winRate: "勝率70%-85%",
    features: ["未中返還料費，並額外賠付110%", "平局退費", "贏一半算贏，輸一半算輸"],
  },
  {
    name: "雙控協議",
    price: "1500U/場",
    winRate: "勝率95%",
    features: ["未中返還料費，並額外賠付110%", "平局退費", "贏一半算贏，輸一半算輸"],
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="bg-card p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">包天方案詳情</h2>
        <p className="text-xl mb-6 text-card-foreground">
          我出幾場你打幾場，最低不少於6場。贏半算贏，輸半算輸，平局退回料費。當日無凈勝場次全部退回，打平退回本金666U。
        </p>
      </section>

      <h1 className="text-4xl font-bold mb-12 text-center">價格方案</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-card p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">{plan.name}</h2>
            <p className="text-3xl font-bold mb-2 text-card-foreground">{plan.price}</p>
            <p className="text-xl mb-6 text-primary">{plan.winRate}</p>
            <ul className="text-left mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2 text-card-foreground">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">立即購買</Button>
          </div>
        ))}
      </div>

      <section className="bg-card p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">我們的保障</h2>
        <p className="text-xl mb-6 text-card-foreground">
          如果對勝率有疑慮，您可以選擇購買料後不下注，與我們對賭。 例如，購買 500U 的協議料，不中時將賠付您 1100U（料費
          + 雙倍賠付），水位相當於 1.2，讓您更加安心！
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">合作理念</h2>
        <p className="text-xl mb-8 text-card-foreground">
          我們以共贏為目標。您的每一次盈利，都是我們合作的基石。我們希望與您長期合作，共創輝煌！
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
          <Link href="/contact">聯繫我們</Link>
        </Button>
      </section>

      <section className="bg-card p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">重要提示</h2>
        <p className="text-xl text-card-foreground">
          即便有內幕，但賽場上隨時都可能發生意外，所以任何事都沒有百分之百的保證。我們建議您：
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-card-foreground">
          <li>合理安排投注比例</li>
          <li>配比好資金比例</li>
          <li>長期合作，共同盈利</li>
        </ul>
      </section>
    </div>
  )
}

