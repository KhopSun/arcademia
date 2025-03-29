import Image from "next/image";
import profileIcon from "../assets/icons/user.svg";
import shopIcon from "../assets/icons/coin.svg";
import questIcon from "../assets/icons/target.svg";
import Link from "next/link";
import navbarBg from "/public/assets/background/navbarbg.png";

export default function BottomNavBar() {
  return (
    <div
      className="fixed bottom-0 left-0 z-50 w-full h-[75px] bg-cover bg-center border-t"
      style={{
        backgroundImage: `url(${navbarBg.src})`, // Use the imported image
      }}
    >
      {/* Rest of your component remains the same */}
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <Link
          href="/quest"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-200"
        >
          <Image src={questIcon} alt="Quest" width={32} height={32} />
          <span className="text-xs text-[#2e2414]">Quests</span>
        </Link>

        <Link
          href="/wallet"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-200"
        >
          <Image src={shopIcon} alt="Wallet" width={32} height={32} />
          <span className="text-xs text-[#2e2414]">Shop</span>
        </Link>
        <Link
          href="/profile"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-200"
        >
          <Image src={profileIcon} alt="Profile" width={32} height={32} />
          <span className="text-xs text-[#2e2414]">You</span>
        </Link>
      </div>
    </div>
  );
}
