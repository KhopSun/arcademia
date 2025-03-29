import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative p-4"
      style={{ backgroundImage: `url('/wood.png')` }}
    >
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <p>Welcome to the profile page!</p>

      <div className="nes-container is-dark with-title">
        <p className="title">Container.is-dark</p>
        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>

    </div>
  );
};

export default ProfilePage;
