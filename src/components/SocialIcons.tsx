
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}

interface SocialIconsProps {
  links: SocialLink[];
  className?: string;
}

const SocialIcons = ({ links, className }: SocialIconsProps) => {
  return (
    <div className={cn("flex justify-center gap-4 mt-4", className)}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={link.label}
        >
          <span className="sr-only">{link.label}</span>
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
