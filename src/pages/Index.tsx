import { useState } from "react";
import { Palette, Scissors, Hammer, Shirt, Gem, Camera } from "lucide-react";
import { Header } from "@/components/ui/header";
import { MobileNavigation } from "@/components/ui/navigation";
import { CategoryGrid } from "@/components/category-grid";
import { ProductCard } from "@/components/product-card";
import { ArtisanCard } from "@/components/artisan-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-artisan.jpg";
import featuredProducts from "@/assets/featured-products.jpg";
import artisanProfile from "@/assets/artisan-profile.jpg";

const categories = [
  { id: "pottery", name: "Pottery", icon: Palette, count: 124, color: "bg-terracotta" },
  { id: "textiles", name: "Textiles", icon: Scissors, count: 89, color: "bg-sage" },
  { id: "woodwork", name: "Woodwork", icon: Hammer, count: 156, color: "bg-warm-brown" },
  { id: "clothing", name: "Clothing", icon: Shirt, count: 203, color: "bg-primary" },
  { id: "jewelry", name: "Jewelry", icon: Gem, count: 78, color: "bg-gold" },
  { id: "art", name: "Art", icon: Camera, count: 91, color: "bg-accent" },
];

const featuredArtisans = [
  {
    id: "1",
    name: "Priya Sharma",
    avatar: artisanProfile,
    specialty: "Traditional Pottery",
    location: "Rajasthan, India",
    rating: 4.9,
    reviewCount: 127,
    coverImage: featuredProducts,
    isVerified: true,
  },
  {
    id: "2", 
    name: "Ravi Kumar",
    avatar: artisanProfile,
    specialty: "Handwoven Textiles",
    location: "Gujarat, India",
    rating: 4.8,
    reviewCount: 94,
    coverImage: heroImage,
    isVerified: true,
  },
];

const featuredProductsList = [
  {
    id: "1",
    title: "Handcrafted Ceramic Bowl Set",
    price: 2499,
    image: featuredProducts,
    artisan: {
      name: "Priya Sharma",
      avatar: artisanProfile,
      rating: 4.9,
    },
    category: "Pottery",
  },
  {
    id: "2",
    title: "Traditional Woven Scarf",
    price: 1299,
    image: heroImage,
    artisan: {
      name: "Ravi Kumar", 
      avatar: artisanProfile,
      rating: 4.8,
    },
    category: "Textiles",
  },
];

const Index = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={heroImage}
          alt="Artisan at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-card mb-4">
                Discover Local
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Artisan Crafts
                </span>
              </h1>
              <p className="text-card/90 mb-6">
                Connect with skilled artisans in your area and discover unique, handmade treasures.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Explore Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <CategoryGrid categories={categories} />
        </section>

        {/* Featured Near You */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Near You</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredProductsList.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                isFavorite={favorites.has(product.id)}
                onFavoriteToggle={() => toggleFavorite(product.id)}
              />
            ))}
          </div>
        </section>

        {/* Top Rated Artisans */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Top Rated Artisans</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredArtisans.map((artisan) => (
              <ArtisanCard
                key={artisan.id}
                {...artisan}
                isFavorite={favorites.has(`artisan-${artisan.id}`)}
                onFavoriteToggle={() => toggleFavorite(`artisan-${artisan.id}`)}
              />
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section>
          <Card className="bg-gradient-warm shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Special Offers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get 20% off on your first order from verified artisans
              </p>
              <Button className="bg-gradient-primary hover:opacity-90">
                Claim Offer
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <MobileNavigation />
    </div>
  );
};

export default Index;
