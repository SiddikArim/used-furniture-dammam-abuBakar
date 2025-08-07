'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    furnitureType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call (in real app, you'd send to your backend)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "تم إرسال طلبك بنجاح!",
        description: "سنتواصل معك خلال 30 دقيقة لتحديد موعد التقييم المجاني لأثاثك المستعمل",
      })

      setFormData({
        name: '',
        phone: '',
        location: '',
        furnitureType: '',
        message: ''
      })
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى أو الاتصال مباشرة على 0540601180",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            احصل على تقييم مجاني لأثاثك المستعمل
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            املأ النموذج وسنتواصل معك خلال 30 دقيقة لتحديد موعد التقييم المجاني لأثاثك المستعمل في الدمام
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="soft-shadow border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                نموذج طلب تقييم الأثاث المستعمل
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="الاسم الكامل *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="text-right"
                    aria-label="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="رقم الهاتف * (مثال: 0540601180)"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="text-right"
                    aria-label="أدخل رقم هاتفك"
                  />
                </div>

                <div>
                  <Input
                    name="location"
                    placeholder="المنطقة في الدمام * (مثال: الفيصلية، الشاطئ، الضباب)"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="text-right"
                    aria-label="أدخل منطقتك في الدمام"
                  />
                </div>

                <div>
                  <Input
                    name="furnitureType"
                    placeholder="نوع الأثاث المراد بيعه (مثال: غرفة نوم، مطبخ، كنب)"
                    value={formData.furnitureType}
                    onChange={handleChange}
                    className="text-right"
                    aria-label="أدخل نوع الأثاث المراد بيعه"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="تفاصيل إضافية عن الأثاث المستعمل (حالة الأثاث، العمر، إلخ)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="text-right resize-none"
                    aria-label="أدخل تفاصيل إضافية عن أثاثك"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full hero-gradient text-white border-0 hover:opacity-90 text-lg py-6 h-auto"
                  aria-label="إرسال طلب تقييم الأثاث المستعمل"
                >
                  <Send className="ml-2 h-5 w-5" />
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال طلب التقييم المجاني'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="soft-shadow border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">اتصل الآن لشراء أثاث مستعمل</h3>
                    <p className="text-2xl font-black text-primary">0540601180</p>
                    <p className="text-sm text-muted-foreground">متاح 24 ساعة - خدمة سريعة</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="soft-shadow border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">منطقة الخدمة</h3>
                    <p className="text-lg font-semibold">الدمام وجميع ضواحيها</p>
                    <p className="text-sm text-muted-foreground">خدمة منزلية مجانية في جميع أحياء الدمام</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="soft-shadow border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">أوقات العمل</h3>
                    <p className="text-lg font-semibold">يومياً من 8 صباحاً إلى 10 مساءً</p>
                    <p className="text-sm text-muted-foreground">بما في ذلك عطلة نهاية الأسبوع والعطل الرسمية</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-accent/20 rounded-lg p-6 text-center">
              <h3 className="font-bold text-lg mb-2">ضمان أفضل سعر للأثاث المستعمل</h3>
              <p className="text-muted-foreground">
                إذا وجدت سعراً أفضل من منافس آخر لشراء أثاثك المستعمل، سنضاهيه أو نتجاوزه
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm