"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    document.cookie = "admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
    router.push("/admin/login")
  }

  return (
    <Button onClick={handleLogout} variant="outline">
      登出
    </Button>
  )
}

