import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  count: number;
  color: string;
}

interface CategoryGridProps {
  categories: Category[];
  onCategorySelect?: (categoryId: string) => void;
}

export const CategoryGrid = ({ categories, onCategorySelect }: CategoryGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categories.map((category) => {
        const Icon = category.icon;
        
        return (
          <Card
            key={category.id}
            className="group cursor-pointer shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            onClick={() => onCategorySelect?.(category.id)}
          >
            <CardContent className="p-4 text-center">
              <div
                className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="h-6 w-6 text-card" />
              </div>
              <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {category.count} items
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};