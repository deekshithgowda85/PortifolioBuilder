"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="relative z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:scale-105 transition-transform duration-300">
              Portfolio Builder
            </Link>
          </div>
          <div className="flex items-center space-x-6 ml-auto">
            <Link 
              href="/dashboard" 
              className={`text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform ${
                isActive('/dashboard') ? 'text-white font-medium' : ''
              }`}
            >
              Dashboard
            </Link>
            <Link 
              href="/profile" 
              className={`text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform ${
                isActive('/profile') ? 'text-white font-medium' : ''
              }`}
            >
              Profile
            </Link>
            <Link 
              href="/pages" 
              className={`text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform ${
                isActive('/pages') ? 'text-white font-medium' : ''
              }`}
            >
              My Pages
            </Link>
            <Link href="/landing/edit">
              <Button className="bg-white text-black font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Create Page
              </Button>
            </Link>
            <div className="flex items-center space-x-4 ml-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button className="bg-white text-black font-semibold hover:bg-gray-200">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-black">Sign Up</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
