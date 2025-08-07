import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryProvider } from '@/components/providers/ReactQueryProvider'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '600', '700', '900'],
  display: 'swap',
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'شراء أثاث مستعمل في الدمام - أفضل الأسعار والخدمة السريعة | 0540601180',
  description: 'شراء أثاث مستعمل في الدمام بأفضل الأسعار. نشتري الأثاث والمطابخ والأجهزة المنزلية المستعملة نقداً فوراً. خدمة منزلية مجانية وتقييم فوري. اتصل الآن 0540601180',
  keywords: [
    'شراء أثاث مستعمل الدمام',
    'شراء مطابخ مستعملة الدمام',
    'شراء أجهزة منزلية مستعملة',
    'بيع أثاث مستعمل الدمام',
    'شراء عفش مستعمل',
    'تقييم أثاث مجاني',
    'نقد فوري أثاث',
    'شراء كنب مستعمل',
    'شراء غرف نوم مستعملة',
    'المنطقة الشرقية أثاث مستعمل'
  ].join(', '),
  authors: [{ name: 'شراء أثاث مستعمل في الدمام' }],
  creator: 'شراء أثاث مستعمل في الدمام',
  publisher: 'شراء أثاث مستعمل في الدمام',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://furniture-dammam.com',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://furniture-dammam.com',
    title: 'شراء أثاث مستعمل في الدمام - أفضل الأسعار والخدمة السريعة',
    description: 'شراء أثاث مستعمل في الدمام بأفضل الأسعار. نشتري الأثاث والمطابخ والأجهزة المنزلية المستعملة نقداً فوراً. خدمة منزلية مجانية وتقييم فوري.',
    siteName: 'شراء أثاث مستعمل في الدمام',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'شراء أثاث مستعمل في الدمام - أفضل الأسعار',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شراء أثاث مستعمل في الدمام - أفضل الأسعار',
    description: 'شراء أثاث مستعمل في الدمام بأفضل الأسعار. نشتري الأثاث والمطابخ والأجهزة المنزلية المستعملة نقداً فوراً',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'SA-04',
    'geo.placename': 'الدمام',
    'geo.position': '26.4207;50.0888',
    'ICBM': '26.4207, 50.0888',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="theme-color" content="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "شراء أثاث مستعمل في الدمام",
              "description": "شراء أثاث مستعمل في الدمام بأفضل الأسعار. نشتري الأثاث والمطابخ والأجهزة المنزلية المستعملة نقداً فوراً",
              "url": "https://furniture-dammam.com",
              "telephone": "+966540601180",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "الدمام",
                "addressRegion": "المنطقة الشرقية",
                "addressCountry": "SA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.4207,
                "longitude": 50.0888
              },
              "openingHours": "Mo-Su 08:00-22:00",
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "الدمام"
              },
              "serviceType": "شراء أثاث مستعمل",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "خدمات شراء الأثاث المستعمل",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "شراء أثاث غرف المعيشة",
                      "description": "شراء كنب، طاولات، خزائن، ديكورات مستعملة"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "شراء مطابخ مستعملة",
                      "description": "شراء مطابخ كاملة، خزائن، رخام وجرانيت"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "شراء أجهزة منزلية مستعملة",
                      "description": "شراء ثلاجات، غسالات، مكيفات، تلفزيونات"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${cairo.className} antialiased`}>
        <ReactQueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}