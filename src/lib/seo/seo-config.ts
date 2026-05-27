import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";

const locales = ["es", "en", "fr", "it", "de", "pt", "zh", "ja", "ru"] as const;
type LocaleSEOType =
  | "home"
  | "tours"
  | "transports"
  | "transport-private"
  | "experiences";

export const siteConfig = {
  name: "Inca Travel Peru - Tourism & Transport Booking",
  description: "Book tours and transportation services worldwide. Find the best travel experiences.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://cabanacondecuscobybus.com",
  ogImage: "https://res.cloudinary.com/ddbzpbrje/image/upload/v1767086141/ChatGPT_Image_30_dic_2025_04_15_12_b1t3nf.png",
};

function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://"))
    return pathOrUrl;
  return `${siteConfig.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export const seoTranslations: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string[];
    toursTitle: string;
    toursDescription: string;
    transportsTitle: string;
    transportsDescription: string;
    privateTransportsTitle: string;
    privateTransportsDescription: string;
    experiencesTitle: string;
    experiencesDescription: string;
  }
> = {
  es: {
    title: "Inca Travel Peru - Reserva Tours y Transporte | Viajes Internacionales",
    description:
      "Reserva el bus Chivay Cusco o Cusco Chivay con salidas diarias. Tours al Cañón del Colca, Cabanaconde, Cusco y Arequipa. Precios accesibles y reserva en línea.",
    keywords: [
      "Chivay Cusco",
      "Cusco Chivay",
      "bus Chivay Cusco",
      "transporte Cusco Chivay",
      "Cabanaconde Cusco",
      "Colca Canyon",
      "tour Colca",
      "bus Colca Cusco",
      "transporte Chivay",
      "Cabanaconde Cusco",
      "tours Cusco",
      "transporte Cusco",
    ],
    toursTitle: "Tours Turísticos | Explora Destinos Increíbles | Inca Travel Peru",
    toursDescription:
      "Explora tours desde Cusco al Cañón del Colca, Chivay y Cabanaconde. Guías locales, salidas diarias y reservas seguras en línea.",
    transportsTitle: "Transporte de Viajes | Buses, Taxis y Traslados | Inca Travel Peru",
    transportsDescription:
      "Reserva el bus Chivay Cusco o Cusco Chivay. Salidas diarias, precios económicos y servicio directo entre Cusco, Chivay, Cabanaconde y el Cañón del Colca.",
    privateTransportsTitle: "Transporte Privado en Cusco | Traslados Directos | Inca Travel Peru",
    privateTransportsDescription:
      "Transporte privado Cusco Chivay con atención por WhatsApp, horarios flexibles y vehículos para grupos. Ruta directa Cusco - Chivay - Cabanaconde.",
    experiencesTitle: "Experiencias en Peru | Tours y Actividades Locales | Inca Travel Peru",
    experiencesDescription:
      "Vive experiencias únicas en Cusco, Chivay y el Cañón del Colca. Rutas culturales, avistamiento de cóndores, aventura y naturaleza.",
  },
  en: {
    title: "Inca Travel Peru - Book Tours & Transport | International Travel",
    description:
      "Book the Chivay Cusco or Cusco Chivay bus with daily departures. Tours to Colca Canyon, Cabanaconde, Cusco and Arequipa. Affordable prices and online booking.",
    keywords: [
      "Chivay Cusco", "Cusco Chivay", "Chivay Cusco bus", "Cusco Chivay transport",
      "Cabanaconde Cusco", "Colca Canyon", "Colca tour", "Colca Cusco bus",
      "Chivay transport", "Cabanaconde Cusco", "Cusco tours", "Cusco transport",
    ],
    toursTitle: "Tourism Tours | Explore Incredible Destinations | Inca Travel Peru",
    toursDescription:
      "Explore tours from Cusco to Colca Canyon, Chivay and Cabanaconde. Local guides, daily departures and secure online bookings.",
    transportsTitle: "Travel Transport | Buses, Taxis & Transfers | Inca Travel Peru",
    transportsDescription:
      "Book the Chivay Cusco or Cusco Chivay bus. Daily departures, affordable prices and direct service between Cusco, Chivay, Cabanaconde and Colca Canyon.",
    privateTransportsTitle: "Private Transport in Cusco | Direct Transfers | Inca Travel Peru",
    privateTransportsDescription:
      "Private transport Cusco Chivay with WhatsApp support, flexible schedules and vehicles for groups. Direct route Cusco - Chivay - Cabanaconde.",
    experiencesTitle: "Experiences in Peru | Tours & Local Activities | Inca Travel Peru",
    experiencesDescription:
      "Live unique experiences in Cusco, Chivay and Colca Canyon. Cultural routes, condor watching, adventure and nature.",
  },
  fr: {
    title: "Inca Travel Peru - Réservez Tours et Transport | Voyages Internationaux",
    description:
      "Réservez le bus Chivay Cusco ou Cusco Chivay avec des départs quotidiens. Tours au Canyon Colca, Cabanaconde, Cusco et Arequipa. Prix abordables et réservation en ligne.",
    keywords: [
      "Chivay Cusco", "Cusco Chivay", "bus Chivay Cusco", "transport Cusco Chivay",
      "Cabanaconde Cusco", "Canyon Colca", "tour Colca", "bus Colca Cusco",
      "transport Chivay", "Cabanaconde Cusco", "tours Cusco", "transport Cusco",
    ],
    toursTitle: "Tours Touristiques | Explorez des Destinations Incroyables | Inca Travel Peru",
    toursDescription:
      "Explorez des tours de Cusco vers le Canyon Colca, Chivay et Cabanaconde. Guides locaux, départs quotidiens et réservations sécurisées en ligne.",
    transportsTitle: "Transport de Voyage | Bus, Taxis et Transferts | Inca Travel Peru",
    transportsDescription:
      "Réservez le bus Chivay Cusco ou Cusco Chivay. Départs quotidiens, prix économiques et service direct entre Cusco, Chivay, Cabanaconde et le Canyon Colca.",
    privateTransportsTitle: "Transport Privé à Cusco | Transferts Directs | Inca Travel Peru",
    privateTransportsDescription:
      "Transport privé Cusco Chivay avec assistance WhatsApp, horaires flexibles et véhicules pour groupes. Route directe Cusco - Chivay - Cabanaconde.",
    experiencesTitle: "Expériences au Pérou | Tours et Activités Locales | Inca Travel Peru",
    experiencesDescription:
      "Vivez des expériences uniques à Cusco, Chivay et le Canyon Colca. Routes culturelles, observation de condors, aventure et nature.",
  },
  it: {
    title: "Inca Travel Peru - Prenota Tour e Trasporti | Viaggi Internazionali",
    description:
      "Prenota il bus Chivay Cusco o Cusco Chivay con partenze giornaliere. Tour al Canyon Colca, Cabanaconde, Cusco e Arequipa. Prezzi accessibili e prenotazione online.",
    keywords: [
      "Chivay Cusco", "Cusco Chivay", "bus Chivay Cusco", "trasporto Cusco Chivay",
      "Cabanaconde Cusco", "Canyon Colca", "tour Colca", "bus Colca Cusco",
      "trasporto Chivay", "Cabanaconde Cusco", "tour Cusco", "trasporto Cusco",
    ],
    toursTitle: "Tour Turistici | Esplora Destinazioni Incredibili | Inca Travel Peru",
    toursDescription:
      "Esplora tour da Cusco al Canyon Colca, Chivay e Cabanaconde. Guide locali, partenze giornaliere e prenotazioni sicure online.",
    transportsTitle: "Trasporto di Viaggio | Bus, Taxi e Transfer | Inca Travel Peru",
    transportsDescription:
      "Prenota il bus Chivay Cusco o Cusco Chivay. Partenze giornaliere, prezzi economici e servizio diretto tra Cusco, Chivay, Cabanaconde e il Canyon Colca.",
    privateTransportsTitle: "Trasporto Privato a Cusco | Transfer Diretti | Inca Travel Peru",
    privateTransportsDescription:
      "Trasporto privato Cusco Chivay con supporto WhatsApp, orari flessibili e veicoli per gruppi. Rotta diretta Cusco - Chivay - Cabanaconde.",
    experiencesTitle: "Esperienze in Perù | Tour e Attività Locali | Inca Travel Peru",
    experiencesDescription:
      "Vivi esperienze uniche a Cusco, Chivay e nel Canyon Colca. Percorsi culturali, avvistamento condor, avventura e natura.",
  },
  de: {
    title: "Inca Travel Peru - Tours & Transport buchen | Internationale Reisen",
    description:
      "Buche den Bus Chivay Cusco oder Cusco Chivay mit täglichen Abfahrten. Touren zum Colca Canyon, Cabanaconde, Cusco und Arequipa. Günstige Preise und Online-Buchung.",
    keywords: [
      "Chivay Cusco", "Cusco Chivay", "Bus Chivay Cusco", "Transport Cusco Chivay",
      "Cabanaconde Cusco", "Colca Canyon", "Colca Tour", "Bus Colca Cusco",
      "Transport Chivay", "Cabanaconde Cusco", "Cusco Touren", "Transport Cusco",
    ],
    toursTitle: "Touristische Touren | Entdecke Unglaubliche Ziele | Inca Travel Peru",
    toursDescription:
      "Entdecke Touren von Cusco zum Colca Canyon, Chivay und Cabanaconde. Lokale Guides, tägliche Abfahrten und sichere Online-Buchungen.",
    transportsTitle: "Reise-Transport | Busse, Taxis & Transfers | Inca Travel Peru",
    transportsDescription:
      "Buche den Bus Chivay Cusco oder Cusco Chivay. Tägliche Abfahrten, günstige Preise und Direktservice zwischen Cusco, Chivay, Cabanaconde und dem Colca Canyon.",
    privateTransportsTitle: "Privater Transport in Cusco | Direkte Transfers | Inca Travel Peru",
    privateTransportsDescription:
      "Privater Transport Cusco Chivay mit WhatsApp-Betreuung, flexiblen Zeiten und Fahrzeugen für Gruppen. Direktroute Cusco - Chivay - Cabanaconde.",
    experiencesTitle: "Erlebnisse in Peru | Touren & Lokale Aktivitäten | Inca Travel Peru",
    experiencesDescription:
      "Erlebe einzigartige Erlebnisse in Cusco, Chivay und dem Colca Canyon. Kulturrouten, Kondorbeobachtung, Abenteuer und Natur.",
  },
  pt: {
    title: "Inca Travel Peru - Reserve Tours e Transporte | Viagens Internacionais",
    description:
      "Reserve o ônibus Chivay Cusco ou Cusco Chivay com saídas diárias. Tours ao Cañón del Colca, Cabanaconde, Cusco e Arequipa. Preços acessíveis e reserva online.",
    keywords: [
      "Chivay Cusco", "Cusco Chivay", "ônibus Chivay Cusco", "transporte Cusco Chivay",
      "Cabanaconde Cusco", "Cañón del Colca", "tour Colca", "ônibus Colca Cusco",
      "transporte Chivay", "Cabanaconde Cusco", "tours Cusco", "transporte Cusco",
    ],
    toursTitle: "Tours Turísticos | Explore Destinos Incríveis | Inca Travel Peru",
    toursDescription:
      "Explore tours de Cusco ao Cañón del Colca, Chivay e Cabanaconde. Guias locais, saídas diárias e reservas seguras online.",
    transportsTitle: "Transporte de Viagem | Ônibus, Táxis e Traslados | Inca Travel Peru",
    transportsDescription:
      "Reserve o ônibus Chivay Cusco ou Cusco Chivay. Saídas diárias, preços econômicos e serviço direto entre Cusco, Chivay, Cabanaconde e o Cañón del Colca.",
    privateTransportsTitle: "Transporte Privado em Cusco | Traslados Diretos | Inca Travel Peru",
    privateTransportsDescription:
      "Transporte privado Cusco Chivay com atendimento WhatsApp, horários flexíveis e veículos para grupos. Rota direta Cusco - Chivay - Cabanaconde.",
    experiencesTitle: "Experiências no Peru | Tours e Atividades Locais | Inca Travel Peru",
    experiencesDescription:
      "Viva experiências únicas em Cusco, Chivay e no Cañón del Colca. Rotas culturais, observação de cóndores, aventura e natureza.",
  },
  zh: {
    title: "Inca Travel Peru - 预订旅游与交通 | 国际旅行",
    description:
      "预订奇瓦伊至库斯科或库斯科至奇瓦伊的大巴，每日发车。科尔卡峡谷、卡瓦纳孔德、库斯科和阿雷基帕旅游。价格实惠，在线预订。",
    keywords: [
      "奇瓦伊库斯科", "库斯科奇瓦伊", "Chivay Cusco", "Cusco Chivay",
      "科尔卡峡谷大巴", "Colca Canyon", "卡瓦纳孔德库斯科", "科尔卡旅游",
      "奇瓦伊交通", "卡瓦纳孔德库斯科", "库斯科旅游", "库斯科交通",
    ],
    toursTitle: "旅游观光 | 探索精彩目的地 | Inca Travel Peru",
    toursDescription:
      "探索从库斯科到科尔卡峡谷、奇瓦伊和卡瓦纳孔德的旅游路线。本地导游，每日出发，安全在线预订。",
    transportsTitle: "旅行交通 | 大巴、出租车与接送 | Inca Travel Peru",
    transportsDescription:
      "预订奇瓦伊至库斯科或库斯科至奇瓦伊的大巴。每日发车，价格实惠，库斯科、奇瓦伊、卡瓦纳孔德与科尔卡峡谷间的直达服务。",
    privateTransportsTitle: "库斯科私人交通 | 直达接送服务 | Inca Travel Peru",
    privateTransportsDescription:
      "库斯科奇瓦伊私人交通，提供WhatsApp支持，灵活时间安排，团体车辆。库斯科 - 奇瓦伊 - 卡瓦纳孔德直达路线。",
    experiencesTitle: "秘鲁体验 | 旅游与当地活动 | Inca Travel Peru",
    experiencesDescription:
      "在库斯科、奇瓦伊和科尔卡峡谷享受独特体验。文化线路、观赏神鹰、冒险与自然。",
  },
  ja: {
    title: "Inca Travel Peru - ツアー・交通予約 | 国際旅行",
    description:
      "チビャイ⇔クスコのバスを毎日運行。コルカ峡谷、カバナコンデ、クスコ、アレキパへのツアーも。リーズナブルな価格でオンライン予約。",
    keywords: [
      "チビャイ クスコ", "クスコ チビャイ", "Chivay Cusco", "Cusco Chivay",
      "コルカ峡谷大巴", "Colca Canyon", "カバナコンデ クスコ", "コルカ ツアー",
      "チビャイ交通", "カバナコンデ クスコ", "クスコ ツアー", "クスコ 交通",
    ],
    toursTitle: "観光ツアー | 素晴らしい目的地を探索 | Inca Travel Peru",
    toursDescription:
      "クスコからコルカ峡谷、チビャイ、カバナコンデへのツアーを探索。地元ガイド、毎日出発、安全なオンライン予約。",
    transportsTitle: "旅行交通 | バス・タクシー・送迎 | Inca Travel Peru",
    transportsDescription:
      "チビャイ⇒クスコまたはクスコ⇒チビャイのバスを予約。毎日運行、リーズナブルな価格、クスコ・チビャイ・カバナコンデ・コルカ峡谷間の直行サービス。",
    privateTransportsTitle: "クスコのプライベート交通 | 直行送迎 | Inca Travel Peru",
    privateTransportsDescription:
      "クスコ⇔チビャイのプライベート送迎。WhatsAppサポート、柔軟な時間、グループ対応車両。クスコ - チビャイ - カバナコンデ直行ルート。",
    experiencesTitle: "ペルーの体験 | ツアー & ローカルアクティビティ | Inca Travel Peru",
    experiencesDescription:
      "クスコ、チビャイ、コルカ峡谷でのユニークな体験。文化ルート、コンドル観察、アドベンチャーと自然。",
  },
  ru: {
    title: "Inca Travel Peru - Бронирование Туров и Транспорта | Международные Путешествия",
    description:
      "Забронируйте автобус Чивай Куско или Куско Чивай с ежедневными отправлениями. Туры в Каньон Колка, Кабананконде, Куско и Арекипу. Доступные цены и онлайн-бронирование.",
    keywords: [
      "Чивай Куско", "Куско Чивай", "Chivay Cusco", "Cusco Chivay",
      "автобус Чивай Куско", "Каньон Колка", "Кабананконде Куско", "тур Колка",
      "транспорт Чивай", "Кабананконде Куско", "туры Куско", "транспорт Куско",
    ],
    toursTitle: "Туристические Туры | Исследуйте Невероятные Направления | Inca Travel Peru",
    toursDescription:
      "Исследуйте туры из Куско в Каньон Колка, Чивай и Кабананконде. Местные гиды, ежедневные отправления и безопасное онлайн-бронирование.",
    transportsTitle: "Транспорт для Путешествий | Автобусы, Такси и Трансферы | Inca Travel Peru",
    transportsDescription:
      "Забронируйте автобус Чивай Куско или Куско Чивай. Ежедневные рейсы, доступные цены и прямой сервис между Куско, Чивай, Кабананконде и Каньоном Колка.",
    privateTransportsTitle: "Частный Транспорт в Куско | Прямые Трансферы | Inca Travel Peru",
    privateTransportsDescription:
      "Частный транспорт Куско Чивай с поддержкой WhatsApp, гибким расписанием и транспортом для групп. Прямой маршрут Куско - Чивай - Кабананконде.",
    experiencesTitle: "Впечатления в Перу | Туры и Местные Активности | Inca Travel Peru",
    experiencesDescription:
      "Уникальные впечатления в Куско, Чивай и Каньоне Колка. Культурные маршруты, наблюдение за кондорами, приключения и природа.",
  },
};

export function generateLocaleSEO(
  locale: Locale,
  type: LocaleSEOType,
): Metadata {
  const seo = seoTranslations[locale];
  const baseUrl = siteConfig.url;
  const pageByType: Record<
    LocaleSEOType,
    { title: string; description: string; path: string }
  > = {
    home: { title: seo.title, description: seo.description, path: "" },
    tours: {
      title: seo.toursTitle,
      description: seo.toursDescription,
      path: "tours",
    },
    transports: {
      title: seo.transportsTitle,
      description: seo.transportsDescription,
      path: "transports",
    },
    "transport-private": {
      title: seo.privateTransportsTitle,
      description: seo.privateTransportsDescription,
      path: "transport-private",
    },
    experiences: {
      title: seo.experiencesTitle,
      description: seo.experiencesDescription,
      path: "experiences",
    },
  };
  const page = pageByType[type];
  const pageUrl = page.path
    ? `${baseUrl}/${locale}/${page.path}`
    : `${baseUrl}/${locale}`;

  const alternateLanguages: Record<string, string | URL> = {};

  locales.forEach((lang) => {
    alternateLanguages[lang] = page.path
      ? `${baseUrl}/${lang}/${page.path}`
      : `${baseUrl}/${lang}`;
  });

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
  };

  return metadata;
}

export function generateTourSEO(
  locale: Locale,
  tour: {
    title: string;
    description: string;
    currentPrice: number;
  },
  slug: string,
): Metadata {
  const baseUrl = siteConfig.url;
  const fullUrl = `${baseUrl}/${locale}/tours/${slug}`;

  const seoDescription = `${tour.description} Reserve desde $${tour.currentPrice} por persona.`;

  const alternateLanguages: Record<string, string | URL> = {};
  locales.forEach((lang) => {
    alternateLanguages[lang] = `${baseUrl}/${lang}/tours/${slug}`;
  });

  return {
    title: `${tour.title} | Tours | Inca Travel Peru`,
    description: seoDescription,
    keywords: [
      tour.title,
      "tour",
      "viaje",
      "reserva",
      "experiencia",
      "destino",
    ],
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
  };
}

export function generateTransportSEO(
  locale: Locale,
  transport: {
    title: string;
    description: string;
    currentPrice: number;
    image?: string;
    origin?: string;
    destination?: string;
  },
  slug: string,
): Metadata {
  const baseUrl = siteConfig.url;
  const fullUrl = `${baseUrl}/${locale}/transports/${slug}`;

  const routeKeywords: string[] = [];
  if (transport.origin && transport.destination) {
    routeKeywords.push(
      `${transport.origin} ${transport.destination}`,
      `${transport.destination} ${transport.origin}`,
      `bus ${transport.origin} ${transport.destination}`,
      `transporte ${transport.origin} ${transport.destination}`,
    );
  }

  const routeText =
    transport.origin && transport.destination
      ? ` Ruta directa ${transport.origin} - ${transport.destination}.`
      : "";
  const seoDescription = `${transport.description}${routeText} Reserva desde $${transport.currentPrice} USD.`;
  const image = transport.image || siteConfig.ogImage;
  const seoTitle = `${transport.title} | ${siteConfig.name}`;

  const alternateLanguages: Record<string, string | URL> = {};
  locales.forEach((lang) => {
    alternateLanguages[lang] = `${baseUrl}/${lang}/transports/${slug}`;
  });

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      transport.title,
      ...routeKeywords,
      "transporte",
      "bus",
      "traslado",
      "reserva",
    ],
    alternates: {
      languages: alternateLanguages,
      canonical: fullUrl,
    },
    openGraph: {
      title: seoTitle,
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
      title: seoTitle,
      description: seoDescription,
      images: [absoluteUrl(image)],
    },
  };
}

export function generateTransportJsonLd(transport: {
  title: string;
  description: string;
  currentPrice: number;
  image?: string;
  origin?: string;
  destination?: string;
  url: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: transport.title,
    description: transport.description,
    image: transport.image || siteConfig.ogImage,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      url: transport.url,
      priceCurrency: "USD",
      price: transport.currentPrice,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
    ...(transport.origin &&
      transport.destination && {
        additionalProperty: [
          { "@type": "PropertyValue", name: "Origen", value: transport.origin },
          {
            "@type": "PropertyValue",
            name: "Destino",
            value: transport.destination,
          },
        ],
      }),
  });
}
