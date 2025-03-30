"use client";

import React, { useEffect, useState } from "react";

type HitEffectProps = {
  trigger: boolean;
  onEnd: () => void;
};

export default function HitEffect({ trigger, onEnd }: HitEffectProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (trigger) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        onEnd(); // Reset the hit state in the parent component
      }, 500); // Total duration of the animation
    }
  }, [trigger, onEnd]);

  return visible ? (
    <>
      <div className="fixed inset-0 bg-red-500 animate-hitFlash z-50"></div>
      <div className="nes-container is-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <span className="text-3xl text-white font-bold">You got hit</span>
      </div>
    </>
  ) : null;
}
