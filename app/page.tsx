import type { Metadata } from 'next'
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: 'شراء أثاث مستعمل في الدمام - أفضل الأسعار والخدمة السريعة | 0540601180',
  description: 'شراء أثاث مستعمل في الدمام بأفضل الأسعار. نشتري الأثاث والمطابخ والأجهزة المنزلية المستعملة نقداً فوراً. خدمة منزلية مجانية وتقييم فوري. اتصل الآن 0540601180',
  alternates: {
    canonical: 'https://furniture-dammam.com',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}