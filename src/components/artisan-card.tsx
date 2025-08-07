import { MapPin, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArtisanCardProps {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
  location: string;
  rating: number;
  reviewCount: number;
  coverImage: string;
  isVerified?: boolean;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

export const ArtisanCard = ({
  name,
  avatar,
  specialty,
  location,
  rating,
  reviewCount,
  coverImage,
  isVerified = false,
  isFavorite = false,
  onFavoriteToggle,
}: ArtisanCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
      <div className="relative h-24 overflow-hidden">
        <img
          src={coverImage}
          alt={`${name}'s workshop`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm hover:bg-card"
          onClick={onFavoriteToggle}
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorite ? "fill-destructive text-destructive" : "text-card"
            }`}
          />
        </Button>

        {isVerified && (
          <Badge className="absolute top-2 left-2 bg-sage/90 text-card">
            Verified
          </Badge>
        )}
      </div>
      
      <CardContent className="relative p-4 pt-0">
        <div className="relative -mt-6 mb-3">
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full object-cover border-2 border-card shadow-soft"
          />
        </div>
        
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-xs text-muted-foreground">{specialty}</p>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-gold text-gold" />
              <span className="text-xs font-medium">{rating}</span>
              <span className="text-xs text-muted-foreground">({reviewCount})</span>
            </div>
            
            <Button size="sm" variant="outline" className="h-7 text-xs">
              View Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};