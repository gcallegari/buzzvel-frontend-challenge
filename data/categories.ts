export const categories = [
  {
    id: "product-design",
    number: "01",
    translationKey: "productDesign",
    href: "#featured-course",
  },
  {
    id: "technology",
    number: "02",
    translationKey: "technology",
    href: "#featured-course",
  },
  {
    id: "business",
    number: "03",
    translationKey: "business",
    href: "#featured-course",
  },
  {
    id: "creative",
    number: "04",
    translationKey: "creative",
    href: "#featured-course",
  },
] as const;

export type Category = (typeof categories)[number];
