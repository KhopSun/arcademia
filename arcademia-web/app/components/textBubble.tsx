"use client";
import { motion } from "framer-motion";

type TextBubbleProps = {
  text: string;
  onNext: () => void;
};

export default function TextBubble({ text, onNext }: TextBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white text-black px-6 py-4 rounded-full shadow-lg cursor-pointer text-lg"
      onClick={onNext}
    >
      {text}
    </motion.div>
  );
}
