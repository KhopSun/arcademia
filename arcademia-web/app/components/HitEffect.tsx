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
      <div className="fixed inset-0 flex justify-center items-center bg-red-500 animate-hitFlash z-50"></div>
    </>
  ) : null;
}
