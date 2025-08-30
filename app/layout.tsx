import "./styles.css";

import { ClerkProvider } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only apply dark theme if not in /puck or /puck/[...puckPath]
  const isPuckEditor = typeof window !== 'undefined' &&
    (window.location.pathname.startsWith('/puck'));

  return (
    <html lang="en" className={isPuckEditor ? '' : 'dark'}>
      <ClerkProvider>
        <body className={isPuckEditor ? 'bg-white text-black min-h-screen' : 'bg-black text-white dark:bg-black dark:text-white min-h-screen'}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
