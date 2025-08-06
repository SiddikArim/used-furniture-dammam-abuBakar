import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    furnitureType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (in real app, you'd send to your backend)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "تم إرسال طلبك بنجاح!",
        description: "سنتواصل معك خلال 30 دقيقة لتحديد موعد التقييم المجاني",
      });

      setFormData({
        name: '',
        phone: '',
        location: '',
        furnitureType: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى أو الاتصال مباشرة",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            احصل على تقييم مجاني
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            املأ النموذج وسنتواصل معك خلال 30 دقيقة لتحديد موعد التقييم المجاني
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="soft-shadow border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                نموذج التواصل
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
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="رقم الهاتف *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="text-right"
                  />
                </div>

                <div>
                  <Input
                    name="location"
                    placeholder="المنطقة في الدمام *"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="text-right"
                  />
                </div>

                <div>
                  <Input
                    name="furnitureType"
                    placeholder="نوع الأثاث المراد بيعه"
                    value={formData.furnitureType}
                    onChange={handleChange}
                    className="text-right"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="تفاصيل إضافية (اختياري)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="text-right resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full hero-gradient text-white border-0 hover:opacity-90 text-lg py-6 h-auto"
                >
                  <Send className="ml-2 h-5 w-5" />
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال طلب التقييم'}
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
                    <h3 className="font-bold text-lg">اتصل الآن</h3>
                    <p className="text-2xl font-black text-primary">0540601180</p>
                    <p className="text-sm text-muted-foreground">متاح 24 ساعة</p>
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
                    <p className="text-lg font-semibold">الدمام وضواحيها</p>
                    <p className="text-sm text-muted-foreground">خدمة منزلية مجانية</p>
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
                    <p className="text-lg font-semibold">يومياً من 8 ص إلى 10 م</p>
                    <p className="text-sm text-muted-foreground">بما في ذلك عطلة نهاية الأسبوع</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-accent/20 rounded-lg p-6 text-center">
              <h3 className="font-bold text-lg mb-2">ضمان أفضل سعر</h3>
              <p className="text-muted-foreground">
                إذا وجدت سعراً أفضل من منافس آخر، سنضاهيه أو نتجاوزه
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;