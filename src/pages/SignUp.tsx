import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Heart, ArrowLeft } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
    location: ""
  });
  const [passwordError, setPasswordError] = useState(false);
  const [buttonPosition, setButtonPosition] = useState<"left" | "right">("left");

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    
    if (newPassword.length > 0 && newPassword.length < 8) {
      setPasswordError(true);
      // Fun animation: move button to opposite side
      setButtonPosition(prev => prev === "left" ? "right" : "left");
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    if (!formData.name || !formData.email || !formData.password || !formData.dateOfBirth || !formData.location) {
      toast.error("Please fill in all fields");
      return;
    }

    // Validate password length
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    // Validate age
    const age = calculateAge(formData.dateOfBirth);
    if (age < 18) {
      toast.error("You must be 18 or older to join Weekend Fun", {
        description: "This platform is exclusively for adults.",
        duration: 5000,
      });
      return;
    }

    // Success - in a real app, this would create the account
    toast.success("Welcome to Weekend Fun! 🎉", {
      description: "Your free 1-day trial has started!",
    });
    
    // Navigate to profile creation or dashboard
    setTimeout(() => {
      navigate("/profile-setup");
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-scale-in">
        <Link to="/" className="inline-flex items-center text-white mb-6 hover:text-white/80 transition-smooth">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <Card className="shadow-card border-border">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow animate-pulse-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl gradient-primary bg-clip-text text-transparent">
              Join Weekend Fun
            </CardTitle>
            <CardDescription className="text-base">
              Create your account and start your free trial
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="transition-smooth focus:shadow-soft"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="transition-smooth focus:shadow-soft"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  className="transition-smooth focus:shadow-soft"
                />
                <p className="text-xs text-muted-foreground">You must be 18 or older to join</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="transition-smooth focus:shadow-soft"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handlePasswordChange}
                  className={`transition-smooth focus:shadow-soft ${
                    passwordError ? "border-destructive focus-visible:ring-destructive" : ""
                  }`}
                />
                {passwordError && (
                  <p className="text-xs text-destructive animate-fade-in">
                    Password must be at least 8 characters! (Watch the button move 😄)
                  </p>
                )}
              </div>

              <div className={`flex ${buttonPosition === "right" ? "justify-end" : "justify-start"} transition-bounce`}>
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full max-w-[200px]"
                  disabled={passwordError}
                >
                  Sign Up
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link to="/auth" className="text-primary font-semibold hover:underline">
                  Sign In
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
