import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Heart, Upload, Camera } from "lucide-react";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    bio: "",
    interests: "",
    weekendActivities: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!profileData.bio || !profileData.interests || !profileData.weekendActivities) {
      toast.error("Please fill in all fields to complete your profile");
      return;
    }

    toast.success("Profile created! 🎉", {
      description: "Let's find your perfect weekend match!",
    });

    setTimeout(() => {
      navigate("/discover");
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-scale-in">
        <Card className="shadow-card border-border">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow animate-pulse-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl gradient-primary bg-clip-text text-transparent">
              Complete Your Profile
            </CardTitle>
            <CardDescription className="text-base">
              Tell us about yourself to get better matches
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Photo Upload Section */}
              <div className="space-y-3">
                <Label>Profile Photos</Label>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary transition-smooth cursor-pointer flex flex-col items-center justify-center gap-2 bg-muted/30 hover:bg-muted/50"
                    >
                      <Camera className="w-8 h-8 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Add Photo</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Add at least one photo to continue
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself... What makes you unique?"
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  className="min-h-[120px] transition-smooth focus:shadow-soft resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  A great bio helps others know if you're a match!
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Interests</Label>
                <Input
                  id="interests"
                  type="text"
                  placeholder="E.g., hiking, movies, concerts, cooking..."
                  value={profileData.interests}
                  onChange={(e) => setProfileData({ ...profileData, interests: e.target.value })}
                  className="transition-smooth focus:shadow-soft"
                />
                <p className="text-xs text-muted-foreground">
                  Separate with commas
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weekendActivities">Preferred Weekend Activities</Label>
                <Textarea
                  id="weekendActivities"
                  placeholder="What's your ideal weekend? Beach trips, cozy cafes, adventure sports..."
                  value={profileData.weekendActivities}
                  onChange={(e) => setProfileData({ ...profileData, weekendActivities: e.target.value })}
                  className="min-h-[100px] transition-smooth focus:shadow-soft resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
              >
                Complete Profile & Start Matching
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                You can always update your profile later from settings
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSetup;
