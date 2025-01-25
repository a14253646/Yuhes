"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { addResult, deleteResult } from "../actions/results"
import type { MatchResult } from "../types/results"
import { Trash2 } from "lucide-react"

export default function ResultsAdmin({ initialResults = [] }: { initialResults: MatchResult[] }) {
  const [results, setResults] = useState<MatchResult[]>(initialResults)
  const [newResult, setNewResult] = useState({
    number: "",
    time: "",
    event: "",
    teams: "",
    odds: "",
    result: "",
    status: "红" as const,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await addResult(newResult)
    setResults([...results, result])
    setNewResult({
      number: "",
      time: "",
      event: "",
      teams: "",
      odds: "",
      result: "",
      status: "红",
    })
  }

  const handleDelete = async (id: string) => {
    await deleteResult(id)
    setResults(results.filter((r) => r.id !== id))
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-card rounded-lg">
        <Input
          placeholder="序号"
          value={newResult.number}
          onChange={(e) => setNewResult({ ...newResult, number: e.target.value })}
          className="bg-background"
        />
        <Input
          placeholder="时间"
          value={newResult.time}
          onChange={(e) => setNewResult({ ...newResult, time: e.target.value })}
          className="bg-background"
        />
        <Input
          placeholder="赛事"
          value={newResult.event}
          onChange={(e) => setNewResult({ ...newResult, event: e.target.value })}
          className="bg-background"
        />
        <Input
          placeholder="比赛队伍"
          value={newResult.teams}
          onChange={(e) => setNewResult({ ...newResult, teams: e.target.value })}
          className="bg-background"
        />
        <Input
          placeholder="盘口"
          value={newResult.odds}
          onChange={(e) => setNewResult({ ...newResult, odds: e.target.value })}
          className="bg-background"
        />
        <Input
          placeholder="赛果"
          value={newResult.result}
          onChange={(e) => setNewResult({ ...newResult, result: e.target.value })}
          className="bg-background"
        />
        <Select
          value={newResult.status}
          onValueChange={(value) => setNewResult({ ...newResult, status: value as "红" | "黑" })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="输赢" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="红">红</SelectItem>
            <SelectItem value="黑">黑</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="bg-primary text-primary-foreground">
          添加记录
        </Button>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-4 py-2 text-left">序号</th>
              <th className="px-4 py-2 text-left">时间</th>
              <th className="px-4 py-2 text-left">赛事</th>
              <th className="px-4 py-2 text-left">比赛队伍</th>
              <th className="px-4 py-2 text-left">盘口</th>
              <th className="px-4 py-2 text-left">赛果</th>
              <th className="px-4 py-2 text-left">输赢</th>
              <th className="px-4 py-2 text-left">操作</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id} className="border-b border-white/5">
                <td className="px-4 py-2">{result.number}</td>
                <td className="px-4 py-2">{result.time}</td>
                <td className="px-4 py-2">{result.event}</td>
                <td className="px-4 py-2">{result.teams}</td>
                <td className="px-4 py-2 whitespace-pre-line">{result.odds}</td>
                <td className="px-4 py-2">{result.result}</td>
                <td className="px-4 py-2">
                  <span className={`text-${result.status === "红" ? "red-500" : "gray-500"}`}>{result.status}</span>
                </td>
                <td className="px-4 py-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(result.id)}
                    className="hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

