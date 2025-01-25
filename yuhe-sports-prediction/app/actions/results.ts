"use server"

import type { MatchResult } from "../types/results"
import { cookies } from "next/headers"

const COOKIE_NAME = "match-results"

export async function getResults(): Promise<MatchResult[]> {
  const cookieStore = cookies()
  const savedResults = cookieStore.get(COOKIE_NAME)
  return savedResults ? JSON.parse(savedResults.value) : []
}

export async function saveResults(results: MatchResult[]) {
  const cookieStore = cookies()
  cookieStore.set(COOKIE_NAME, JSON.stringify(results))
}

export async function updateResults(results: Omit<MatchResult, "id">[]) {
  const updatedResults = results.map((result, index) => ({
    ...result,
    id: (index + 1).toString(),
  }))
  await saveResults(updatedResults)
  return updatedResults
}

// 保留之前的 addResult 和 deleteResult 函數，以防將來需要
export async function addResult(result: Omit<MatchResult, "id">) {
  const results = await getResults()
  const newResult = {
    ...result,
    id: Date.now().toString(),
  }
  await saveResults([...results, newResult])
  return newResult
}

export async function deleteResult(id: string) {
  const results = await getResults()
  await saveResults(results.filter((r) => r.id !== id))
}

