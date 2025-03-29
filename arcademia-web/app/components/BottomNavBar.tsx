import Image from "next/image";
import profileIcon from "../assets/icons/user.svg";
import walletIcon from "../assets/icons/wallet.svg";
import questIcon from "../assets/icons/gamepad.svg";
import Link from "next/link";

export default function BottomNavBar() {
    return(
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
              <Link
                href="/quest"
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-200"
              >
                <Image
                  src={questIcon}
                  alt="Quest"
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href="/profile"
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-200"
              >
                <Image
                  src={profileIcon}
                  alt="Profile"
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href="/wallet"
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-200"
              >
                <Image
                  src={walletIcon}
                  alt="Wallet"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
    );
  }