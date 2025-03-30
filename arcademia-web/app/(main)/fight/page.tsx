"use client";

import { useState } from "react";
import FightAddition from "@/app/components/FightAddition";
import ExpGained from "@/app/components/expGained";

const monsters = [
  {
    question: "2 + 5 = ?",
    answer: 7,
    monsterImgSrc: "/assets/monsters/monster1.png",
  },
  {
    question: "3 + 6 = ?",
    answer: 9,
    monsterImgSrc: "/assets/monsters/monster2.png",
  },
  {
    question: "7 + 1 = ?",
    answer: 8,
    monsterImgSrc: "/assets/monsters/monster1.png",
  },
];

export type Stats = {
  science: number;
  code: number;
  math: number;
  english: number;
};

export default function Battle() {
  const [current, setCurrent] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [battleDone, setBattleDone] = useState(false);

  // Rewards after last fight
  const [expGain, setExpGain] = useState(0);
  const [coinsGain, setCoinsGain] = useState(0);
  const [statGain, setStatGain] = useState<Partial<Stats>>({});

  const handleNext = (
    earnedExp: number,
    earnedCoins: number,
    earnedStats: Partial<Stats>
  ) => {
    const isLast = current >= monsters.length - 1;
    const isDead = hearts <= 0;

    if (isLast || isDead) {
      setExpGain(earnedExp);
      setCoinsGain(earnedCoins);
      setStatGain(earnedStats);
      setBattleDone(true);
    } else {
      setCurrent(current + 1);
    }
  };

  if (battleDone) {
    return <ExpGained Exp={expGain} Coins={coinsGain} statGain={statGain} />;
  }

  const currentMonster = monsters[current];

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
