"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Gender = "male" | "female" | null;

type userContext = {
  gender: Gender;
  name: string;
  setGender: (gender: Gender) => void;
  setName: (name: string) => void;
};

const GenderContext = createContext<userContext | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [gender, setGender] = useState<Gender>(null);
  const [name, setName] = useState<string>("");

  return (
    <GenderContext.Provider value={{ gender, setGender, name, setName }}>
      {children}
    </GenderContext.Provider>
  );
}

export function useUser() {
  const context = useContext(GenderContext);
  if (!context) {
    throw new Error("useGender must be used within a GenderProvider");
  }
  return context;
}
