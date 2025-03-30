"use client";

import React, { useState } from "react";
import { useUser } from "@/context/userContext";
import profileBg from "@/public/assets/background/profilebg.png";
import woodBg from "@/public/assets/background/wood.png";
import codeIcon from "@/public/assets/skillTreeElements/coding_element.png";
import mathIcon from "@/public/assets/skillTreeElements/math_element.png";
import scienceIcon from "@/public/assets/skillTreeElements/science_element.png";
import languageIcon from "@/public/assets/skillTreeElements/english_element.png";
import maleChar from "@/public/assets/main_char/steve.png";
import femaleChar from "@/public/assets/main_char/girl_steve.png";
import Image from "next/image";
import maleMathClass from "@/public/assets/class/characters/math/male_math.png";
import maleScienceClass from "@/public/assets/class/characters/science/male_science.png";
import maleEnglishClass from "@/public/assets/class/characters/english/male_bard.png";
import maleCodeClass from "@/public/assets/class/characters/code/male_code.png";
import femaleMathClass from "@/public/assets/class/characters/math/female_math.png";
import femaleScienceClass from "@/public/assets/class/characters/science/female_science.png";
import femaleEnglishClass from "@/public/assets/class/characters/english/female_bard.png";
import femaleCodeClass from "@/public/assets/class/characters/code/female_code.png";
import femaleLearner from "@/public/assets/class/characters/learner/female_learner.png";
import maleLearner from "@/public/assets/class/characters/learner/male_learner.png";
import statsBg from "@/public/assets/background/statsbg.png";

