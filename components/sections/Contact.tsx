import { useTranslations } from "next-intl";
import ContactForm from "@/components/ui/ContactForm";
import ContactInfo from "@/components/ui/ContactInfo";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16 lg:px-10">
        {/* Contact information */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            {t("eyebrow")}
          </p>

          <h2
            id="contact-title"
            className="text-[30px] font-bold leading-[1.1] tracking-tight md:text-[42px]"
          >
            {t("title")}
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
            {t("description")}
          </p>

          <ContactInfo />
        </div>

        {/* Contact form */}
        <ContactForm />
      </div>
    </section>
  );
}