export interface Lesson {
  type: any;
  id: number;
  title: string;
  status: "locked" | "unlocked" | "completed" | "current";
  boss?: string;
  icon?: React.ReactNode;
}

export const lessonsData: Lesson[] = [
  {
    type: "lesson",
    id: 1,
    title: "Lesson",
    status: "completed",
    boss: "monster1",
  },
  {
    type: "fight",
    id: 2,
    title: "Fight",
    status: "current",
    boss: "final_math_boss",
  },
  {
    type: "boss",
    id: 3,
    title: "Boss Fight",
    status: "locked",
    boss: "final_math_boss",
  },
];
