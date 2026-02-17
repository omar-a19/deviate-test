import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'link';
  className?: string;
}

export default function Button({ 
  children, 
  href = '#', 
  variant = 'primary', 
  className = '' 
}: ButtonProps) {
  const base = "inline-flex items-center gap-2 px-6 py-3 border transition";
  const styles = {
    primary: "bg-white text-black border-white hover:bg-gray-100",
    link: "bg-transparent text-white border-none hover:text-[#CE1B1B]",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="14 19 21 12 14 5" />
        <line x1="21" y1="12" x2="2" y2="12" />
      </svg>
    </a>
  );
}