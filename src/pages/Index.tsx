
import { Instagram, Youtube, Twitter, Mail, Globe } from "lucide-react";
import LinkTree from "@/components/LinkTree";
import Profile from "@/components/Profile";
import LinkButton from "@/components/LinkButton";
import SocialIcons from "@/components/SocialIcons";

const Index = () => {
  // Replace with your actual information
  const profileInfo = {
    name: "Seu Nome",
    description: "Criador de conteúdo | Influencer | Empreendedor",
    avatarUrl: "" // Add your profile image URL here
  };

  // Replace with your actual links
  const links: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    className?: string;
  }[] = [
    {
      label: "Meu Site Oficial",
      href: "https://seusite.com",
      icon: <Globe size={18} />
    },
    {
      label: "Meu Canal no YouTube",
      href: "https://youtube.com/@seucanalaqui",
      icon: <Youtube size={18} />
    },
    {
      label: "Minha Loja Online",
      href: "https://minhaloja.com",
      icon: <Globe size={18} />
    },
    {
      label: "Curso Exclusivo",
      href: "https://meucurso.com",
      icon: <Globe size={18} />,
      className: "bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 border-none hover-pulse"
    },
    {
      label: "Entre em Contato",
      href: "mailto:seuemail@exemplo.com",
      icon: <Mail size={18} />
    }
  ];

  // Replace with your actual social media links
  const socialLinks = [
    {
      label: "TikTok",
      href: "https://tiktok.com/@seuusuario",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.6 5.82C18.06 7.2 19.1 9.08 19.1 11.1H17.4C17.4 9.64 16.52 8.38 15.16 7.84V15.1C15.16 18.08 12.74 20.5 9.76 20.5C6.78 20.5 4.36 18.08 4.36 15.1C4.36 12.12 6.78 9.7 9.76 9.7C9.96 9.7 10.14 9.72 10.34 9.74V11.5C10.14 11.48 9.96 11.44 9.76 11.44C7.74 11.44 6.1 13.08 6.1 15.1C6.1 17.12 7.74 18.76 9.76 18.76C11.78 18.76 13.42 17.12 13.42 15.1V3.5H15.16C15.16 3.5 15.16 3.88 15.16 3.96C15.16 4.3 16.04 5.18 16.6 5.82Z" fill="currentColor" />
        </svg>
      )
    },
    {
      label: "Instagram",
      href: "https://instagram.com/seuusuario",
      icon: <Instagram size={20} />
    },
    {
      label: "Twitter",
      href: "https://twitter.com/seuusuario",
      icon: <Twitter size={20} />
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@seucanal",
      icon: <Youtube size={20} />
    }
  ];

  return (
    <LinkTree>
      <div className="profile-animation">
        <Profile 
          name={profileInfo.name} 
          description={profileInfo.description} 
          avatarUrl={profileInfo.avatarUrl}
          className="mb-8"
        />
      </div>

      <div className="space-y-3">
        {links.map((link, index) => (
          <div key={index} className="link-animation">
            <LinkButton 
              href={link.href}
              label={link.label}
              icon={link.icon}
              className={link.className}
            />
          </div>
        ))}
      </div>

      <SocialIcons links={socialLinks} className="mt-8" />

      <div className="text-center mt-10">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {profileInfo.name}</p>
        <div className="mt-2 flex items-center justify-center">
          <div className="h-0.5 w-6 bg-gradient-to-r from-primary to-secondary"></div>
        </div>
      </div>
    </LinkTree>
  );
};

export default Index;
