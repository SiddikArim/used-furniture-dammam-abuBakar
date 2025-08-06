import { Sofa, ChefHat, Tv, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Sofa,
      title: "أثاث غرف المعيشة",
      description: "كنب، طاولات، خزائن، ديكورات",
      items: ["كنب وأرائك", "طاولات قهوة", "خزائن تلفزيون", "طاولات طعام"]
    },
    {
      icon: ChefHat,
      title: "مطابخ مستعملة",
      description: "مطابخ كاملة، خزائن، أدوات مطبخ",
      items: ["مطابخ كاملة", "خزائن مطبخ", "رخام وجرانيت", "أدوات مطبخ"]
    },
    {
      icon: Tv,
      title: "الأجهزة المنزلية",
      description: "ثلاجات، غسالات، مكيفات، تلفزيونات",
      items: ["ثلاجات", "غسالات", "مكيفات", "تلفزيونات وشاشات"]
    },
    {
      icon: Home,
      title: "أثاث غرف النوم",
      description: "أسرة، خزائن، تسريحات",
      items: ["أسرة ومراتب", "خزائن ملابس", "تسريحات", "كوميدينو"]
    }
  ];

  return (
    <section className="py-20 warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            ما نشتريه منك
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نشتري جميع أنواع الأثاث والأجهزة المنزلية المستعملة بأفضل الأسعار
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 soft-shadow">
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
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 soft-shadow">
            <span className="text-lg font-semibold text-primary">
              📞 اتصل الآن للحصول على أفضل سعر
            </span>
            <span className="text-2xl font-black text-foreground">
              0540601180
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;