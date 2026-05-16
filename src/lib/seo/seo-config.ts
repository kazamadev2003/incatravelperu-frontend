import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"

const locales = ["es", "en", "fr", "it", "de", "pt", "zh", "ja", "ru"] as const
type LocaleSEOType = "home" | "tours" | "transports" | "transport-private" | "experiences"

export const siteConfig = {
  name: "Inca Travel Peru - Tourism & Transport Booking",
  description: "Book tours and transportation services worldwide. Find the best travel experiences.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://cabanacondecuscobybus.com",
  ogImage: "https://res.cloudinary.com/ddbzpbrje/image/upload/v1767086141/ChatGPT_Image_30_dic_2025_04_15_12_b1t3nf.png",
}

function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl
  return `${siteConfig.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`
}

export const seoTranslations: Record<
  Locale,
  {
    title: string
    description: string
    keywords: string[]
    toursTitle: string
    toursDescription: string
    transportsTitle: string
    transportsDescription: string
    privateTransportsTitle: string
    privateTransportsDescription: string
    experiencesTitle: string
    experiencesDescription: string
  }
> = {
  es: {
    title: "Inca Travel Peru - Reserva Tours y Transporte | Viajes Internacionales",
    description:
      "Descubre y reserva los mejores tours y servicios de transporte en todo el mundo. Experiencias de viaje auténticas y asequibles.",
    keywords: ["tours", "viajes", "transporte", "reservas", "turismo", "vacaciones", "experiencias"],
    toursTitle: "Tours Turísticos | Explora Destinos Increíbles | Inca Travel Peru",
    toursDescription:
      "Descubre tours auténticos en destinos fascinantes. Guías locales experientes, precios competitivos y reservas seguras.",
    transportsTitle: "Transporte de Viajes | Buses, Taxis y Traslados | Inca Travel Peru",
    transportsDescription:
      "Reserva transporte confiable para tus viajes. Opciones de traslados, buses y servicios de transporte profesionales.",
    privateTransportsTitle: "Transporte Privado en Cusco | Traslados Directos | Inca Travel Peru",
    privateTransportsDescription:
      "Reserva transporte privado en Cusco y rutas turisticas con atencion directa por WhatsApp, horarios flexibles y vehiculos para grupos.",
    experiencesTitle: "Experiencias en Peru | Tours y Actividades Locales | Inca Travel Peru",
    experiencesDescription:
      "Explora experiencias seleccionadas en Peru: rutas culturales, aventura, naturaleza y reservas directas para viajeros y grupos.",
  },
  en: {
    title: "Inca Travel Peru - Book Tours & Transportation | Global Travel Booking",
    description:
      "Discover and book the best tours and transportation services worldwide. Authentic travel experiences at affordable prices.",
    keywords: ["tours", "travel", "transportation", "booking", "tourism", "vacations", "experiences"],
    toursTitle: "Tours & Activities | Explore Amazing Destinations | Inca Travel Peru",
    toursDescription:
      "Discover authentic tours in fascinating destinations. Expert local guides, competitive prices, and secure bookings.",
    transportsTitle: "Travel Transportation | Buses, Taxis & Transfers | Inca Travel Peru",
    transportsDescription:
      "Book reliable transportation for your travels. Transfer services, buses, and professional transport options.",
    privateTransportsTitle: "Private Transport in Cusco | Direct Transfers | Inca Travel Peru",
    privateTransportsDescription:
      "Book private transport in Cusco and tourist routes with direct WhatsApp support, flexible schedules, and vehicles for groups.",
    experiencesTitle: "Experiences in Peru | Tours and Local Activities | Inca Travel Peru",
    experiencesDescription:
      "Explore curated experiences in Peru: culture, adventure, nature, and direct reservations for travelers and groups.",
  },
  fr: {
    title: "Inca Travel Peru - Réservez Excursions et Transports | Voyages Internationaux",
    description:
      "Découvrez et réservez les meilleures excursions et services de transport dans le monde. Expériences de voyage authentiques.",
    keywords: ["tours", "voyage", "transport", "réservation", "tourisme", "vacances", "expériences"],
    toursTitle: "Excursions & Activités | Explorez Destinations Fascinantes | Inca Travel Peru",
    toursDescription:
      "Découvrez des excursions authentiques dans des destinations fascinantes. Guides locaux experts et réservations sécurisées.",
    transportsTitle: "Transport de Voyage | Bus, Taxis & Transferts | Inca Travel Peru",
    transportsDescription:
      "Réservez un transport fiable pour vos voyages. Services de transfert, bus et options de transport professionnel.",
    privateTransportsTitle: "Transport Prive a Cusco | Transferts Directs | Inca Travel Peru",
    privateTransportsDescription:
      "Reservez un transport prive a Cusco et des routes touristiques avec assistance WhatsApp, horaires flexibles et vehicules pour groupes.",
    experiencesTitle: "Experiences au Perou | Tours et Activites Locales | Inca Travel Peru",
    experiencesDescription:
      "Explorez des experiences selectionnees au Perou: culture, aventure, nature et reservations directes pour voyageurs et groupes.",
  },
  it: {
    title: "Inca Travel Peru - Prenota Tour e Trasporti | Prenotazioni Viaggi Globali",
    description:
      "Scopri e prenota i migliori tour e servizi di trasporto in tutto il mondo. Esperienze di viaggio autentiche a prezzi convenienti.",
    keywords: ["tour", "viaggio", "trasporto", "prenotazione", "turismo", "vacanze", "esperienze"],
    toursTitle: "Tour e Attività | Esplora Destinazioni Incredibili | Inca Travel Peru",
    toursDescription:
      "Scopri tour autentici in destinazioni affascinanti. Guide locali esperte, prezzi competitivi e prenotazioni sicure.",
    transportsTitle: "Trasporto Viaggi | Autobus, Taxi e Trasferimenti | Inca Travel Peru",
    transportsDescription:
      "Prenota trasporti affidabili per i tuoi viaggi. Servizi di trasferimento, autobus e opzioni di trasporto professionali.",
    privateTransportsTitle: "Trasporto Privato a Cusco | Transfer Diretti | Inca Travel Peru",
    privateTransportsDescription:
      "Prenota trasporto privato a Cusco e rotte turistiche con supporto WhatsApp, orari flessibili e veicoli per gruppi.",
    experiencesTitle: "Esperienze in Peru | Tour e Attivita Locali | Inca Travel Peru",
    experiencesDescription:
      "Scopri esperienze selezionate in Peru: cultura, avventura, natura e prenotazioni dirette per viaggiatori e gruppi.",
  },
  de: {
    title: "Inca Travel Peru - Tours & Transport Buchen | Globale Reisebuchung",
    description:
      "Entdecke und buche die besten Touren und Transportservices weltweit. Authentische Reiseerlebnisse zu erschwinglichen Preisen.",
    keywords: ["touren", "reisen", "transport", "buchung", "tourismus", "ferien", "erlebnisse"],
    toursTitle: "Touren & Aktivitäten | Erkunde Faszinierende Ziele | Inca Travel Peru",
    toursDescription:
      "Entdecke authentische Touren an faszinierenden Reisezielen. Erfahrene lokale Guides, wettbewerbsfähige Preise und sichere Buchungen.",
    transportsTitle: "Reistransport | Busse, Taxis & Transfers | Inca Travel Peru",
    transportsDescription:
      "Buche zuverlässigen Transport für deine Reisen. Transferservices, Busse und professionelle Transportoptionen.",
    privateTransportsTitle: "Privater Transport in Cusco | Direkte Transfers | Inca Travel Peru",
    privateTransportsDescription:
      "Buchen Sie privaten Transport in Cusco und touristische Routen mit WhatsApp-Betreuung, flexiblen Zeiten und Fahrzeugen fuer Gruppen.",
    experiencesTitle: "Erlebnisse in Peru | Touren und Lokale Aktivitaeten | Inca Travel Peru",
    experiencesDescription:
      "Entdecken Sie ausgewaehlte Erlebnisse in Peru: Kultur, Abenteuer, Natur und direkte Reservierung fuer Reisende und Gruppen.",
  },
  pt: {
    title: "Inca Travel Peru - Reserve Tours e Transporte | Reservas de Viagem Global",
    description:
      "Descubra e reserve os melhores tours e serviços de transporte em todo o mundo. Experiências de viagem autênticas a preços acessíveis.",
    keywords: ["tours", "viagem", "transporte", "reserva", "turismo", "férias", "experiências"],
    toursTitle: "Tours e Atividades | Explore Destinos Incríveis | Inca Travel Peru",
    toursDescription:
      "Descubra tours autênticos em destinos fascinantes. Guias locais experientes, preços competitivos e reservas seguras.",
    transportsTitle: "Transporte de Viagem | Ônibus, Táxis e Transferências | Inca Travel Peru",
    transportsDescription:
      "Reserve transporte confiável para suas viagens. Serviços de transferência, ônibus e opções de transporte profissional.",
    privateTransportsTitle: "Transporte Privado em Cusco | Traslados Diretos | Inca Travel Peru",
    privateTransportsDescription:
      "Reserve transporte privado em Cusco e rotas turisticas com atendimento via WhatsApp, horarios flexiveis e veiculos para grupos.",
    experiencesTitle: "Experiencias no Peru | Passeios e Atividades Locais | Inca Travel Peru",
    experiencesDescription:
      "Explore experiencias selecionadas no Peru: cultura, aventura, natureza e reservas diretas para viajantes e grupos.",
  },
  zh: {
    title: "Inca Travel Peru - 预订旅游和交通 | 全球旅行预订",
    description: "发现并预订全球最佳旅游和运输服务。真实的旅行体验，价格实惠。",
    keywords: ["旅游", "旅行", "运输", "预订", "观光", "假期", "体验"],
    toursTitle: "旅游和活动 | 探索奇妙目的地 | Inca Travel Peru",
    toursDescription: "发现令人着迷的目的地的真实旅游体验。专业的当地导游，具有竞争力的价格和安全预订。",
    transportsTitle: "旅行交通 | 公交车、出租车和接送服务 | Inca Travel Peru",
    transportsDescription: "为您的旅行预订可靠的交通工具。接送服务、公交车和专业运输选项。",
    privateTransportsTitle: "Cusco Private Transport | Direct Transfers | Inca Travel Peru",
    privateTransportsDescription:
      "Book private transport in Cusco, tourist routes, flexible schedules, and direct WhatsApp support for travelers and groups.",
    experiencesTitle: "Peru Experiences | Tours and Local Activities | Inca Travel Peru",
    experiencesDescription:
      "Explore selected Peru experiences with cultural routes, adventure, nature, and direct reservations for travelers and groups.",
  },
  ja: {
    title: "Inca Travel Peru - ツアーと交通を予約 | グローバル旅行予約",
    description: "世界中の最高のツアーと交通サービスを発見して予約します。本物の旅行体験を手頃な価格で。",
    keywords: ["ツアー", "旅行", "交通", "予約", "観光", "休暇", "体験"],
    toursTitle: "ツアーとアクティビティ | 魅力的な目的地を探索 | Inca Travel Peru",
    toursDescription:
      "魅力的な目的地で本物のツアー体験を発見します。経験豊富な現地ガイド、競争力のある価格、安全な予約。",
    transportsTitle: "旅行交通 | バス、タクシー、送迎サービス | Inca Travel Peru",
    transportsDescription: "旅行のための信頼できる交通機関を予約します。送迎サービス、バス、専門的な交通オプション。",
    privateTransportsTitle: "Cusco Private Transport | Direct Transfers | Inca Travel Peru",
    privateTransportsDescription:
      "Book private transport in Cusco, tourist routes, flexible schedules, and direct WhatsApp support for travelers and groups.",
    experiencesTitle: "Peru Experiences | Tours and Local Activities | Inca Travel Peru",
    experiencesDescription:
      "Explore selected Peru experiences with cultural routes, adventure, nature, and direct reservations for travelers and groups.",
  },
  ru: {
    title: "Inca Travel Peru - Забронируйте Туры и Транспорт | Глобальное Бронирование Путешествий",
    description:
      "Откройте и забронируйте лучшие туры и услуги транспорта по всему миру. Подлинные впечатления от путешествий по доступным ценам.",
    keywords: ["туры", "путешествия", "транспорт", "бронирование", "туризм", "отпуск", "впечатления"],
    toursTitle: "Туры и Деятельность | Исследуйте Удивительные Направления | Inca Travel Peru",
    toursDescription:
      "Откройте подлинные туры в увлекательные направления. Опытные местные гиды, конкурентные цены и безопасное бронирование.",
    transportsTitle: "Транспорт для Путешествий | Автобусы, Такси и Трансферы | Inca Travel Peru",
    transportsDescription:
      "Забронируйте надежный транспорт для ваших путешествий. Услуги трансферов, автобусы и профессиональные транспортные варианты.",
    privateTransportsTitle: "Private Transport in Cusco | Direct Transfers | Inca Travel Peru",
    privateTransportsDescription:
      "Book private transport in Cusco, tourist routes, flexible schedules, and direct WhatsApp support for travelers and groups.",
    experiencesTitle: "Peru Experiences | Tours and Local Activities | Inca Travel Peru",
    experiencesDescription:
      "Explore selected Peru experiences with cultural routes, adventure, nature, and direct reservations for travelers and groups.",
  },
}

