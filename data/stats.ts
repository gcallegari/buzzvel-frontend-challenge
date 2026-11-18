
export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  {
    id: "learners",
    value: "24K+",
    label: "active learners",
  },
  {
    id: "courses",
    value: "120+",
    label: "expert-led courses",
  },
  {
    id: "completion",
    value: "92%",
    label: "complete their first course",
  },
];
