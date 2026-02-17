import type { ReactNode } from 'react';

interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <>
      {/* Cookie container (optional) */}
      <div className="cookie-jar-group" data-theme-item="dark"></div>

      {/* MAIN CONTENT WRAPPER */}
      <main className="main" data-barba="container" data-barba-namespace="home">
        <div className="fixed-background dark">
          <div className="texture"></div>
        </div>
        {children}
      </main>
    </>
  );
}