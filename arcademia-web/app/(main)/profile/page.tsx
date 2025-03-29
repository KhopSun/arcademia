import React from "react";
import profileBg from "../../assets/background/profilebg.png";

const level = 1;
const currentXp = 500;
const neededXp = 1000;

const ProfilePage: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative p-6"
      style={{ backgroundImage: `url('/wood.png')` }}
    >
      <div
        className="flex items-center justify-center w-full p-6 bg-cover bg-center h-[390px]"
        style={{ backgroundImage: `url(${profileBg.src})` }}
      >
        <div className="flex w-full justify-center items-center gap-4">
          <span>Lvl.{level}</span>
          <progress
            className="nes-progress is-success"
            style={{height: '10px'}}
            value={currentXp}
            max={neededXp}
          ></progress>
        </div>
      </div>
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <p>Welcome to the profile page!</p>
    </div>
  );
};

export default ProfilePage;
