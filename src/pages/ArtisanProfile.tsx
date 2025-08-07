import { useState } from "react";
import { ArrowLeft, MapPin, Star, Heart, MessageSquare, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/product-card";
import featuredProducts from "@/assets/featured-products.jpg";
import heroImage from "@/assets/hero-artisan.jpg";
import artisanProfile from "@/assets/artisan-profile.jpg";

const ArtisanProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const artisan = {
    id: "1",
    name: "Priya Sharma",
    avatar: artisanProfile,
    coverImage: heroImage,
    specialty: "Traditional Pottery",
    location: "Rajasthan, India",
    rating: 4.9,
    reviewCount: 127,
    bio: "I'm a third-generation potter passionate about preserving traditional ceramic techniques while creating contemporary designs. Each piece I create tells a story of our rich cultural heritage.",
    experience: "15+ years",
    totalProducts: 48,
    totalSales: 1247,
    isVerified: true,
    joinDate: "2019",
    skills: ["Pottery", "Ceramics", "Glazing", "Traditional Techniques"],
    achievements: ["Featured Artisan 2023", "Excellence in Craft Award", "Cultural Heritage Preservation"],
  };

  const products = [
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
      title: "Traditional Clay Vase",
      price: 1899,
      image: heroImage,
      artisan: {
        name: "Priya Sharma",
        avatar: artisanProfile,
        rating: 4.9,
      },
      category: "Pottery",
    },
  ];

  const reviews = [
    {
      id: "1",
      user: "Anita R.",
      avatar: artisanProfile,
      rating: 5,
      comment: "Priya's work is absolutely exceptional. The attention to detail and traditional techniques really shine through in every piece.",
      date: "2024-01-15",
      product: "Ceramic Bowl Set",
    },
    {
      id: "2",
      user: "Rajesh K.",
      avatar: artisanProfile,
      rating: 5,
      comment: "Amazing craftsmanship! I've ordered multiple pieces and they're all beautiful. Highly recommend!",
      date: "2024-01-10",
      product: "Clay Vase",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-card/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <span className="font-semibold">Artisan Profile</span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Share className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Cover & Profile Section */}
        <section className="relative">
          <div className="h-48 overflow-hidden">
            <img
              src={artisan.coverImage}
              alt="Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="relative -mt-16 mb-6">
              <div className="flex items-end gap-4">
                <img
                  src={artisan.avatar}
                  alt={artisan.name}
                  className="h-24 w-24 rounded-full object-cover border-4 border-card shadow-soft"
                />
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-card">{artisan.name}</h1>
                    {artisan.isVerified && (
                      <Badge className="bg-sage/20 text-sage">Verified</Badge>
                    )}
                  </div>
                  <p className="text-card/90 mb-2">{artisan.specialty}</p>
                  <div className="flex items-center gap-4 text-sm text-card/80">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{artisan.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-gold text-gold" />
                      <span>{artisan.rating} ({artisan.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={isFollowing ? "secondary" : "default"}
                    size="sm"
                    onClick={() => setIsFollowing(!isFollowing)}
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                  <Button variant="outline" size="sm" className="text-card border-card hover:bg-card hover:text-foreground">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary">{artisan.totalProducts}</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary">{artisan.totalSales}</div>
                <div className="text-sm text-muted-foreground">Sales</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary">{artisan.experience}</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About */}
        <section className="container mx-auto px-4 mb-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-lg font-semibold">About</h2>
              <p className="text-muted-foreground leading-relaxed">{artisan.bio}</p>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {artisan.skills.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Achievements</h3>
                  <div className="space-y-1">
                    {artisan.achievements.map((achievement) => (
                      <div key={achievement} className="text-sm text-muted-foreground">
                        • {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tabs */}
        <section className="container mx-auto px-4">
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="products" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={review.avatar}
                        alt={review.user}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{review.user}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>Product: {review.product}</span>
                          <span>•</span>
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
};

export default ArtisanProfile;