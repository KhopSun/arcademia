"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Gender = "male" | "female" | null;

export type UserClass = "Math" | "English" | "Science" | "Coding" | null;

export type Item = {'name': string, 'description': string, 'price': number}

type userContext = {
  gender: Gender;
  name: string;
  userClass: UserClass;
  coins: number;
  items: Item[];
  setGender: (gender: Gender) => void;
  setName: (name: string) => void;
  setUserClass: (userClass: UserClass) => void;
  setCoins: (coins: number) => void;
  setItems: (items: Item[]) => void;
};

const UserContext = createContext<userContext | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [gender, setGender] = useState<Gender>(null);
  const [name, setName] = useState<string>("");
  const [userClass, setUserClass] = useState<UserClass>(null);
  const [coins, setCoins] = useState<number>(100);
  const [items, setItems] = useState<Item[]>([]);

  return (
    <UserContext.Provider
      value={{ gender, setGender, name, setName, userClass, setUserClass, coins, setCoins, items, setItems }}
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
