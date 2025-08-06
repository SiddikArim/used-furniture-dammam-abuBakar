import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const phoneNumber = "+966540601180";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/966540601180?text=مرحباً، أرغب في الاستفسار عن خدمات شراء الأثاث المستعمل`,
      "_blank"
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <h1 className="text-xl font-bold text-primary">شراء أثاث مستعمل</h1>
          <span className="text-sm text-muted-foreground hidden md:block">
            الدمام
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={handleWhatsApp}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <MessageCircle color="green" className="h-4 w-4" />
            <span className="hidden text-green-500 sm:inline">واتساب</span>
          </Button>

          <Button
            onClick={handleCall}
            className="gap-2 hero-gradient text-white border-0 hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">اتصل الآن</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
