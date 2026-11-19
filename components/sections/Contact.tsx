
import { useTranslations } from "next-intl";
import ContactForm from "@/components/ui/ContactForm";
import ContactInfo from "@/components/ui/ContactInfo";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-background-white py-16 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-[80px]">
        {/* Contact information */}
        <div className="w-full min-w-0 lg:max-w-[480px]">
          {/* Section heading */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs font-semibold leading-4 tracking-[1.44px] uppercase text-primary">
              {t("eyebrow")}
            </p>

            <h2
              id="contact-title"
              className="font-heading text-[32px] font-extrabold leading-[1.2] tracking-[-1.2px] text-text-primary lg:text-[48px] lg:leading-[56px]"
            >
              {t("title")}
            </h2>

            <p className="font-sans text-base font-normal leading-7 tracking-normal text-text-secondary lg:text-lg">
              {t("description")}
            </p>
          </div>

          {/* Contact details */}
          <ContactInfo />
        </div>

     {/* Contact form */}
  <div className="w-full min-w-0 lg:max-w-[540px]">
  <ContactForm />
</div>
      </div>
    </section>
  );
}
