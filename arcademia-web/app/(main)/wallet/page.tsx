"use client";

import React from "react";
import Image from "next/image";
import { useUser } from "@/context/userContext";
import shopkeeper from "@/public/assets/background/shop/shop_background.png";
import swordIcon from "@/public/assets/background/shop/sword.png";
import armourIcon from "@/public/assets/background/shop/armour.png";
import woodBg from "@/public/assets/background/wood.png";

const shopItems = [
  { name: "Steel Sword", description: "A finely crafted sword.", price: 100, icon: swordIcon },
  { name: "Iron Armour", description: "A sturdy iron armour.", price: 150, icon: armourIcon },
];

const ShopPage: React.FC = () => {
  const { coins, setCoins, items, setItems } = useUser();

  const buyItem = (item: any) => {
    if (coins >= item.price) {
      setCoins(coins - item.price);
      setItems([...items, item]);
      alert(`You bought a ${item.name}!`);
    } else {
      alert("Not enough coins!");
    }
  };

  return (
    <div>
      <div className="w-full h-60 flex justify-center items-center">
        <Image
          src={shopkeeper}
          alt="Shopkeeper"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover shadow-lg"
        />
      </div>
      <div
        className="w-full min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center"
        style={{ backgroundImage: `url(${woodBg.src})` }}
      >
        <h1 className="text-3xl font-bold">Welcome to the Shop!</h1>
        <div className="grid grid-cols-2 gap-6 mt-4">
          {shopItems.map((item, index) => (
            <div key={index} className="bg-stone-800 nes-container p-4 is-dark is-rounded shadow-lg flex flex-col items-center">
              <Image src={item.icon} alt={item.name} width={80} height={80} />
              <div className="px-2 text-center">
                <h2 className="text-lg mt-2">{item.name}</h2>
                <p className="text-xs text-gray-300">{item.description}</p>
              </div>
              <button className="mt-2 nes-btn is-warning" onClick={() => buyItem(item)}>
                {item.price} gold
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
