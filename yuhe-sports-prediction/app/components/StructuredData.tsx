import Script from "next/script"

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "煜赫國際",
    url: "https://www.yuhe-international.com",
    logo: "https://www.yuhe-international.com/logo.png",
    sameAs: [
      "https://www.facebook.com/YuheInternational",
      "https://twitter.com/YuheInternational",
      "https://www.instagram.com/YuheInternational",
    ],
    description: "提供高質量的體育賽事預測，包括足球、籃球等多種運動。專業團隊分析，助您提高勝率。",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TW",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+886-123-456-789",
      contactType: "customer service",
    },
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

