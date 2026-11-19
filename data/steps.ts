export type StepColor = "blue" | "orange" | "yellow";

export const steps = [
  {
    id: 1,
    number: "01",
    translationKey: "chooseFocus",
    color: "blue",
  },
  {
    id: 2,
    number: "02",
    translationKey: "learnExperience",
    color: "orange",
  },
  {
    id: 3,
    number: "03",
    translationKey: "putIntoPractice",
    color: "yellow",
  },
] as const satisfies ReadonlyArray<{
  id: number;
  number: string;
  translationKey: string;
  color: StepColor;
}>;

export type Step = (typeof steps)[number];
