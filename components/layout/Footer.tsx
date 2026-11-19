
import { useTranslations } from "next-intl";
import FooterLinks from "@/components/ui/FooterLinks";
import { footerGroups } from "@/data/footer";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#191D30] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-14 pb-8 md:px-10 md:pt-20 md:pb-10">
        {/* Footer main content */}
        <div className="grid grid-cols-2 gap-10 min-[1216px]:grid-cols-[416px_repeat(3,208px)] min-[1216px]:gap-8">
          {/* Brand */}
          <div className="col-span-2 min-[1216px]:col-span-1">
            <a
              href="#home"
              aria-label={t("home")}
              className="inline-block text-[22px] font-bold tracking-tight text-white"
            >
              luma.
            </a>

         <p className="mt-2 w-full whitespace-nowrap text-sm leading-6 text-white/55 md:max-w-[220px] md:whitespace-normal">
  {t("description")}
</p>
          </div>

          {/* Navigation groups */}
          {footerGroups.map((group) => (
            <FooterLinks key={group.id} group={group} />
          ))}
        </div>

        {/* Footer bottom */}
<div className="mt-12 border-t border-white/25 pt-6 md:mt-16">
          <p className="text-center text-xs text-white/80 min-[1216px]:text-left">
            {t("copyright", { year: 2026 })}
          </p>
        </div>
      </div>
    </footer>
  );
}
