import React from "react";
import profileBg from "@/public/assets/background/profilebg.png";
import woodBg from "@/public/assets/background/wood.png";
import codeIcon from "@/public/assets/skillTreeElements/coding_element.png";
import mathIcon from "@/public/assets/skillTreeElements/math_element.png";
import scienceIcon from "@/public/assets/skillTreeElements/science_element.png";
import languageIcon from "@/public/assets/skillTreeElements/english_element.png";
import maleChar from '@/public/assets/main_char/steve.png';
import Image from "next/image";

const level = 1;
const currentXp = 500;
const neededXp = 1000;
const name = "Tachios";

const ProfilePage: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative p-6"
      style={{ backgroundImage: `url(${woodBg.src})` }}
    >
      <div
        className="flex-col my-6 gap-4 flex items-center justify-center w-full p-9 bg-center bg-cover h-[390px]"
        style={{ backgroundImage: `url(${profileBg.src})` }}
      >
        <Image alt='male' src={maleChar} width={200} height={200}></Image>
        <div className="nes-container !p-0 justify-center items-center is-rounded">
          <span className="text-2xl">{name}</span>
        </div>
        <div className="flex w-full justify-center items-center gap-4" >
          <span>Lvl.{level}</span>
          <progress
            className="nes-progress is-success"
            style={{ height: "15px"}}
            value={currentXp}
            max={neededXp}
          ></progress>
        </div>
      </div>
      <div className="!w-full">
        <table className="!w-full">
          <tbody>
            <tr>
              <td className="w-[70px]">
                <Image
                  alt="science"
                  src={scienceIcon}
                  width={70}
                  height={70}
                ></Image>
              </td>
              <td>
                <progress
                  className="nes-progress is-error !w-full !h-[15px]"
                  value="70"
                  max="100"
                ></progress>
              </td>
            </tr>
            <tr>
              <td>
                <Image alt="math" src={mathIcon} width={70} height={70}></Image>
              </td>
              <td>
                <progress
                  className="nes-progress is-primary !w-full !h-[15px]"
                  value="30"
                  max="100"
                ></progress>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center h-[70px] w-[70px] justify-center">
                  <Image
                    alt="coding"
                    src={codeIcon}
                    width={60}
                    height={60}
                  ></Image>
                </div>
              </td>
              <td>
                <progress
                  className="nes-progress is-warning !w-full !h-[15px]"
                  value="50"
                  max="100"
                ></progress>
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  alt="language"
                  src={languageIcon}
                  width={70}
                  height={70}
                ></Image>
              </td>
              <td>
                <progress
                  className="nes-progress is-success !w-full !h-[15px]"
                  value="90"
                  max="100"
                ></progress>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
