"use client";

import { useState, useEffect } from "react";
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
  const [isWon, setIsWon] = useState(false);

  const [expGain, setExpGain] = useState(0);
  const [coinsGain, setCoinsGain] = useState(0);
  const [statGain, setStatGain] = useState<Partial<Stats>>({});

  const handleNext = (
    earnedExp: number,
    earnedCoins: number,
    earnedStats: Partial<Stats>
  ) => {
    const newHealth = Math.max(bossHealth - 25, 0);
    setBossHealth(newHealth);

    const isDead = newHealth <= 0;
    const isLast = current >= questions.length - 1;
    const playerWon = isDead && !isLast && hearts > 0;

    if (isDead || isLast || hearts <= 0) {
      setIsWon(playerWon);
      setExpGain(playerWon ? earnedExp : 0);
      setCoinsGain(playerWon ? earnedCoins : 0);
      setStatGain(playerWon ? earnedStats : {});
      setBattleDone(true);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (hearts <= 0 && !battleDone) {
      // player died → lose
      setIsWon(false);
      setBattleDone(true);
    }
  }, [hearts, battleDone]);

  if (battleDone) {
    return (
      <ExpGained
        isWon={isWon}
        Exp={expGain}
        Coins={coinsGain}
        statGain={statGain}
      />
    );
  }

  const currentQuestion = questions[current];

  return (
    <BossAddition
      key={current}
      question={currentQuestion.question}
      answer={currentQuestion.answer}
      monsterImgSrc="/assets/monsters/final_math_boss.png"
      onNext={handleNext}
      hearts={hearts}
      setHearts={setHearts}
      bossHealth={bossHealth}
      onWin={() => setIsWon(true)}
      onLose={() => setIsWon(false)}
    />
  );
}
