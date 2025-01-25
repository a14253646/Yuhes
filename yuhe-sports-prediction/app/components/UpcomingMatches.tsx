import { Button } from "@/components/ui/button"
import Link from "next/link"

const matches = [
  { teams: "曼聯 vs 曼城", time: "2023-05-20 20:00", analysis: "曼聯主場優勢，曼城近期狀態不佳" },
  { teams: "巴塞羅那 vs 皇家馬德里", time: "2023-05-21 22:00", analysis: "兩隊實力相當，可能是一場高進球的比賽" },
  { teams: "拜仁慕尼黑 vs 多特蒙德", time: "2023-05-22 21:30", analysis: "拜仁近期表現出色，有望主場取勝" },
]

export default function UpcomingMatches() {
  return (
    <div className="space-y-4">
      {matches.map((match, index) => (
        <div
          key={index}
          className="bg-card p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">{match.teams}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-2">{match.time}</p>
            <p className="text-sm sm:text-base text-card-foreground">{match.analysis}</p>
          </div>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto mt-2 sm:mt-0"
          >
            <Link href="#pricing">查看預測方案</Link>
          </Button>
        </div>
      ))}
    </div>
  )
}

