
import type { FooterGroup } from "@/data/footer";

interface FooterLinksProps {
  group: FooterGroup;
}

export default function FooterLinks({ group }: FooterLinksProps) {
  return (
    <nav aria-label={`${group.title} links`}>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
        {group.title}
      </h3>

      <ul className="flex flex-col gap-4">
        {group.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-white/55 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
