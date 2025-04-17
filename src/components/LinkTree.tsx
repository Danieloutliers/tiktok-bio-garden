
import { ReactNode } from "react";
import "../styles/linktree.css";

interface LinkTreeProps {
  children: ReactNode;
  className?: string;
}

const LinkTree = ({ children, className = "" }: LinkTreeProps) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-tiktok-pattern"></div>
      <div className={`relative max-w-md w-full px-4 py-8 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default LinkTree;
