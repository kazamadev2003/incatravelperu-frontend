import type React from "react"
import { generateTransportSEO } from "@/lib/seo/seo-config"
import { API_BASE_URL } from "@/lib/constants"
import { defaultLocale, isValidLocale, type Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

type TransportSeoResponse = {
  title?: string
  description?: string
  currentPrice?: number
  images?: Array<{ url?: string }>
  origin?: { name?: string }
  destination?: { name?: string }
}

function unwrapTransportResponse(data: unknown): TransportSeoResponse {
  if (data && typeof data === "object" && "data" in data) {
    return (data as { data: TransportSeoResponse }).data
  }
  return data as TransportSeoResponse
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale

  // Fetch transport data for dynamic SEO
  try {
    const url = new URL(`${API_BASE_URL}/transports/slug/${slug}`)
    url.searchParams.set("lang", locale)

    const response = await fetch(url.toString(), {
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error("Transport not found")
    }

    const transport = unwrapTransportResponse(await response.json())

    return generateTransportSEO(
      locale,
      {
        title: transport.title || "Transport",
        description: transport.description || "Reserva transporte confiable para tu viaje.",
        currentPrice: transport.currentPrice || 0,
        image: transport.images?.[0]?.url,
        origin: transport.origin?.name,
        destination: transport.destination?.name,
      },
      slug,
    )
  } catch {
    // Fallback SEO if data fetch fails
    return {
      title: `Transport | eTourism`,
      description: "Book reliable transportation with eTourism.",
      alternates: {
        languages: {
          es: `/es/transports/${slug}`,
          en: `/en/transports/${slug}`,
          fr: `/fr/transports/${slug}`,
          it: `/it/transports/${slug}`,
          de: `/de/transports/${slug}`,
          pt: `/pt/transports/${slug}`,
          zh: `/zh/transports/${slug}`,
          ja: `/ja/transports/${slug}`,
          ru: `/ru/transports/${slug}`,
        },
      },
    }
  }
}

export default function TransportDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
