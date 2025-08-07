'use client'

import { Phone, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const HeroSection = () => {
  const handleCall = () => {
    window.location.href = "tel:+966540601180"
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
          alt="أثاث مستعمل عالي الجودة في الدمام - شراء أثاث ومطابخ مستعملة"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex" role="img" aria-label="تقييم 5 نجوم من العملاء">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">أكثر من 500 عميل راضي</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
            شراء <span className="hero-gradient bg-clip-text text-transparent">أثاث مستعمل</span>
            <br />
            في الدمام
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            نشتري جميع أنواع الأثاث والمطابخ والأجهزة المنزلية المستعملة في الدمام والمنطقة الشرقية
            <br />
            <strong className="text-primary">بأفضل الأسعار ونقد فوري - خدمة منزلية مجانية</strong>
          </p>

          <div className="space-y-3 mb-8">
            {[
              'تقييم مجاني في الموقع خلال 30 دقيقة',
              'أسعار منافسة وعادلة لجميع أنواع الأثاث', 
              'دفع نقدي فوري بدون تأخير',
              'خدمة سريعة ومهنية في جميع أنحاء الدمام'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleCall}
              size="lg"
              className="hero-gradient text-white border-0 hover:opacity-90 accent-glow text-lg px-8 py-6 h-auto"
              aria-label="اتصل الآن لشراء أثاث مستعمل في الدمام - 0540601180"
            >
              <Phone className="ml-2 h-5 w-5" />
              اتصل الآن: 0540601180
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto border-2 border-primary text-primary hover:bg-primary hover:text-white"
              aria-label="احصل على تقييم مجاني لأثاثك المستعمل"
            >
              احصل على تقييم مجاني
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection