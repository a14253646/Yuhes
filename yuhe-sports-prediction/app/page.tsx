import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import UpcomingMatches from "./components/UpcomingMatches"
import OptimizedImage from "./components/OptimizedImage"
import ResultsTable from "./components/ResultsTable"

const pricingPlans = [
  {
    name: "包天方案",
    price: "666U/天",
    winRate: "多場優勢",
    features: ["最低不少於6場", "贏半算贏，輸半算輸", "平局退回料費", "當日無凈勝場次全部退回"],
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

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <section className="text-center mb-8 sm:mb-16">
        <OptimizedImage src="/logo.png" alt="煜赫國際 Logo" width={200} height={100} className="mx-auto mb-4" />
        <h1 className="text-5xl sm:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-primary">煜赫國際</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-4 sm:mb-6 text-muted-foreground font-light">
          本司與多個球賽官方成員有長期穩定的合作通道
        </p>
      </section>

      <section className="mb-8 sm:mb-16 bg-card p-6 sm:p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary">為什麼選擇我們？</h2>
        <ul className="space-y-4 sm:space-y-6 text-card-foreground text-base sm:text-lg">
          <li className="flex items-start">
            <CheckCircle className="text-primary mr-3 h-6 w-6 mt-1 flex-shrink-0" />
            <span className="leading-relaxed">
              公平透明：我們只收取料錢，下注渠道和金額完全由您決定，您的資金完全由您掌控。
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-primary mr-3 h-6 w-6 mt-1 flex-shrink-0" />
            <span className="leading-relaxed">賭球千萬不要自己賭，有渠道買料為什麽要自己賭？</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-primary mr-3 h-6 w-6 mt-1 flex-shrink-0" />
            <span className="leading-relaxed">凡合作過一次的客戶,我們提供不中額外加賠110%返還210%!</span>
          </li>
          <li className="bg-primary/10 p-4 sm:p-6 rounded-lg">
            <div className="flex items-start">
              <CheckCircle className="text-primary mr-3 h-6 w-6 mt-1 flex-shrink-0" />
              <span className="text-primary font-semibold leading-relaxed">
                如果對勝率有疑慮，您可以選擇購買料後不下注，與我們對賭。
              </span>
            </div>
            <p className="mt-3 text-base sm:text-lg leading-relaxed">
              例如，購買 500U 的協議料，不中時將賠付您 1100U（料費 + 雙倍賠付），水位相當於 1.2，讓您更加安心！
            </p>
          </li>
        </ul>
      </section>

      <section id="pricing" className="mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center">我們的價格方案</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-card p-6 sm:p-8 rounded-lg text-center shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary">{plan.name}</h3>
              <p className="text-3xl sm:text-4xl font-bold mb-3 text-card-foreground">{plan.price}</p>
              <p className="text-xl sm:text-2xl mb-4 sm:mb-6 text-primary font-medium">
                {plan.name === "包天方案" ? "中大蛇料" : plan.winRate}
              </p>
              <ul className="text-left mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-base sm:text-lg">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="text-primary mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full text-lg py-6">
                立即購買
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 sm:mb-16 bg-card p-6 sm:p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary">我們的合作理念</h2>
        <p className="text-xl sm:text-2xl text-center mb-6 sm:mb-8 text-card-foreground font-light">
          我們以共贏為目標：
        </p>
        <ul className="space-y-4 sm:space-y-6 text-card-foreground text-base sm:text-lg">
          {[
            "您的每一次盈利，都是我們合作的基石。",
            "我們希望與您長期合作，共創輝煌！",
            "只有您長期盈利，我們才能長期合作下去！",
            "您虧錢我們也是虧，所以我們是最希望你能贏錢的！",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-primary mr-3 h-6 w-6 mt-1 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center">昨日報表</h2>
        <div className="bg-card p-4 sm:p-6 rounded-lg shadow-lg">
          <ResultsTable />
        </div>
      </section>

      <section className="mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center">即將開賽的熱門賽事</h2>
        <UpcomingMatches />
      </section>

      <section className="text-center mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-primary">開始您的盈利之旅</h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-card-foreground leading-relaxed">
          我們提供多種方案滿足您的需求，從單場預測到包天服務，總有一款適合您！
          <br className="hidden sm:inline" />
          請合理安排投注比例，配比好資金比例！
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg sm:text-xl py-6 px-10 w-full sm:w-auto"
        >
          <Link href="#pricing">選擇您的方案</Link>
        </Button>
      </section>
    </div>
  )
}

