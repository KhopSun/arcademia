"use client";

import { useState } from "react";
import ExpGained from "@/app/components/expGained";
import LearnAddition from "@/app/components/LearnAddition";

const questions = [
  {
    question: "2 + 5 = ?",
    answer: 7,
  },
  {
    question: "3 + 6 = ?",
    answer: 9,
  },
  {
    question: "7 + 1 = ?",
    answer: 8,
  },
];

export type Stats = {
  science: number;
  code: number;
  math: number;
  english: number;
};

export default function Battle() {
  const [current, setCurrent] = useState<number>(0);
  const [hearts, setHearts] = useState<number>(3);
  const [battleDone, setBattleDone] = useState<boolean>(false);

  const [expGain, setExpGain] = useState<number>(0);
  const [coinsGain, setCoinsGain] = useState<number>(0);
  const [statGain, setStatGain] = useState<Partial<Stats>>({});

  const handleNext = ({
    earnedExp,
    earnedCoins,
    earnedStats,
  }: {
    earnedExp: number;
    earnedCoins: number;
    earnedStats: Partial<Stats>;
  }) => {
    const isLast = current >= questions.length - 1;
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
    return <ExpGained isWon={true} Exp={expGain} Coins={coinsGain} statGain={statGain} />;
  }

  const currentMonster = questions[current];

  return (
    <LearnAddition
      key={current}
      question={currentMonster.question}
      answer={currentMonster.answer}
      onNext={handleNext}
    />
  );
}
