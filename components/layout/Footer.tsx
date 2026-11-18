import { useTranslations } from "next-intl";
import FooterLinks from "@/components/ui/FooterLinks";
import { footerGroups } from "@/data/footer";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#191D30] text-white">
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-8 md:px-10 md:pt-20 md:pb-10">
        {/* Footer main content */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#home"
              aria-label={t("home")}
              className="inline-block text-[22px] font-bold tracking-tight text-white"
            >
              luma.
            </a>

            <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-white/55">
              {t("description")}
            </p>
          </div>

          {/* Navigation groups */}
          {footerGroups.map((group) => (
            <FooterLinks key={group.id} group={group} />
          ))}
        </div>

        {/* Footer bottom */}
        <div className="mt-16 border-t border-white/25 pt-6 md:mt-20">
          <p className="text-center text-xs text-white/80 md:text-left">
            {t("copyright", { year: 2026 })}
          </p>
        </div>
      </div>
    </footer>
  );
}