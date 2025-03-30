"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/context/userContext";

type Stats = {
  science: number;
  code: number;
  math: number;
  english: number;
};

export default function ExpGained({
  Exp,
  Coins,
  statGain,
}: {
  Exp: number;
  Coins: number;
  statGain: Partial<Stats>;
}) {
  const { exp, setExp, stats, setStats, coins, setCoins } = useUser();
  const [added, setAdded] = useState(false);
  const [previousExp, setPreviousExp] = useState(exp);
  const [previousCoins, setPreviousCoins] = useState(coins);
  const [previousStats, setPreviousStats] = useState(stats);

  useEffect(() => {
    if (!added) {
      setPreviousExp(exp);
      setPreviousCoins(coins);
      setPreviousStats(stats);

      setExp(exp + Exp);
      setCoins(coins + Coins);
      setStats((prev) => ({
        ...prev,
        ...Object.fromEntries(
          Object.entries(statGain).map(([key, val]) => [
            key,
            prev[key as keyof Stats] + (val || 0),
          ])
        ),
      }));

      setAdded(true);
    }
  }, [
    added,
    exp,
    coins,
    stats,
    setExp,
    setCoins,
    setStats,
    Exp,
    Coins,
    statGain,
  ]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl font-bold gap-4">
      <p>
        You gained <span className="text-green-500">{Exp} XP</span> and{" "}
        <span className="text-yellow-400">{Coins} Coins</span>!
      </p>
      <p>Your new total XP: {previousExp + Exp}</p>
      <p>Your new total Coins: {previousCoins + Coins}</p>

      {Object.entries(statGain).map(([key, val]) =>
        val ? (
          <p key={key}>
            <span className="capitalize">{key}</span> +{val}
          </p>
        ) : null
      )}
    </div>
  );
}
