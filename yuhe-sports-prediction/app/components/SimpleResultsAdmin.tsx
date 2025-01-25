"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { updateResults } from "../actions/results"
import type { MatchResult } from "../types/results"

export default function SimpleResultsAdmin({ initialResults = [] }: { initialResults: MatchResult[] }) {
  const [results, setResults] = useState<string>(
    initialResults
      .map((r) => `${r.number},${r.time},${r.event},${r.teams},${r.odds},${r.result},${r.status}`)
      .join("\n"),
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const parsedResults = results.split("\n").map((line) => {
      const [number, time, event, teams, odds, result, status] = line.split(",")
      return { number, time, event, teams, odds, result, status: status as "红" | "黑" }
    })
    await updateResults(parsedResults)
    alert("結果已更新")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={results}
        onChange={(e) => setResults(e.target.value)}
        rows={10}
        placeholder="每行輸入一個結果，格式為：序號,時間,賽事,比賽隊伍,盤口,賽果,輸贏"
        className="font-mono"
      />
      <Button type="submit" className="bg-primary text-primary-foreground">
        更新結果
      </Button>
    </form>
  )
}

