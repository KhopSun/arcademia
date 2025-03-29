"use client";
import { useState } from "react";
import IntroScene from "@/app/components/introScene";
import UserSelect from "@/app/components/userSelector";
import { useUser } from "@/context/userContext";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [genderStepDone, setGenderStepDone] = useState(false);

  const { gender, name } = useUser();

  if (!introDone) {
    return <IntroScene onComplete={() => setIntroDone(true)} />;
  }

  if (!genderStepDone) {
    return <UserSelect onNext={() => setGenderStepDone(true)} />;
  }

  return (
    <div className="text-white text-center mt-20">
      Welcome, {name} ({gender?.toUpperCase()})!
      <br />
      {/* TODO: Render your next game component here */}
    </div>
  );
}
