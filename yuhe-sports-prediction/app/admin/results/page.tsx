import { getResults } from "@/app/actions/results"
import SimpleResultsAdmin from "@/app/components/SimpleResultsAdmin"
import LogoutButton from "@/app/components/LogoutButton"

export default async function AdminResultsPage() {
  const results = await getResults()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">更新昨日報表</h1>
        <LogoutButton />
      </div>
      <SimpleResultsAdmin initialResults={results} />
    </div>
  )
}

