import { Phone, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/furniture-hero.jpg";

const HeroSection = () => {
  const handleCall = () => {
    window.location.href = "tel:+966540601180";
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="أثاث مستعمل عالي الجودة"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
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
            نشتري جميع أنواع الأثاث والمطابخ والأجهزة المنزلية المستعملة
            <br />
            <strong className="text-primary">بأفضل الأسعار ونقد فوري</strong>
          </p>

          <div className="space-y-3 mb-8">
            {[
              'تقييم مجاني في الموقع',
              'أسعار منافسة وعادلة', 
              'دفع نقدي فوري',
              'خدمة سريعة ومهنية'
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
            >
              <Phone className="ml-2 h-5 w-5" />
              اتصل الآن: 0540601180
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              احصل على تقييم مجاني
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;