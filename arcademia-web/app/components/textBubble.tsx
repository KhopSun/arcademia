"use client";
import { motion } from "framer-motion";

type TextBubbleProps = {
  text: React.ReactNode;
  onNext: () => void;
};

export default function TextBubble({ text, onNext }: TextBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="absolute top-7/11 nes-container is-rounded left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 shadow-lg bg-[#EBDEC0] cursor-pointer w-11/12 text-[10px]"
      onClick={onNext}
    >
      {text}
    </motion.div>
  );
}
