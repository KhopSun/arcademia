"use client";

import React, { useState } from "react";
import HitEffect from "./HitEffect"; // Import the hit effect component
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import TextBubble from "./textBubble";

type Stats = {
  science: number;
  code: number;
  math: number;
  english: number;
};

type FightAdditionProps = {
  question: string;
  answer: number;
  onNext: ({
    earnedExp,
    earnedCoins,
    earnedStats,
  }: {
    earnedExp: number;
    earnedCoins: number;
    earnedStats: Partial<Stats>;
  }) => void;
};

export default function LearnAddition({
  question,
  answer,
  onNext,
}: FightAdditionProps) {
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showHitEffect, setShowHitEffect] = useState(false);
  const [showEnergyBall, setShowEnergyBall] = useState(false);

  const [showText, setShowText] = useState(true);

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

  const handleAnimationComplete = () => {
    const postAnimationDelay = 200;
    setTimeout(() => {
      setShowEnergyBall(false);
      onNext({ earnedExp: 10, earnedCoins: 5, earnedStats: { math: 1 } });
    }, postAnimationDelay);
  };

  const handleSubmit = () => {
    // Prevent submission if already correct or game over
    if (isCorrect || gameOver) return;

    if (parseInt(input) === answer) {
      setIsCorrect(true);
      // Simply trigger the state that causes the motion component to render
      setShowEnergyBall(true);
      // No manual setTimeout needed here to trigger onNext,
      // handleAnimationComplete will do it.
    } else {
      setInput("");
      setShowHitEffect(true); // Trigger hit effect on incorrect answer
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-no-repeat bg-center bg-cover p-6"
      style={{
        backgroundImage: "url('/assets/background/fight/Autumn2.png')",
        backgroundSize: "250% 175%",
      }}
    >
      {/* Hit Effect Overlay */}
      <HitEffect
        trigger={showHitEffect}
        onEnd={() => setShowHitEffect(false)}
      />

      {/* 🟡 Top Status */}
      <div className="mt-4 mb-2 text-center h-8">
        {isCorrect && !showEnergyBall && (
          <p className="text-[#fff275] font-bold text-xl animate-bounce">
            That's correct!
          </p>
        )}
        {gameOver && (
          <p className="text-red-400 font-bold text-xl">💀 Game Over 💀</p>
        )}
      </div>

      {/* Question Box */}
      <div className="bg-[#e5d9c4] nes-container is-rounded px-4 py-0 shadow-md max-w-md text-center mb-4">
        <span className="text-black font-bold text-2xl leading-none inline-block">
          {question}
        </span>
      </div>
      {showText && (
        <React.Fragment>
          <img
            src="/assets/teachers/head_professor.png"
            alt="Professor"
            className="absolute top-1/6 right-0 z-20 w-32"
          />

          <div className="absolute top-1/6 left-1 z-20 w-64">
            <TextBubble
              text={
                <>
                  <strong className="text-xs">Archmage Calculio: </strong>
                  <br />
                  Addition is like gathering magic energy. When you add two
                  numbers, you are combining their power into a greater force.
                  <br />
                  Imagine you have 3 mana crystals and find 5 more. How many do
                  you have now?
                  <br />
                  Try counting up from the first number. Start with 3, then add
                  5 one at a time!
                <div className="flex justify-between mt-2">
                    <div></div>
                    <button className=" nes-btn !p-0" >Skip</button>
                </div>

                 
                </>
              }
              onNext={() => {
                setShowText(false);
              }}
            />
          </div>
        </React.Fragment>
      )}

      <div className="relative w-64 h-64">
        <img
          src="/assets/effects/target.png"
          alt="target"
          className="w-full h-full object-contain"
        />

        <AnimatePresence>
          {showEnergyBall && (
            <motion.img
              key="energy-ball"
              src="/assets/effects/energy_ball.webp"
              alt="energy ball"
              className="absolute w-24 h-24"
              style={{ top: "-20%", right: "-20%" }}
              initial={{ x: "0%", y: "0%", scale: 0.3, opacity: 0.5 }}
              animate={{ x: "-100%", y: "100%", scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onAnimationComplete={handleAnimationComplete}
            />
          )}
        </AnimatePresence>
      </div>

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
            disabled={gameOver || isCorrect || input.length === 0}
          >
            CLR
          </button>
          <button
            onClick={handleSubmit}
            className="nes-btn is-success"
            disabled={gameOver || isCorrect || input.length === 0}
          >
            ✓
          </button>
        </div>
      </div>
    </div>
  );
}
