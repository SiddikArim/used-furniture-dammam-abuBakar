import { Phone, MapPin, Clock } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">شراء أثاث مستعمل في الدمام</h3>
            <p className="text-background/80 mb-4">
              نحن متخصصون في شراء جميع أنواع الأثاث والمطابخ والأجهزة المنزلية المستعملة بأفضل الأسعار في الدمام والمنطقة الشرقية. خدمة سريعة ومهنية مع ضمان أفضل الأسعار.
            </p>
            
            {/* SEO Keywords in footer */}
            <div className="text-xs text-background/60 space-y-1">
              <p>الكلمات المفتاحية: شراء أثاث مستعمل الدمام، شراء مطابخ مستعملة، شراء أجهزة منزلية مستعملة</p>
              <p>المناطق المخدومة: الفيصلية، الشاطئ، الضباب، الأندلس، الفردوس، النور، الصفا</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <span className="font-semibold">0540601180</span>
                  <p className="text-sm text-background/70">خط ساخن لشراء الأثاث المستعمل</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <span>الدمام، المملكة العربية السعودية</span>
                  <p className="text-sm text-background/70">خدمة في جميع أحياء الدمام</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <span>يومياً من 8 صباحاً إلى 10 مساءً</span>
                  <p className="text-sm text-background/70">بما في ذلك العطل الرسمية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">خدماتنا المتخصصة</h4>
            <ul className="space-y-2 text-background/80">
              <li>• شراء أثاث غرف المعيشة المستعمل</li>
              <li>• شراء مطابخ مستعملة كاملة</li>
              <li>• شراء أجهزة منزلية مستعملة</li>
              <li>• شراء أثاث غرف النوم المستعمل</li>
              <li>• تقييم مجاني في الموقع خلال 30 دقيقة</li>
              <li>• دفع نقدي فوري بدون تأخير</li>
              <li>• خدمة منزلية مجانية في الدمام</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 mb-2">
            © {currentYear} شراء أثاث مستعمل في الدمام. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-background/50">
            أفضل خدمة لشراء الأثاث المستعمل في الدمام والمنطقة الشرقية - أسعار منافسة وخدمة سريعة
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer