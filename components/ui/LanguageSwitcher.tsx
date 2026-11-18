"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function changeLanguage(nextLocale: "en" | "pt-PT") {
    if (nextLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="inline-flex items-center gap-2 text-sm font-semibold"
    >
      <button
        type="button"
        lang="en"
        aria-label="English"
        aria-pressed={locale === "en"}
        disabled={isPending}
        onClick={() => changeLanguage("en")}
        className={`transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
          locale === "en"
            ? "text-primary"
            : "text-foreground/50 hover:text-foreground"
        }`}
      >
        EN
      </button>

      <span aria-hidden="true" className="text-foreground/30">
        |
      </span>

      <button
        type="button"
        lang="pt-PT"
        aria-label="Português de Portugal"
        aria-pressed={locale === "pt-PT"}
        disabled={isPending}
        onClick={() => changeLanguage("pt-PT")}
        className={`transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
          locale === "pt-PT"
            ? "text-primary"
            : "text-foreground/50 hover:text-foreground"
        }`}
      >
        PT
      </button>
    </div>
  );
}