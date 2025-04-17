
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ProfileProps {
  name: string;
  description?: string;
  avatarUrl?: string;
  className?: string;
}

const Profile = ({ 
  name, 
  description, 
  avatarUrl, 
  className 
}: ProfileProps) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Avatar className="h-24 w-24 mb-4 border-2 border-primary shadow-lg">
        {avatarUrl ? (
          <AvatarImage src={avatarUrl} alt={name} />
        ) : (
          <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-secondary text-white">
            {name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        )}
      </Avatar>
      <h1 className="text-2xl font-bold mb-1 text-foreground">{name}</h1>
      {description && <p className="text-muted-foreground text-center max-w-xs">{description}</p>}
    </div>
  );
};

export default Profile;
