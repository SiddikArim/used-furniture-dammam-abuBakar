import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">شراء أثاث مستعمل في الدمام</h3>
            <p className="text-background/80 mb-4">
              نحن متخصصون في شراء جميع أنواع الأثاث والمطابخ والأجهزة المنزلية المستعملة بأفضل الأسعار في الدمام والمنطقة الشرقية.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>0540601180</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>الدمام، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>يومياً من 8 صباحاً إلى 10 مساءً</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-background/80">
              <li>• شراء أثاث غرف المعيشة</li>
              <li>• شراء مطابخ مستعملة</li>
              <li>• شراء أجهزة منزلية</li>
              <li>• شراء أثاث غرف النوم</li>
              <li>• تقييم مجاني في الموقع</li>
              <li>• دفع نقدي فوري</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} شراء أثاث مستعمل في الدمام. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;