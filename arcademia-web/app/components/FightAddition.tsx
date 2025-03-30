"use client";

import React, { useEffect, useState } from "react";
import HitEffect from "./HitEffect";

export type Stats = {
  science: number;
  code: number;
  math: number;
  english: number;
};

type FightAdditionProps = {
  question: string;
  answer: number;
  onNext: (exp: number, coins: number, statGain: Partial<Stats>) => void;
  monsterImgSrc: string;
  hearts: number;
  setHearts: React.Dispatch<React.SetStateAction<number>>;
  onWin: () => void;
  onLose: () => void;
};

export default function FightAddition({
  question,
  answer,
  onNext,
  monsterImgSrc,
  hearts,
  setHearts,
  onWin,
  onLose,
}: FightAdditionProps) {
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showHitEffect, setShowHitEffect] = useState(false);

  const handleButtonClick = (value: string) => {
    if (!isCorrect && !gameOver) {
      setInput((prev) => prev + value);
    }
  };

  const handleClear = () => {
    if (!isCorrect && !gameOver) {
      setInput("");
    }
  };

  useEffect(() => {
    if (hearts <= 0 && !gameOver) {
      setGameOver(true);
      setTimeout(() => {
        onLose(); // Call onLose when the game is over due to no hearts
        onNext(0, 0, {});
      }, 1000);
    }
  }, [hearts, gameOver, onLose, onNext]);

  const handleSubmit = () => {
    if (parseInt(input) === answer) {
      setIsCorrect(true);
      setTimeout(() => {
        onWin(); // Call onWin when the answer is correct
        onNext(100, 150, { math: 5 });
      }, 1000);
    } else {
      setHearts((prev) => prev - 1);
      setInput("");
      setShowHitEffect(true);
    }
  };

  const renderHearts = () => (
    <div className="flex absolute right-15 space-x-3 mb-2 mt-1">
      {Array.from({ length: 3 }).map((_, i) => (
        <i
          key={i}
          className={`nes-icon is-medium ${
            i < hearts ? "heart" : "heart is-empty"
          }`}
        ></i>
      ))}
    </div>
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-no-repeat bg-center bg-cover p-6"
      style={{
        backgroundImage: "url('/assets/background/fight/Autumn2.png')",
        backgroundSize: "250% 175%",
      }}
    >
      <HitEffect trigger={showHitEffect} onEnd={() => setShowHitEffect(false)} />
      {/* 🟡 Top Status */}
      <div className="mt-4 mb-2 text-center h-8 z-50">
        {isCorrect && (
          <p className="text-[#fff275] font-bold text-xl animate-bounce">
            Monster Defeated!
          </p>
        )}
        {gameOver && (
          <p className="text-red-400 font-bold text-xl">💀 Game Over 💀</p>
        )}
      </div>
      {renderHearts()}
      {/* ❓ Question + ❤️ Hearts */}
      <div className="bg-[#e5d9c4] nes-container is-rounded  px-4 py-0 shadow-md max-w-md text-center">
        <span className="text-black font-bold text-2xl leading-none inline-block mt-2 mb-2">
          {question}
        </span>
      </div>

      {/* 👾 Monster */}
      <img
        src={monsterImgSrc}
        alt="monster"
        className="w-64 h-64 object-contain mb-2"
      />

      {/* 📦 Battle Box UI */}
      <div className="bg-[#e5d9c4] border-4 border-[#000000] rounded-xl p-4 shadow-xl w-full max-w-md">
        {/* 🧠 Input */}
        <input
          type="text"
          readOnly
          className="text-center w-full bg-white p-3 rounded text-[#000000] mb-6 font-mono text-lg"
          value={input}
          placeholder="Your answer"
        />

        {/* 🔢 Numpad */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleButtonClick(num.toString())}
              className="nes-btn is-dark"
              disabled={gameOver || isCorrect}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => handleButtonClick("0")}
            className="nes-btn is-dark"
            disabled={gameOver || isCorrect}
          >
            0
          </button>

          <button
            onClick={handleClear}
            className="nes-btn is-error"
            disabled={gameOver || isCorrect}
          >
            CLR
          </button>

          <button
            onClick={handleSubmit}
            className="nes-btn is-success"
            disabled={gameOver || isCorrect}
          >
            ✓
          </button>
        </div>
      </div>
    </div>
  );
}
