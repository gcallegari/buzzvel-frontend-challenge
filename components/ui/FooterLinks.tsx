import { useTranslations } from "next-intl";
import type { FooterGroup } from "@/data/footer";

interface FooterLinksProps {
  group: FooterGroup;
}

export default function FooterLinks({ group }: FooterLinksProps) {
  const t = useTranslations("Footer");

  const title = t(`groups.${group.titleKey}.title`);

  return (
    <nav aria-label={t("navigationLabel", { group: title })}>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
        {title}
      </h3>

      <ul className="flex flex-col gap-4">
        {group.links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="text-sm text-white/55 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t(`groups.${group.titleKey}.links.${link.labelKey}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}