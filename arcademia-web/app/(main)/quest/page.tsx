"use client";

import React, { useState, useEffect } from "react";
import LessonNode from "./LessonNode";
import { lessonsData as initialLessonsData, Lesson } from "@/app/lib/lessons";

const QuestPage: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>(initialLessonsData);

  // Optional: keep track of current lesson
  const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(() =>
    initialLessonsData.find((lesson) => lesson.status === "current")
  );

  useEffect(() => {
    const updatedLesson = lessons.find((lesson) => lesson.status === "current");
    setCurrentLesson(updatedLesson);
  }, [lessons]);

  // ✅ Called when a lesson is completed
  const completeLesson = (lessonId: number) => {
    setLessons((prev) => {
      const updated = [...prev];
      const index = updated.findIndex((l) => l.id === lessonId);

      if (index !== -1) {
        // Mark current lesson as completed
        updated[index].status = "completed";

        // Unlock next lesson if exists and is locked
        if (updated[index + 1] && updated[index + 1].status === "locked") {
          updated[index + 1].status = "current";
        }
      }

      return updated;
    });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen gap-12 p-8 sm:p-12 bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/background/quest_background.png')",
        backgroundSize: "130%",
      }}
    >
      {lessons.map((lesson, index) => (
        <div key={lesson.id} className="w-full max-w-md flex justify-center">
          <LessonNode
            lesson={lesson}
            isFirst={index === 0}
            isLast={index === lessons.length - 1}
            onComplete={completeLesson} // ✅ pass complete function
          />
        </div>
      ))}
    </div>
  );
};

export default QuestPage;
