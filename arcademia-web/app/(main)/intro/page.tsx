"use client";
import { useState } from "react";
import IntroScene from "@/app/components/introScene";
// import NextComponent from "@/components/NextComponent"; // placeholder for what's next

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone ? (
        <IntroScene onComplete={() => setIntroDone(true)} />
      ) : (
        <div className="text-white text-center mt-20">
          Next Component Goes Here
        </div>
      )}
    </>
  );
}
