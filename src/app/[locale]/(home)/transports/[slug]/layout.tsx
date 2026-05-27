import type React from "react"
import { generateTransportSEO, generateTransportJsonLd, siteConfig } from "@/lib/seo/seo-config"
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

  try {
    const url = new URL(`${API_BASE_URL}/transports/slug/${slug}`)
    url.searchParams.set("lang", locale)

    const response = await fetch(url.toString(), { next: { revalidate: 60 } })
    if (!response.ok) throw new Error("Transport not found")

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
    return {
      title: `Transporte | ${siteConfig.name}`,
      description: "Reserva transporte confiable para tu viaje.",
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

export default async function TransportDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: rawLocale, slug } = await params
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale

  let jsonLd: string | null = null
  try {
    const url = new URL(`${API_BASE_URL}/transports/slug/${slug}`)
    url.searchParams.set("lang", locale)
    const response = await fetch(url.toString(), { next: { revalidate: 60 } })
    if (response.ok) {
      const transport = unwrapTransportResponse(await response.json())
      jsonLd = generateTransportJsonLd({
        title: transport.title || "Transport",
        description: transport.description || "",
        currentPrice: transport.currentPrice || 0,
        image: transport.images?.[0]?.url,
        origin: transport.origin?.name,
        destination: transport.destination?.name,
        url: `${siteConfig.url}/${locale}/transports/${slug}`,
      })
    }
  } catch {
    // JSON-LD es opcional, no bloquea el render
  }

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
      {children}
    </>
  )
}
