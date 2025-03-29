"use client";

import React from 'react'
import { useRouter } from 'next/navigation'
import { IoLogoGoogle } from 'react-icons/io5'
import { FiBookOpen } from 'react-icons/fi'
import { useClerk } from '@clerk/nextjs'

export default function Login() {
  const clerk = useClerk()
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    try {
      await clerk.redirectToSignIn({
        signInOptions: { strategy: 'oauth_google' },
        afterSignInUrl: '/tabs',
      })
    } catch (error) {
      console.error('OAuth error:', error)
    }
  }

  return (
    <div className="
      min-h-screen 
      flex flex-col 
      items-center 
      justify-center 
      bg-[url('/wood-texture.png')] 
      bg-repeat 
      p-4
    ">
      {/* Outer card or panel */}
      <div className="
        w-full 
        max-w-sm 
        bg-[#e2c7a3] 
        border-4 
        border-[#5d3a1d] 
        rounded-xl 
        shadow-lg 
        p-6 
        flex flex-col 
        items-center
      ">
        {/* Icon / Brand */}
        <div className="
          p-4 
          bg-[#f5e1c8] 
          rounded-full 
          shadow-md 
          border-4 
          border-[#5d3a1d]
        ">
          <FiBookOpen className="text-4xl text-[#f1c40f]" />
        </div>

        <h1 className="mt-4 text-3xl font-bold text-[#5d3a1d]">
          Arcademia
        </h1>
        <p className="text-[#5d3a1d]">Let's learn</p>

        {/* Login Section */}
        <div className="flex flex-col items-center space-y-4 mt-6 w-full">
          <button
            onClick={handleGoogleSignIn}
            className="
              flex 
              items-center 
              bg-[#f0d39e] 
              border-4 
              border-[#5d3a1d] 
              px-4 
              py-2 
              rounded-lg 
              hover:bg-[#ecc489] 
              transition
            "
          >
            <IoLogoGoogle className="mr-2 text-xl text-[#5d3a1d]" />
            <span className="text-sm font-medium text-[#5d3a1d]">
              Continue with Google
            </span>
          </button>
          <p className="text-xs text-center text-[#5d3a1d]">
            By continuing, you agree to our{' '}
            <a href="/terms" className="underline">
              Terms
            </a>{' '}
            and{' '}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
