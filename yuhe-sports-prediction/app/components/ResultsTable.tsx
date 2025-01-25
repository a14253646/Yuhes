import { getResults } from "../actions/results"
import type { MatchResult } from "../types/results"

export default async function ResultsTable() {
  const results = await getResults()

  return (
    <div className="overflow-x-auto">
      <div className="relative">
        <div
          className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-10"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17936442-7799-4a0d-bca1-11d2685995e5.jpg-xtmGWYiHCBOsmnX0OAuOGFoUrUO3zB.jpeg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        />
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-4 py-2 text-left font-medium">序号</th>
              <th className="px-4 py-2 text-left font-medium">时间</th>
              <th className="px-4 py-2 text-left font-medium">赛事</th>
              <th className="px-4 py-2 text-left font-medium">比赛队伍</th>
              <th className="px-4 py-2 text-left font-medium">盘口</th>
              <th className="px-4 py-2 text-left font-medium">赛果</th>
              <th className="px-4 py-2 text-left font-medium">输赢</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="px-4 py-3">{result.number}</td>
                <td className="px-4 py-3">{result.time}</td>
                <td className="px-4 py-3">{result.event}</td>
                <td className="px-4 py-3">{result.teams}</td>
                <td className="px-4 py-3 whitespace-pre-line">{result.odds}</td>
                <td className="px-4 py-3">{result.result}</td>
                <td className="px-4 py-3">
                  <span className={`text-${result.status === "红" ? "red-500" : "gray-500"}`}>{result.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

