import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import StructuredData from "./components/StructuredData"
import FloatingTelegramButton from "./components/FloatingTelegramButton"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "煜赫國際 - 專業體育預測",
    template: "%s | 煜赫國際",
  },
  description: "提供高質量的體育賽事預測，包括足球、籃球等多種運動。專業團隊分析，助您提高勝率。",
  keywords: ["體育預測", "足球預測", "籃球預測", "賽事分析", "煜赫國際"],
  authors: [{ name: "煜赫國際" }],
  creator: "煜赫國際",
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://www.yuhe-international.com",
    title: "煜赫國際 - 您的體育預測專家",
    description: "獲取專業的體育賽事預測，提高您的投注勝率。",
    siteName: "煜赫國際",
    images: [
      {
        url: "https://www.yuhe-international.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "煜赫國際 - 專業體育預測",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "煜赫國際 - 專業體育預測",
    description: "獲取專業的體育賽事預測，提高您的投注勝率。",
    images: ["https://www.yuhe-international.com/twitter-image.jpg"],
    creator: "@YuheInternational",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.className} bg-background text-foreground`}>
        <StructuredData />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingTelegramButton />
      </body>
    </html>
  )
}

