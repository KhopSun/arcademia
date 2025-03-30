"use client";

import { useState } from "react";
import BossAddition from "@/app/components/BossAddition";
import ExpGained from "@/app/components/expGained";

export type Stats = {
  science: number;
  code: number;
  math: number;
  english: number;
};

const questions = [
  { question: "7 + 5 = ?", answer: 12 },
  { question: "6 + 7 = ?", answer: 13 },
  { question: "7 + 8 = ?", answer: 15 },
  { question: "13 + 4 = ?", answer: 17 },
  { question: "9 + 2 = ?", answer: 11 },
  { question: "6 + 19 = ?", answer: 25 },
];

export default function Battle() {
  const [current, setCurrent] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [bossHealth, setBossHealth] = useState(100);
  const [battleDone, setBattleDone] = useState(false);

  const [expGain, setExpGain] = useState(0);
  const [coinsGain, setCoinsGain] = useState(0);
  const [statGain, setStatGain] = useState<Partial<Stats>>({});

  const handleNext = (
    earnedExp: number,
    earnedCoins: number,
    earnedStats: Partial<Stats>
  ) => {
    const newHealth = bossHealth - 25;
    setBossHealth(newHealth);

    const isDead = newHealth <= 0;
    const isLastQuestion = current >= questions.length - 1;

    if (isDead || hearts <= 0 || isLastQuestion) {
      setExpGain(isDead ? earnedExp : 0);
      setCoinsGain(isDead ? earnedCoins : 0);
      setStatGain(isDead ? earnedStats : {});
      setBattleDone(true);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  if (battleDone) {
    return <ExpGained Exp={expGain} Coins={coinsGain} statGain={statGain} />;
  }

  const currentQuestion = questions[current];

  return (
    <BossAddition
      key={current}
      question={currentQuestion.question}
      answer={currentQuestion.answer}
      monsterImgSrc="/assets/monsters/monster1.png"
      onNext={handleNext}
      hearts={hearts}
      setHearts={setHearts}
      bossHealth={bossHealth}
    />
  );
}
