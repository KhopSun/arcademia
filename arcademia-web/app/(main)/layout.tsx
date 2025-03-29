import React from "react";
import BottomNavBar from "@/app/components/BottomNavBar";
import { UserProvider } from "@/context/userContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <BottomNavBar />
      </div>
    </UserProvider>
  );
}
