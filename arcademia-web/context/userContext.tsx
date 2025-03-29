"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Gender = "male" | "female" | null;

export type UserClass = "Math" | "English" | "Science" | "Coding" | null;

export type Item = {'name': string, 'description': string, 'price': number, 'icon': string}
export type Stats = {'science':number, 'code':number, 'math':number, 'english':number}

type userContext = {
  gender: Gender;
  name: string;
  userClass: UserClass;
  coins: number;
  items: Item[];
  stats: Stats;
  exp: number;
  setGender: (gender: Gender) => void;
  setName: (name: string) => void;
  setUserClass: (userClass: UserClass) => void;
  setCoins: (coins: number) => void;
  setItems: (items: Item[]) => void;
  setStats: (stats: Stats) => void;
  setExp: (exp: number) => void;
};

const UserContext = createContext<userContext | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [gender, setGender] = useState<Gender>(null);
  const [name, setName] = useState<string>("");
  const [userClass, setUserClass] = useState<UserClass>(null);
  const [coins, setCoins] = useState<number>(100);
  const [items, setItems] = useState<Item[]>([]);
  const [stats, setStats] = useState<Stats>({ science: 0, code: 0, math: 0, english: 0 });
  const [exp, setExp] = useState<number>(0);
  return (
    <UserContext.Provider
      value={{ gender, setGender, name, setName, userClass, setUserClass, coins, setCoins, items, setItems, stats, setStats, exp, setExp }}
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
