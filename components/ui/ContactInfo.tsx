import { useTranslations } from "next-intl";
import { Clock3, MessageCircleMore } from "lucide-react";
import type { ReactNode } from "react";

interface ContactInfoItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

function ContactInfoItem({ icon, title, children }: ContactInfoItemProps) {
  return (
    <div className="flex min-h-23 w-full items-center gap-4 rounded-xl bg-background-light-yellow p-5">
      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light p-2.5 text-primary">
        {icon}
      </div>

      {/* Content */}
      <div className="min-w-0">
        <p className="font-sans text-sm font-normal leading-6 tracking-normal text-text-primary">
          {title}
        </p>

        <div className="font-sans text-sm font-normal leading-6 tracking-normal text-text-tertiary">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  const t = useTranslations("Contact.info");

  return (
    <div className="mt-10 flex w-full max-w-120 flex-col gap-4">
      {/* Email */}
      <ContactInfoItem
        icon={<MessageCircleMore size={20} strokeWidth={1.8} />}
        title={t("email")}
      >
        <a
          href="mailto:contact@luma.com"
          className="break-all text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          contact@luma.com
        </a>
      </ContactInfoItem>

      {/* Response time */}
      <ContactInfoItem
        icon={<Clock3 size={20} strokeWidth={1.8} />}
        title={t("responseTime")}
      >
        {t("responseDescription")}
      </ContactInfoItem>
    </div>
  );
}
