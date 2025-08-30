"use client";

import { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  showFooter?: boolean;
}

export default function PageLayout({ children, className = "", showFooter = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <div className={`relative z-10 ${className}`}>
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  );
}
