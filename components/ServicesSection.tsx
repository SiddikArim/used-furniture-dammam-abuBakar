'use client'

import { Sofa, ChefHat, Tv, Home } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const ServicesSection = () => {
  const services = [
    {
      icon: Sofa,
      title: "أثاث غرف المعيشة المستعمل",
      description: "شراء كنب، طاولات، خزائن، ديكورات مستعملة بأفضل الأسعار",
      items: ["كنب وأرائك مستعملة", "طاولات قهوة وطعام", "خزائن تلفزيون", "ديكورات منزلية"],
      keywords: "شراء كنب مستعمل الدمام، طاولات مستعملة، خزائن مستعملة"
    },
    {
      icon: ChefHat,
      title: "مطابخ مستعملة كاملة",
      description: "شراء مطابخ كاملة، خزائن، رخام وجرانيت، أدوات مطبخ",
      items: ["مطابخ كاملة مستعملة", "خزائن مطبخ", "رخام وجرانيت", "أدوات وأجهزة مطبخ"],
      keywords: "شراء مطابخ مستعملة الدمام، خزائن مطبخ مستعملة، رخام مستعمل"
    },
    {
      icon: Tv,
      title: "الأجهزة المنزلية المستعملة",
      description: "شراء ثلاجات، غسالات، مكيفات، تلفزيونات مستعملة",
      items: ["ثلاجات مستعملة", "غسالات مستعملة", "مكيفات مستعملة", "تلفزيونات وشاشات"],
      keywords: "شراء أجهزة منزلية مستعملة الدمام، ثلاجات مستعملة، غسالات مستعملة"
    },
    {
      icon: Home,
      title: "أثاث غرف النوم المستعمل",
      description: "شراء أسرة، خزائن، تسريحات، كوميدينو مستعمل",
      items: ["أسرة ومراتب مستعملة", "خزائن ملابس", "تسريحات مستعملة", "كوميدينو وطاولات"],
      keywords: "شراء غرف نوم مستعملة الدمام، أسرة مستعملة، خزائن ملابس مستعملة"
    }
  ]

  return (
    <section className="py-20 warm-gradient" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            خدمات شراء الأثاث المستعمل في الدمام
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نشتري جميع أنواع الأثاث والأجهزة المنزلية المستعملة بأفضل الأسعار في الدمام والمنطقة الشرقية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 soft-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 hero-gradient rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>

                {/* Hidden keywords for SEO */}
                <div className="sr-only" aria-hidden="true">
                  {service.keywords}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 soft-shadow">
            <span className="text-lg font-semibold text-primary">
              📞 اتصل الآن للحصول على أفضل سعر لأثاثك المستعمل
            </span>
            <span className="text-2xl font-black text-foreground">
              0540601180
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection