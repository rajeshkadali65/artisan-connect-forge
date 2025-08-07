import { Search, Bell, Menu } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

interface HeaderProps {
  showSearch?: boolean;
  title?: string;
  onMenuClick?: () => void;
}

export const Header = ({ showSearch = true, title, onMenuClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            {onMenuClick && (
              <Button variant="ghost" size="icon" onClick={onMenuClick}>
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              {title || "ArtisanConnect"}
            </h1>
          </div>

          {showSearch && (
            <div className="flex-1 max-w-sm mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search artisans, products..."
                  className="pl-10"
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};