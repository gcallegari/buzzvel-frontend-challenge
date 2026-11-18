import { useTranslations } from "next-intl";
import { Clock3, MessageCircleMore } from "lucide-react";
import type { ReactNode } from "react";

interface ContactInfoItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

function ContactInfoItem({
  icon,
  title,
  children,
}: ContactInfoItemProps) {
  return (
    <div className="flex min-h-[72px] items-center gap-3 rounded-xl bg-background p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#E4E9FF] text-primary">
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium text-foreground">
          {title}
        </p>

        <div className="mt-1 text-xs leading-relaxed text-foreground/60">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  const t = useTranslations("Contact.info");

  return (
    <div className="mt-8 flex flex-col gap-3">
      <ContactInfoItem
        icon={<MessageCircleMore size={18} strokeWidth={1.8} />}
        title={t("email")}
      >
        <a
          href="mailto:contact@luma.com"
          className="text-primary hover:underline"
        >
          contact@luma.com
        </a>
      </ContactInfoItem>

      <ContactInfoItem
        icon={<Clock3 size={18} strokeWidth={1.8} />}
        title={t("responseTime")}
      >
        {t("responseDescription")}
      </ContactInfoItem>
    </div>
  );
}