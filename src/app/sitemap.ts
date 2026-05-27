import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo/seo-config"
import { locales } from "@/lib/i18n/config"
import { API_BASE_URL } from "@/lib/constants"

async function fetchSlugs(resource: "transports" | "tours"): Promise<string[]> {
  try {
    const url = new URL(`${API_BASE_URL}/${resource}`)
    url.searchParams.set("limit", "200")
    url.searchParams.set("page", "1")
    const res = await fetch(url.toString(), { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const json = (await res.json()) as { data?: Array<{ slug?: string }>; items?: Array<{ slug?: string }> }
    const items = json.data ?? json.items ?? []
    return items.map((i) => i.slug).filter(Boolean) as string[]
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url
  const routes: MetadataRoute.Sitemap = []

  // Páginas estáticas
  const staticPages: Array<{ path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "",              priority: 1.0, freq: "daily"   },
    { path: "transports",   priority: 1.0, freq: "daily"   },
    { path: "tours",        priority: 0.9, freq: "daily"   },
    { path: "transport-private", priority: 0.9, freq: "weekly" },
    { path: "experiences",  priority: 0.8, freq: "weekly"  },
    { path: "events",       priority: 0.7, freq: "weekly"  },
    { path: "visit",        priority: 0.6, freq: "monthly" },
    { path: "about",        priority: 0.5, freq: "monthly" },
  ]

  locales.forEach((locale) => {
    staticPages.forEach(({ path, priority, freq }) => {
      routes.push({
        url: path ? `${baseUrl}/${locale}/${path}` : `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: freq,
        priority,
      })
    })
  })

  // Páginas dinámicas de transportes
  const transportSlugs = await fetchSlugs("transports")
  transportSlugs.forEach((slug) => {
    locales.forEach((locale) => {
      routes.push({
        url: `${baseUrl}/${locale}/transports/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.95,
      })
    })
  })

  // Páginas dinámicas de tours
  const tourSlugs = await fetchSlugs("tours")
  tourSlugs.forEach((slug) => {
    locales.forEach((locale) => {
      routes.push({
        url: `${baseUrl}/${locale}/tours/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      })
    })
  })

  return routes
}
