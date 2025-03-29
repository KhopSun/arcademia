"use client";
import { useUser } from "@/context/userContext";
import { useState } from "react";

type UserSelectProps = {
  onNext: () => void;
};

export default function UserSelect({ onNext }: UserSelectProps) {
  const { gender, setGender, name, setName } = useUser();
  const [selected, setSelected] = useState<"male" | "female" | null>(gender);
  const [localName, setLocalName] = useState(name || "");

  const handleSubmit = () => {
    if (selected && localName.trim() !== "") {
      setGender(selected);
      setName(localName.trim());
      setTimeout(onNext, 500);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-3 bg-[#47423F] text-white px-4">
      <h1 className="text-2xl nes-text mb-4 text-white text-center">
        Enter Your Name
      </h1>

      {/* Name input */}
      <div className="flex flex-col items-start w-full max-w-sm">
        <input
          type="text"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
          className="nes-input w-8/10 bg-[#EBDEC0] text-[#47423F]"
          placeholder="Enter your name"
        />
      </div>

      {/* Gender image selection with white background, zoom effect, vertical layout */}
      <div className="flex flex-col gap-6">
        <div className="nes-container is-rounded bg-white p-3 rounded-lg shadow-md items-center">
          <img
            src="/assets/main_char/steve.png"
            alt="Male"
            onClick={() => setSelected("male")}
            className={`w-32 h-32 object-cover rounded-full cursor-pointer transition-transform duration-200 ${
              selected === "male"
                ? "scale-110 border-4 border-blue-500"
                : "hover:scale-105 opacity-80"
            }`}
          />
        </div>
        <div className="nes-container is-rounded bg-white p-3 rounded-lg shadow-md items-center">
          <img
            src="/assets/main_char/girl_steve.png"
            alt="Female"
            onClick={() => setSelected("female")}
            className={`w-32 h-32 object-cover rounded-full cursor-pointer transition-transform duration-200 ${
              selected === "female"
                ? "scale-110 border-4 border-pink-500"
                : "hover:scale-105 opacity-80"
            }`}
          />
        </div>
      </div>

      {/* Submit button */}
      <button
        className="nes-btn is-warning mt-6"
        onClick={handleSubmit}
        disabled={!selected || localName.trim() === ""}
      >
        Start Adventure
      </button>

      {(selected || localName.trim() !== "") && (
        <p className="mt-4 nes-text is-warning">
          {/* {localName && `Name: ${localName}`}{" "} */}
          {selected && ` Gender: ${selected.toUpperCase()}`}
        </p>
      )}
    </div>
  );
}
