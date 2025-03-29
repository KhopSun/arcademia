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

  useEffect(() => {
    if (mathIntro) {
      router.push("/quest");
    }
  }, [mathIntro]);

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
    // <div className="text-black text-center mt-20">
    //   Welcome, {name} ({gender?.toUpperCase()})!
    //   <br />
    //   Your class: {userClass}
    //   <br />
    //   {/* TODO: Render your next game component here */}
    // </div>
    <div className="flex items-center justify-center h-screen bg-[#EBDEC0] text-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#47423F]"></div>
      <span className="ml-4 text-xl w-8/10">Loading next stage...</span>
    </div>
  );
}
