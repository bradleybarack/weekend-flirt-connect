import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, X, MapPin, Calendar, MessageCircle, Sparkles } from "lucide-react";

// Mock user data for demonstration
const mockUsers = [
  {
    id: 1,
    name: "Sarah",
    age: 25,
    location: "New York, NY",
    bio: "Adventure seeker and coffee enthusiast. Love trying new restaurants and weekend road trips!",
    interests: ["Hiking", "Photography", "Live Music"],
    photos: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"]
  },
  {
    id: 2,
    name: "Michael",
    age: 28,
    location: "Los Angeles, CA",
    bio: "Beach lover and fitness junkie. Looking for someone to explore LA with on weekends.",
    interests: ["Surfing", "Yoga", "Cooking"],
    photos: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"]
  },
  {
    id: 3,
    name: "Emma",
    age: 26,
    location: "Chicago, IL",
    bio: "Art lover and foodie. Let's check out museums and find the best brunch spots together!",
    interests: ["Art", "Brunch", "Jazz"],
    photos: ["https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"]
  }
];

const Discover = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState<number[]>([]);

  const currentUser = mockUsers[currentIndex];

  const handleLike = () => {
    setLiked([...liked, currentUser.id]);
    nextProfile();
  };

  const handlePass = () => {
    nextProfile();
  };

  const nextProfile = () => {
    if (currentIndex < mockUsers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back for demo
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">No more profiles to show</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary py-4 px-6 shadow-soft sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Heart className="w-6 h-6" />
            Weekend Fun
          </h1>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <MessageCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Sparkles className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Discover Your Match</h2>
          <p className="text-muted-foreground">
            Swipe to find your perfect weekend companion
          </p>
        </div>

        {/* Profile Card */}
        <Card className="shadow-card overflow-hidden animate-scale-in border-border">
          {/* Photo */}
          <div className="relative h-96 bg-muted">
            <img
              src={currentUser.photos[0]}
              alt={currentUser.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-soft">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Weekend Match</span>
            </div>
          </div>

          <CardContent className="p-6">
            {/* Name and Location */}
            <div className="mb-4">
              <h3 className="text-3xl font-bold mb-2">
                {currentUser.name}, {currentUser.age}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{currentUser.location}</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-foreground mb-4 leading-relaxed">
              {currentUser.bio}
            </p>

            {/* Interests */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">INTERESTS</h4>
              <div className="flex flex-wrap gap-2">
                {currentUser.interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="w-20 h-20 rounded-full border-2 border-destructive text-destructive hover:bg-destructive hover:text-white transition-smooth shadow-soft"
                onClick={handlePass}
              >
                <X className="w-8 h-8" />
              </Button>
              <Button
                variant="default"
                size="lg"
                className="w-20 h-20 rounded-full shadow-glow transition-smooth hover:scale-110"
                onClick={handleLike}
              >
                <Heart className="w-8 h-8" />
              </Button>
            </div>

            {/* Additional Action */}
            <div className="mt-6 text-center">
              <Button variant="secondary" className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {liked.length} profiles liked • {mockUsers.length - currentIndex - 1} remaining
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
