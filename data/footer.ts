export const footerGroups = [
  {
    id: "explore",
    titleKey: "explore",
    links: [
      {
        id: "courses",
        labelKey: "courses",
        href: "#courses",
      },
      {
        id: "categories",
        labelKey: "categories",
        href: "#courses",
      },
      {
        id: "instructors",
        labelKey: "instructors",
        href: "#community",
      },
      {
        id: "teams",
        labelKey: "teams",
        href: "#contact",
      },
    ],
  },
  {
    id: "company",
    titleKey: "company",
    links: [
      {
        id: "about",
        labelKey: "about",
        href: "#contact",
      },
      {
        id: "careers",
        labelKey: "careers",
        href: "#contact",
      },
      {
        id: "journal",
        labelKey: "journal",
        href: "#community",
      },
    ],
  },
  {
    id: "support",
    titleKey: "support",
    links: [
      {
        id: "helpCenter",
        labelKey: "helpCenter",
        href: "#contact",
      },
      {
        id: "contact",
        labelKey: "contact",
        href: "#contact",
      },
      {
        id: "terms",
        labelKey: "terms",
        href: "#contact",
      },
      {
        id: "privacy",
        labelKey: "privacy",
        href: "#contact",
      },
    ],
  },
] as const;

export type FooterGroup = (typeof footerGroups)[number];
