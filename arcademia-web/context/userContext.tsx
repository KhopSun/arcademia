"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Gender = "male" | "female" | null;

export type UserClass = "Math" | "English" | "Science" | "Coding" | null;

type userContext = {
  gender: Gender;
  name: string;
  userClass: UserClass;
  setGender: (gender: Gender) => void;
  setName: (name: string) => void;
  setUserClass: (userClass: UserClass) => void;
};

const UserContext = createContext<userContext | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [gender, setGender] = useState<Gender>(null);
  const [name, setName] = useState<string>("");
  const [userClass, setUserClass] = useState<UserClass>(null);

  return (
    <UserContext.Provider
      value={{ gender, setGender, name, setName, userClass, setUserClass }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