const ProfilePage: React.FC = () => {
  const { name, coins, items, gender, stats, exp } = useUser(); // Assuming 'gender' is available in user context
  const [showInventory, setShowInventory] = useState(false);
  const [showClassDescription, setShowClassDescription] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);

  const statsList = [
    {
      icon: scienceIcon,
      label: "Science",
      color: "is-error",
      value: stats.science,
    },
    { icon: mathIcon, label: "Math", color: "is-primary", value: stats.math },
    { icon: codeIcon, label: "Coding", color: "is-warning", value: stats.code },
    {
      icon: languageIcon,
      label: "Language",
      color: "is-success",
      value: stats.english,
    },
  ];

  // Determine if all stats are zero
  const isAllZero = statsList.every((stat) => stat.value === 0);

  // If all stats are zero, assign the "Learner" class
  let className = "";
  let classImage = "";
  let classDescription = "";
  let careerList: string[] = [];
  let genderClassImage = ""; // For the correct gender image

  if (isAllZero) {
    className = "Learner";
    classDescription =
      "The Learner class is just starting out on their journey. They are full of potential and eager to learn. With time, they will develop their skills and find their true path.";
    careerList = ["Student", "Apprentice", "Intern", "Trainee", "Beginner"];
    genderClassImage = gender === "male" ? maleLearner.src : femaleLearner.src; // You can use a generic class image for Learner
  } else {
    // Determine class based on highest stat
    const highestStat = statsList.reduce((prev, current) =>
      prev.value > current.value ? prev : current
    );

    switch (highestStat.label) {
      case "Math":
        className = "Mathemagician";
        classDescription = `The ${className} class is a master of numbers and logic. They use mathematical principles to manipulate the world around them, solving complex problems and discovering new patterns.`;
        careerList = [
          "Mathematician",
          "Statistician",
          "Data Scientist",
          "Cryptographer",
          "Engineer",
        ];
        genderClassImage =
          gender === "male" ? maleMathClass.src : femaleMathClass.src;
        break;
      case "Science":
        className = "Alchemist";
        classDescription = `The ${className} class is deeply connected with the laws of nature. They experiment with the natural world, uncovering secrets to create new substances and uncover the mysteries of life.`;
        careerList = [
          "Chemist",
          "Biologist",
          "Pharmacist",
          "Environmental Scientist",
          "Researcher",
        ];
        genderClassImage =
          gender === "male" ? maleScienceClass.src : femaleScienceClass.src;
        break;
      case "Language":
        className = "Bard";
        classDescription = `The ${className} class uses their mastery of language to inspire and persuade. They use words and poetry to shape the world, tell stories, and motivate others.`;
        careerList = [
          "Writer",
          "Linguist",
          "Journalist",
          "Public Speaker",
          "Translator",
        ];
        genderClassImage =
          gender === "male" ? maleEnglishClass.src : femaleEnglishClass.src;
        break;
      case "Coding":
        className = "Technomancer";
        classDescription = `The ${className} class is a tech wizard, wielding code like magic to create software, control machines, and shape the digital world. They are at the forefront of technological innovation.`;
        careerList = [
          "Software Developer",
          "Web Developer",
          "Systems Analyst",
          "AI Engineer",
          "Cybersecurity Expert",
        ];
        genderClassImage =
          gender === "male" ? maleCodeClass.src : femaleCodeClass.src;
        break;
      default:
        break;
    }
  }

  // Function to handle showing skills modal
  const handleSkillsClick = () => {
    setShowSkillsModal(true);
  };

  // Function to handle showing class description modal
  const handleClassClick = () => {
    setShowClassDescription(true);
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center flex-col p-6 pb-[100px] gap-6"
      style={{ backgroundImage: `url(${woodBg.src})` }}
    >
      {/* Profile Section */}
      <div
        className="flex-col shadow-xl nes-container gap-4 flex items-center justify-center w-full p-9 bg-center bg-fill h-[390px]"
        style={{ backgroundImage: `url(${profileBg.src})` }}
      >
        <Image
          alt="male"
          src={gender == "male" ? maleChar : femaleChar}
          width={200}
          height={200}
        />
        <div className="nes-container is-rounded px-4 py-2">
          <span className="text-2xl">{name}</span>
        </div>
        <div className="flex w-full justify-center items-center gap-4">
          <span>Lvl.1</span>
          <progress
            className="nes-progress is-success"
            style={{ height: "15px" }}
            value={exp}
            max={1000}
          ></progress>
        </div>
      </div>

      {/* Class and Skills Section */}
      <div className="nes-container is-dark flex-col shadow-xl p-4 w-full">
        <div className="flex justify-center items-center gap-6">
          {/* Class Section */}
          <div>
            <button
              className="nes-btn is-rounded flex items-center justify-center cursor-pointer"
              onClick={handleClassClick}
            >
              <span className="text-xl">Class</span>
            </button>
          </div>

          {/* Skills Button */}
          <div>
            <button className="nes-btn is-success" onClick={handleSkillsClick}>
              Skills
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="flex-col nes-container flex justify-center w-full bg-center h-[400px] bg-cover"
        style={{ backgroundImage: `url(${statsBg.src})`, padding: 16 }}
      >
        <span className="flex justify-center text-2xl">Stats</span>
        <table className="!w-full">
          <tbody>
            {statsList.map((skill, index) => (
              <tr key={index}>
                <td className="w-[70px]">
                  <Image
                    alt={skill.label}
                    src={skill.icon}
                    width={70}
                    height={70}
                  />
                </td>
                <td>
                  <progress
                    className={`nes-progress ${skill.color} !w-full !h-[15px]`}
                    value={skill.value}
                    max="100"
                  ></progress>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex my-4 justify-end">
          <span className="nes-text is-warning">
            {coins}
            <i className="nes-icon coin is-small" />
          </span>
        </div>
      </div>

      {/* Inventory Button */}
      <button
        className="nes-btn is-warning"
        onClick={() => setShowInventory(true)}
      >
        Inventory
      </button>

      {/* Inventory Modal */}
      {showInventory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="nes-container is-dark relative p-6 mx-4 w-full">
            <h2 className="text-center text-2xl nes-text is-primary">
              Inventory
            </h2>
            <div className="flex flex-col items-center">
              {/* Display the items dynamically */}
              {items.length > 0 ? (
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="nes-container is-rounded flex flex-col items-center justify-center h-24 w-24 gap-1"
                    >
                      <Image
                        src={item.icon}
                        width={70}
                        height={70}
                        alt={item.name}
                      />
                      <span className="text-xs">{item.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 nes-container is-rounded flex items-center justify-center h-20 w-full">
                  <span>No items yet</span>
                </div>
              )}
            </div>
            {/* Close Button */}
            <button
              className="nes-btn is-error mt-4 w-full"
              onClick={() => setShowInventory(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Class Description Modal */}
      {showClassDescription && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center mb-[75px]">
          <div className="nes-container flex items-center flex-col justify-center is-dark relative p-6 mx-4 w-full">
            <h2 className="text-center text-2xl nes-text is-primary">
              {className} Class
            </h2>
            <div className="mt-4 flex gap-4 flex-col items-center justify-center">
              <Image
                src={genderClassImage}
                alt={className}
                width={200}
                height={200}
              />
              <p className="text-sm">{classDescription}</p>
              <div>
                <h3 className="mt-4 nes-text is-warning">Real-life Careers:</h3>
                <div className="lists">
                  <ul className="nes-list is-disc">
                    {careerList.map((career, index) => (
                      <li key={index}>• {career}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Close Button */}
            <button
              className="nes-btn is-error mt-4 w-full"
              onClick={() => setShowClassDescription(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Skills Modal */}
      {showSkillsModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="nes-container is-dark relative p-6 mx-4 w-full">
            <h2 className="text-center text-2xl nes-text is-primary">
              All Skills
            </h2>
            <div className="mt-4">
              <ul>
                {statsList.map((skill, index) => (
                  <li key={index}>
                    <span>
                      {skill.label} - Level: {skill.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Close Button */}
            <button
              className="nes-btn is-error mt-4 w-full"
              onClick={() => setShowSkillsModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
