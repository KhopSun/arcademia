"use client";

import React, { useState } from "react";
import { useUser } from "@/context/userContext";
import profileBg from "@/public/assets/background/profilebg.png";
import woodBg from "@/public/assets/background/wood.png";
import codeIcon from "@/public/assets/skillTreeElements/coding_element.png";
import mathIcon from "@/public/assets/skillTreeElements/math_element.png";
import scienceIcon from "@/public/assets/skillTreeElements/science_element.png";
import languageIcon from "@/public/assets/skillTreeElements/english_element.png";
import maleChar from '@/public/assets/main_char/steve.png';
import Image from "next/image";

const ProfilePage: React.FC = () => {
  const { name, coins, items } = useUser();
  const [showInventory, setShowInventory] = useState(false);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center flex-col p-6 pb-[100px] gap-6"
      style={{ backgroundImage: `url(${woodBg.src})` }}
    >
      {/* Profile Section */}
      <div
        className="flex-col nes-container gap-4 flex items-center justify-center w-full p-9 bg-center bg-fill h-[390px]"
        style={{ backgroundImage: `url(${profileBg.src})` }}
      >
        <Image alt="male" src={maleChar} width={200} height={200} />
        <div className="nes-container is-rounded px-4 py-2">
          <span className="text-2xl">{name}</span>
        </div>
        <div className="flex w-full justify-center items-center gap-4">
          <span>Lvl.1</span>
          <progress
            className="nes-progress is-success"
            style={{ height: "15px" }}
            value={500}
            max={1000}
          ></progress>
        </div>
      </div>

      {/* Stats Section */}
      <div className="nes-container flex-col flex justify-center bg-[#9c664d] !w-full p-4">
        <span className="flex justify-center text-2xl">Stats</span>
        <table className="!w-full">
          <tbody>
            {[
              { icon: scienceIcon, label: "Science", color: "is-error", value: 70 },
              { icon: mathIcon, label: "Math", color: "is-primary", value: 30 },
              { icon: codeIcon, label: "Coding", color: "is-warning", value: 50 },
              { icon: languageIcon, label: "Language", color: "is-success", value: 90 },
            ].map((skill, index) => (
              <tr key={index}>
                <td className="w-[70px]">
                  <Image alt={skill.label} src={skill.icon} width={70} height={70} />
                </td>
                <td>
                  <progress className={`nes-progress ${skill.color} !w-full !h-[15px]`} value={skill.value} max="100"></progress>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex my-4 justify-between">
          <span className="nes-text is-warning">Coins: {coins}</span>
        </div>
      </div>

      {/* Inventory Button */}
      <button className="nes-btn is-warning" onClick={() => setShowInventory(true)}>Inventory</button>

      {/* Inventory Modal */}
      {showInventory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="nes-container is-dark relative p-6 mx-4 w-full">
            <h2 className="text-center text-2xl nes-text is-primary">Inventory</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {/* Display the items dynamically */}
              {items.length > 0 ? (
                items.map((item, index) => (
                  <div key={index} className="nes-container is-rounded flex items-center justify-center h-20 w-20">
                    <span>{item.name}</span>
                  </div>
                ))
              ) : (
                <div className="nes-container is-rounded flex items-center justify-center h-20 w-20">
                  <span>No items yet</span>
                </div>
              )}
            </div>
            {/* Close Button */}
            <button className="nes-btn is-error mt-4 w-full" onClick={() => setShowInventory(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
