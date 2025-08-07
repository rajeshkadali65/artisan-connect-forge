import { useState } from "react";
import { ArrowLeft, Heart, Share, Star, MessageSquare, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import featuredProducts from "@/assets/featured-products.jpg";
import artisanProfile from "@/assets/artisan-profile.jpg";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    id: "1",
    title: "Handcrafted Ceramic Bowl Set",
    price: 2499,
    originalPrice: 3299,
    images: [featuredProducts, featuredProducts, featuredProducts],
    description: "Beautiful handcrafted ceramic bowl set made with traditional techniques passed down through generations. Each piece is unique and perfect for both everyday use and special occasions.",
    artisan: {
      name: "Priya Sharma",
      avatar: artisanProfile,
      rating: 4.9,
      reviewCount: 127,
      location: "Rajasthan, India",
      specialty: "Traditional Pottery",
      isVerified: true,
    },
    category: "Pottery",
    materials: ["Clay", "Natural Glazes"],
    dimensions: "Set of 4 bowls, 12cm diameter each",
    inStock: true,
    stockCount: 8,
    reviews: [
      {
        id: "1",
        user: "Anita R.",
        rating: 5,
        comment: "Absolutely beautiful bowls! The craftsmanship is exceptional.",
        date: "2024-01-15",
      },
      {
        id: "2", 
        user: "Rajesh K.",
        rating: 5,
        comment: "Perfect for serving guests. Very impressed with the quality.",
        date: "2024-01-10",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-card/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <span className="font-semibold">Product Details</span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Share className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`h-5 w-5 ${
                    isFavorite ? "fill-destructive text-destructive" : ""
                  }`}
                />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Product Images */}
        <section className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg shadow-card">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 border-primary">
                <img src={image} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Product Info */}
        <section className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary/10 text-primary">{product.category}</Badge>
              {product.inStock && (
                <Badge variant="outline" className="text-sage border-sage">
                  In Stock ({product.stockCount} left)
                </Badge>
              )}
            </div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">₹{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
              <Badge className="bg-destructive/10 text-destructive">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </Badge>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          {/* Product Details */}
          <Card>
            <CardContent className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Materials:</span>
                  <p className="text-muted-foreground">{product.materials.join(", ")}</p>
                </div>
                <div>
                  <span className="font-medium">Dimensions:</span>
                  <p className="text-muted-foreground">{product.dimensions}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Artisan Info */}
        <section>
          <Card className="shadow-card hover:shadow-hover transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <img
                  src={product.artisan.avatar}
                  alt={product.artisan.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{product.artisan.name}</h3>
                    {product.artisan.isVerified && (
                      <Badge className="bg-sage/20 text-sage text-xs">Verified</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{product.artisan.specialty}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-gold text-gold" />
                      <span>{product.artisan.rating} ({product.artisan.reviewCount} reviews)</span>
                    </div>
                    <span>{product.artisan.location}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Reviews */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Customer Reviews</h2>
          <div className="space-y-3">
            {product.reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{review.user}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-20 left-0 right-0 bg-card border-t border-border p-4 z-40">
        <div className="container mx-auto flex items-center gap-4">
          <div className="flex items-center border border-border rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-10 w-10"
            >
              -
            </Button>
            <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              className="h-10 w-10"
            >
              +
            </Button>
          </div>
          <Button className="flex-1 bg-gradient-primary hover:opacity-90 h-12">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart - ₹{product.price * quantity}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;