export function generateLocaleSEO(locale: Locale, type: LocaleSEOType): Metadata {
  const seo = seoTranslations[locale]
  const baseUrl = siteConfig.url
  const pageByType: Record<LocaleSEOType, { title: string; description: string; path: string }> = {
    home: { title: seo.title, description: seo.description, path: "" },
    tours: { title: seo.toursTitle, description: seo.toursDescription, path: "tours" },
    transports: { title: seo.transportsTitle, description: seo.transportsDescription, path: "transports" },
    "transport-private": {
      title: seo.privateTransportsTitle,
      description: seo.privateTransportsDescription,
      path: "transport-private",
    },
    experiences: { title: seo.experiencesTitle, description: seo.experiencesDescription, path: "experiences" },
  }
  const page = pageByType[type]
  const pageUrl = page.path ? `${baseUrl}/${locale}/${page.path}` : `${baseUrl}/${locale}`

  const alternateLanguages: Record<string, string | URL> = {}

  locales.forEach((lang) => {
    alternateLanguages[lang] = page.path ? `${baseUrl}/${lang}/${page.path}` : `${baseUrl}/${lang}`
  })

  const metadata: Metadata = {
    title: page.title,
    description: page.description,
    keywords: seo.keywords,
    alternates: {
      languages: alternateLanguages,
      canonical: pageUrl,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: pageUrl,
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  }

  return metadata
}

export function generateTourSEO(
  locale: Locale,
  tour: {
    title: string
    description: string
    currentPrice: number
  },
  slug: string,
): Metadata {
  const baseUrl = siteConfig.url
  const fullUrl = `${baseUrl}/${locale}/tours/${slug}`

  const seoDescription = `${tour.description} Reserve desde $${tour.currentPrice} por persona.`

  const alternateLanguages: Record<string, string | URL> = {}
  locales.forEach((lang) => {
    alternateLanguages[lang] = `${baseUrl}/${lang}/tours/${slug}`
  })

  return {
    title: `${tour.title} | Tours | Inca Travel Peru`,
    description: seoDescription,
    keywords: [tour.title, "tour", "viaje", "reserva", "experiencia", "destino"],
    alternates: {
      languages: alternateLanguages,
      canonical: fullUrl,
    },
    openGraph: {
      title: `${tour.title} | Tours | Inca Travel Peru`,
      description: seoDescription,
      url: fullUrl,
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tour.title} | Tours | Inca Travel Peru`,
      description: seoDescription,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  }
}

export function generateTransportSEO(
  locale: Locale,
  transport: {
    title: string
    description: string
    currentPrice: number
    image?: string
    origin?: string
    destination?: string
  },
  slug: string,
): Metadata {
  const baseUrl = siteConfig.url
  const fullUrl = `${baseUrl}/${locale}/transports/${slug}`

  const routeText = transport.origin && transport.destination ? ` Ruta ${transport.origin} a ${transport.destination}.` : ""
  const seoDescription = `${transport.description}${routeText} Reserva desde $${transport.currentPrice} por persona.`
  const image = transport.image || siteConfig.ogImage

  const alternateLanguages: Record<string, string | URL> = {}
  locales.forEach((lang) => {
    alternateLanguages[lang] = `${baseUrl}/${lang}/transports/${slug}`
  })

  return {
    title: `${transport.title} | Transport | Inca Travel Peru`,
    description: seoDescription,
    keywords: [transport.title, "transporte", "viaje", "reserva", "traslado"],
    alternates: {
      languages: alternateLanguages,
      canonical: fullUrl,
    },
    openGraph: {
      title: `${transport.title} | Transport | Inca Travel Peru`,
      description: seoDescription,
      url: fullUrl,
      type: "website",
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: transport.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${transport.title} | Transport | Inca Travel Peru`,
      description: seoDescription,
      images: [absoluteUrl(image)],
    },
  }
}
