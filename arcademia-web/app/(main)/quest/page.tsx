"use client";

import React from 'react';
import LessonNode from './LessonNode';
import { Lesson } from '@/app/lib/lessons';

const lessonsData: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Lesson',
    status: 'completed',
    type: 'lesson',
  },
  {
    id: 'fight-1',
    title: 'Fight',
    status: 'current',
    type: 'fight',
  },
  {
    id: 'boss-1',
    title: 'Boss Fight',
    status: 'locked',
    type: 'boss',
    boss: 'monster3',
  },
];

const QuestPage: React.FC = () => {
  const [currentLesson, setCurrentLesson] = React.useState<Lesson | undefined>(() =>
    lessonsData.find((lesson) => lesson.status === 'current')
  );

  React.useEffect(() => {
    const updatedLesson = lessonsData.find((lesson) => lesson.status === 'current');
    setCurrentLesson(updatedLesson);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen gap-12 p-8 sm:p-12 bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/background/Journey3.webp')",
        backgroundSize: '400%', // 🔍 Zoomed in 2× more
      }}
    >
      {lessonsData.map((lesson, index) => (
        <div key={lesson.id} className="w-full max-w-md flex justify-center">
          <LessonNode
            lesson={lesson}
            isFirst={index === 0}
            isLast={index === lessonsData.length - 1}
          />
        </div>
      ))}
    </div>
  );
};

export default QuestPage;
