
import { cn } from "@/lib/utils";
import { HTMLAttributeAnchorTarget } from "react";

interface LinkButtonProps {
  href: string;
  icon?: React.ReactNode;
  label: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

const LinkButton = ({ 
  href, 
  icon, 
  label, 
  className,
  target = "_blank" 
}: LinkButtonProps) => {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={cn(
        "w-full flex items-center justify-center gap-2 px-4 py-3 mb-3 rounded-lg font-medium transition-all",
        "bg-white text-black border-2 border-transparent",
        "hover:bg-white/90 hover:border-primary hover:scale-[1.02] active:scale-[0.98]",
        "shadow-md hover:shadow-lg",
        className
      )}
    >
      {icon && <span className="text-primary">{icon}</span>}
      <span>{label}</span>
    </a>
  );
};

export default LinkButton;
