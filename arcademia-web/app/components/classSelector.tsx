"use client";
import { useState } from "react";
import { useUser, UserClass } from "@/context/userContext";

type ClassSelectProps = {
  onNext: () => void;
};

const classes = [
  { name: "Math", icon: "/assets/skillTreeElements/math_element.png" },
  { name: "Science", icon: "/assets/skillTreeElements/science_element.png" },
  { name: "English", icon: "/assets/skillTreeElements/english_element.png" },
  { name: "Coding", icon: "/assets/skillTreeElements/coding_element.png" },
];

export default function ClassSelect({ onNext }: ClassSelectProps) {
  const { setUserClass } = useUser();
  const [selected, setSelected] = useState<
    "Math" | "Science" | "English" | "Coding" | null
  >(null);

  const handleSubmit = () => {
    if (selected == 'Math') {
      setUserClass(selected);
      onNext();
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#EBDEC0] gap-6 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#47423F]">
        Choose What You Want To Learn
      </h1>

      <div className="grid grid-cols-2 gap-[5px]">
        {classes.map((cls) => (
          <div
            key={cls.name}
            onClick={() => setSelected(cls.name as UserClass)}
            className={`nes-container is-rounded flex flex-col items-center bg-white p-3 shadow-md cursor-pointer  transition-transform duration-200 ${
              selected === cls.name
                ? "scale-110 border-4 border-[#47423F] z-20"
                : "hover:scale-105 opacity-80"
            }`}
          >
            <img
              src={cls.icon}
              alt={cls.name}
              className="w-24 h-24 object-contain mb-1"
            />
            <span className="text-lg font-medium">{cls.name}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selected}
        className={`mt-6 nes-btn !text-xl ${selected=='Math'?'is-warning':'is-disabled'} disabled:opacity-50`}
      >
        Confirm
      </button>
    </div>
  );
}
