import React from 'react';
import BottomNavBar from '@/app/components/BottomNavBar'; 


  export default function MainLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex flex-col min-h-screen"> 
        <main className="flex-grow">
          {children}
        </main>
        <BottomNavBar />
      </div>
    );
  }