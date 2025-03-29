'use client'

import { useState } from 'react';
import FightAddition from '@/app/components/FightAddition';

const monsters = [
  {
    question: '2 + 5 = ?',
    answer: 7,
    monsterImgSrc: '/assets/monsters/monster1.png',
  },
  {
    question: '3 + 6 = ?',
    answer: 9,
    monsterImgSrc: '/assets/monsters/monster2.png',
  },
  {
    question: '7 + 1 = ?',
    answer: 8,
    monsterImgSrc: '/assets/monsters/monster1.png',
  },
];

export default function Battle() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < monsters.length - 1) {
      setCurrent(current + 1);
    } else {
      alert('You have defeated all the monsters! 🎉');
      // You can route to another scene here
    }
  };

  const currentMonster = monsters[current];
  const [hearts, setHearts] = useState(3);

  return (
    <FightAddition
        key={current}
        question={currentMonster.question}
        answer={currentMonster.answer}
        monsterImgSrc={currentMonster.monsterImgSrc}
        onNext={handleNext}
        hearts={hearts}
        setHearts={setHearts}
    />
  );
}
