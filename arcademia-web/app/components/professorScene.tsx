"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import TextBubble from "@/app/components/textBubble";
import { useState } from "react";

export default function ProfessorScene({ onNext }: { onNext: () => void }) {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {step === 0 && (
        <>
          <div className="relative w-screen h-screen overflow-hidden">
            {/* Background Image */}
            <Image
              src="/assets/background/four_cities.png"
              alt="4 Cities Background"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />

            {/* Dim Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black z-10"
            />

            {/* Professor Image popping in */}
            <motion.img
              src="/assets/teachers/fullbody_professor.png"
              alt="Professor"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-104"
            />

            {/* Text Bubble after professor appears */}
            <TextBubble
              text={
                <>
                  Long ago, I was the guardian of Numeria—where math shaped
                  magic and logic held the world in perfect balance
                  <br />
                  <br />
                  But then came Oblivor, the Lord of Unlearning. With one cursed
                  breath, he shattered the Crystal Codex and sealed away
                  knowledge across all of Arcanova.
                </>
              }
              onNext={nextStep}
            />
            {/* </motion.div> */}
          </div>
        </>
      )}
      {step === 1 && (
        <>
          <div className="relative w-screen h-screen overflow-hidden">
            {/* Background Image */}
            <Image
              src="/assets/background/four_cities.png"
              alt="4 Cities Background"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />

            {/* Dim Overlay */}
            <motion.div
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black z-10"
            />

            {/* Professor Image popping in */}
            <motion.img
              src="/assets/teachers/fullbody_professor.png"
              alt="Professor"
              //   initial={{ opacity: 0, scale: 0.7 }}
              //   animate={{ opacity: 1, scale: 1 }}
              //   transition={{ duration: 1, delay: 1 }}
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-104"
            />

            {/* Text Bubble after professor appears */}
            <TextBubble
              text={
                <>
                  I fought to protect Numeria… but even I could not resist the
                  Great Forgetting.
                  <br />
                  <br />
                  Archsage Calculo, guardian of math, was sealed deep within the
                  Logicspire, trapped in a prism of unbalance. Yet his mind
                  remains
                </>
              }
              onNext={nextStep}
            />
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="relative w-screen h-screen overflow-hidden">
            {/* Background Image */}
            <Image
              src="/assets/background/four_cities.png"
              alt="4 Cities Background"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />

            {/* Dim Overlay */}
            <motion.div
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black z-10"
            />

            {/* Professor Image popping in */}
            <motion.img
              src="/assets/teachers/fullbody_professor.png"
              alt="Professor"
              //   initial={{ opacity: 0, scale: 0.7 }}
              //   animate={{ opacity: 1, scale: 1 }}
              //   transition={{ duration: 1, delay: 1 }}
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-104"
            />

            {/* Text Bubble after professor appears */}
            <TextBubble
              text={
                <>
                  Now, from within his crystal prison, Calculio sends out a
                  projection— one last chance to teach
                </>
              }
              onNext={onNext}
            />
          </div>
        </>
      )}
    </div>
  );
}
