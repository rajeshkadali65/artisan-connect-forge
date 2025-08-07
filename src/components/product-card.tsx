import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  artisan: {
    name: string;
    avatar: string;
    rating: number;
  };
  category: string;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

export const ProductCard = ({
  title,
  price,
  image,
  artisan,
  category,
  isFavorite = false,
  onFavoriteToggle,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm hover:bg-card"
          onClick={onFavoriteToggle}
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorite ? "fill-destructive text-destructive" : "text-muted-foreground"
            }`}
          />
        </Button>
        <Badge className="absolute top-2 left-2 bg-primary/90">
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center gap-2">
            <img
              src={artisan.avatar}
              alt={artisan.name}
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-xs text-muted-foreground">{artisan.name}</span>
            <div className="flex items-center gap-1 ml-auto">
              <Star className="h-3 w-3 fill-gold text-gold" />
              <span className="text-xs text-muted-foreground">{artisan.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg text-primary">₹{price}</span>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};