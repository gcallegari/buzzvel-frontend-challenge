
export interface Category {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
}

export const categories: Category[] = [
  {
    id: "product-design",
    number: "01",
    title: "Product Design",
    description:
      "Turn complex problems into clear, useful experiences.",
    href: "#featured-course",
  },
  {
    id: "technology",
    number: "02",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
    href: "#featured-course",
  },
  {
    id: "business",
    number: "03",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger results.",
    href: "#featured-course",
  },
  {
    id: "creative",
    number: "04",
    title: "Creative",
    description:
      "Explore new ways to communicate, create and tell stories.",
    href: "#featured-course",
  },
];
