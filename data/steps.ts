
export type StepColor = "blue" | "orange" | "yellow";

export interface Step {
  id: number;
  number: string;
  title: string;
  description: string;
  color: StepColor;
}

export const steps: Step[] = [
  {
    id: 1,
    number: "01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    color: "blue",
  },
  {
    id: 2,
    number: "02",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
    color: "orange",
  },
  {
    id: 3,
    number: "03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    color: "yellow",
  },
];
