"use client";  

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { lessonsData } from '@/app/lib/lessons';
import LessonNode from './LessonNode';
import { Lesson } from '@/app/lib/lessons';

const getMonsterPosition = (index: number): React.CSSProperties => {
    const verticalOffset = '50%'; 
    const horizontalSpacing = '20%'; 
    const horizontalOffset = `calc(100% + ${horizontalSpacing})`;
    const transform = 'translateY(-50%)';

    if (index % 2 === 1) {
        return {
            top: verticalOffset,
            left: horizontalOffset,
            transform: transform,
        };
    } else { 
        return {
            top: verticalOffset,
            right: horizontalOffset,
            transform: transform,
        };
    }
};

const QuestPage: React.FC = () => {
    const [currentLesson, setCurrentLesson] = React.useState<Lesson | undefined>(() =>
        lessonsData.find(lesson => lesson.status === 'current')
    );

    React.useEffect(() => {
        const updatedLesson = lessonsData.find(lesson => lesson.status === 'current');
        setCurrentLesson(updatedLesson);
    }, [lessonsData]);

    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-8 sm:p-12 font-[family-name:var(--font-geist-sans)] bg-[url('/assets/background/grasslandscape.jpg')] bg-center bg-cover pt-20 sm:pt-24">

            {lessonsData.map((lesson, index) => {

                const isCurrent = lesson.id === currentLesson?.id;

                return (
                
                    <div key={lesson.id} className="w-full max-w-md flex justify-center mb-6 sm:mb-8">

                        <div className="relative inline-block">
                            <LessonNode
                                lesson={lesson}
                                isFirst={index === 0}
                                isLast={index === lessonsData.length - 1}
                            />

                            {isCurrent && lesson.boss && (
                                <motion.div
                                    className="absolute w-24 h-24 sm:w-20 sm:h-20 rounded-lg overflow-hidden z-10"
                                    style={getMonsterPosition(index)}
                                    animate={{
                                        transform: [
                                            'translateY(-50%)',
                                            'translateY(-65%)', 
                                            'translateY(-50%)'  
                                        ]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                >
                                    <Image
                                        src={`/assets/monsters/${lesson.boss}.png`}
                                        alt={`${lesson.boss || 'Quest Boss'} Monster`}
                                        layout="fill"
                                        objectFit="contain"
                                        priority={isCurrent}
                                    />
                                </motion.div>
                            )}
                        </div> 
                    </div>
                );
            })}
        </div>
    );
};

export default QuestPage;
