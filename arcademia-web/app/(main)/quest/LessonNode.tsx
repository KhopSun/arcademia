"use client";
import React from 'react';
import { Lesson } from '@/app/lib/lessons';
import { FaLock, FaCheck, FaStar, FaBookOpen } from 'react-icons/fa'; 
interface LessonNodeProps {
  lesson: Lesson;
  isFirst: boolean;
  isLast: boolean; 
}

const LessonNode: React.FC<LessonNodeProps> = ({ lesson, isFirst, isLast }) => {

  const getStatusStyles = (): string => {
    switch (lesson.status) {
      case 'completed':
        return 'bg-green-500 border-green-600 text-white';
      case 'current':
        return 'bg-blue-500 border-blue-600 text-white ring-4 ring-blue-300 ring-offset-2 animate-pulse';
      case 'unlocked':
        return 'bg-sky-400 border-sky-500 text-white hover:bg-sky-500 cursor-pointer transition-colors';
      case 'locked':
      default:
        return 'bg-gray-300 border-gray-400 text-gray-500 cursor-not-allowed';
    }
  };

    const getIcon = () => {
        switch (lesson.status) {
        case 'completed':
            return <FaCheck className="w-5 h-5" />;
        case 'current':
            return <FaStar className="w-5 h-5" />; 
        case 'locked':
            return <FaLock className="w-5 h-5" />;
        case 'unlocked':
            return <FaBookOpen className="w-5 h-5 opacity-80" />;
        default:
            return null;
        }
    };

  const handleClick = () => {
    if (lesson.status === 'unlocked' || lesson.status === 'current') {
      alert(`Starting lesson: ${lesson.title}`);
    }
  };

  const statusStyles = getStatusStyles();
  const icon = getIcon();

  return (
    <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md">
      {!isFirst && (
        <div
          className={`h-10 w-1 border-l-2 ${
            lesson.status === 'locked' ? 'border-gray-300' : 'border-green-500' 
          } border-dashed`}
        />
      )}

      <div className="flex flex-col items-center relative">
         <div className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 bg-gray-700 text-white text-xs rounded shadow-lg whitespace-nowrap">
            {lesson.title} - {lesson.status.charAt(0).toUpperCase() + lesson.status.slice(1)}
         </div>

        <button
          onClick={handleClick}
          disabled={lesson.status === 'locked'}
          className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${statusStyles} ${lesson.status !== 'locked' ? 'transform hover:scale-105 transition-transform' : ''}`}
          aria-label={`${lesson.title} - Status: ${lesson.status}`}
        >
          {icon}
        </button>

        <span className={`mt-2 text-center text-sm font-semibold ${lesson.status === 'locked' ? 'text-gray-400' : 'text-gray-700'}`}>
          {lesson.title}
        </span>
      </div>
    </div>
  );
};

export default LessonNode;