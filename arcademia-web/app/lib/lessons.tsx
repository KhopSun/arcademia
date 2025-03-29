export interface Lesson {
    id: number;
    title: string;
    status: 'locked' | 'unlocked' | 'completed' | 'current';
    boss?: string; 
    icon?: React.ReactNode; 
}
  
export const lessonsData: Lesson[] = [
{ id: 1, title: 'Basics 1', status: 'completed', boss: 'monster1' },
{ id: 2, title: 'Phrases', status: 'completed', boss: 'final_math_boss'},
{ id: 3, title: 'Food', status: 'current', boss: 'monster1' },
{ id: 4, title: 'Animals', status: 'unlocked', boss: 'final_math_boss'},
{ id: 5, title: 'Plurals', status: 'locked'},
{ id: 6, title: 'Possessives', status: 'locked' },
];