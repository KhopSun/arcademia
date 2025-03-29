"use client";

import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface InitialLayoutProps {
  children: React.ReactNode;
}

export default function InitialLayout({ children }: InitialLayoutProps) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoaded) return;

    // If the user is not signed in and is not on the sign-in page, redirect to "/sign-in".
    if (!isSignedIn && pathname !== '/sign-in') {
      router.replace('/sign-in');
    }
    // If the user is signed in and they're on the sign-in page, redirect to "/tabs".
    else if (isSignedIn && pathname === '/sign-in') {
      router.replace('/tabs');
    }
  }, [isLoaded, isSignedIn, pathname, router]);

  if (!isLoaded) return null;

  // Render the children only when the auth status is loaded.
  return <>{children}</>;
}
