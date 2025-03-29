"use client";
import { useState } from "react";
import IntroScene from "@/app/components/introScene";
import UserSelect from "@/app/components/userSelector";
import ClassSelect from "@/app/components/classSelector";
import ProfessorScene from "@/app/components/professorScene";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [genderStepDone, setGenderStepDone] = useState(false);
  const [classStepDone, setClassStepDone] = useState(false);
  const [mathIntro, setMathIntro] = useState(false);

  const { gender, name, userClass } = useUser();
  const router = useRouter();

  //   useEffect(() => {
  //     if (classStepDone) {
  //       router.push("/quest");
  //     }
  //   }, [setMathIntro]);

  if (!introDone) {
    return <IntroScene onComplete={() => setIntroDone(true)} />;
  }

  if (!genderStepDone) {
    return <UserSelect onNext={() => setGenderStepDone(true)} />;
  }

  if (!classStepDone) {
    return <ClassSelect onNext={() => setClassStepDone(true)} />; // ✅ Show class selector
  }

  if (!mathIntro) {
    return <ProfessorScene onNext={() => setMathIntro(true)}></ProfessorScene>;
  }

  return (
    <div className="text-black text-center mt-20">
      Welcome, {name} ({gender?.toUpperCase()})!
      <br />
      Your class: {userClass}
      <br />
      {/* TODO: Render your next game component here */}
    </div>
  );
}
