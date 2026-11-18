export const stats = [
  {
    id: "learners",
    value: "24K+",
    translationKey: "learners",
  },
  {
    id: "courses",
    value: "120+",
    translationKey: "courses",
  },
  {
    id: "completion",
    value: "92%",
    translationKey: "completion",
  },
] as const;

export type Stat = (typeof stats)[number];