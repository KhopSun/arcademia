"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextBubble from "./textBubble";

type IntroSceneProps = {
  onComplete: () => void;
};

export default function IntroScene({ onComplete }: IntroSceneProps) {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Four Cities Background */}
      <AnimatePresence>
        {step === 0 && (
          <>
            <motion.img
              src="@/app/assets/background/four_cities.png"
              alt="Four Cities"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute w-full h-full object-cover"
            />
            <TextBubble text="test1" onNext={nextStep} />
          </>
        )}
      </AnimatePresence>

      {/* Villain Slide Up + Dim */}
      {step === 1 && (
        <>
          <motion.img
            src="@/app/assets/background/four_cities.png"
            alt="Four Cities"
            className="absolute w-full h-full object-cover"
          />
          <motion.div
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.7)" }}
            className="absolute w-full h-full z-10"
          />
          <motion.img
            src="@/app/assets/villain/villain.png"
            alt="Villain"
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-1/2"
          />
          <TextBubble text="test2" onNext={nextStep} />
        </>
      )}

      {/* Cracked Screen */}
      {step === 2 && (
        <>
          <motion.img
            src="@/app/assets/background/four_cities_boom.png"
            alt="Cracked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute w-full h-full object-cover z-20"
          />
          <TextBubble text="test3" onNext={nextStep} />
        </>
      )}

      {/* Fade to white → Glowing */}
      {step === 3 && (
        <>
          <motion.div
            initial={{ backgroundColor: "rgba(255,255,255,0)" }}
            animate={{ backgroundColor: "rgba(255,255,255,1)" }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full z-30"
          />
          <motion.img
            src="@/app/assets/background/opened_book.png"
            alt="booked glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute w-full h-full object-cover z-40"
          />
          <TextBubble
            text="test4"
            onNext={() => {
              if (onComplete) onComplete(); // move to next component
            }}
          />
        </>
      )}
    </div>
  );
}
