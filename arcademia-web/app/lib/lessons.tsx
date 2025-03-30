export interface Lesson {
  type: any;
  id: number;
  title: string;
  status: "locked" | "unlocked" | "completed" | "current";
  boss?: string;
  icon?: React.ReactNode;
  path: string;
}

export const lessonsData: Lesson[] = [
  {
    type: "lesson",
    id: 1,
    title: "Lesson",
    status: "current",
    boss: "monster1",
    path: "/quest/stage/1/learn",
  },
  {
    type: "fight",
    id: 2,
    title: "Fight",
    status: "locked",
    boss: "final_math_boss",
    path: "/fight",
  },
  {
    type: "boss",
    id: 3,
    title: "Boss Fight",
    status: "locked",
    boss: "final_math_boss",
    path: "/boss",
  },
];
