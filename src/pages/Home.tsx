import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Calendar, Shield, Sparkles, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg">
              Weekend Fun
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
              Where Every Weekend is an Adventure
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Connect with amazing people, plan exciting weekend experiences, and make memories that last a lifetime. Only $2/month after your free trial!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                  Start Your Free Trial
                  <Sparkles className="ml-2" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Sign In
                </Button>
              </Link>
            </div>
            
            <p className="text-white/70 mt-6 text-sm">
              🎉 1 Day Free Trial • No Credit Card Required
            </p>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Heart className="w-16 h-16 text-white/20" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Calendar className="w-20 h-20 text-white/20" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              Why Weekend Fun?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most exciting way to meet people and plan unforgettable weekend experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Smart Matching",
                description: "Our algorithm connects you with people who share your interests and weekend vibes",
                color: "text-primary"
              },
              {
                icon: MessageCircle,
                title: "Free Chat",
                description: "Unlimited messaging for all members. Connect and plan your weekend adventures",
                color: "text-secondary"
              },
              {
                icon: Calendar,
                title: "Weekend Match",
                description: "Every Friday, get paired with compatible matches ready for weekend fun",
                color: "text-accent"
              },
              {
                icon: Users,
                title: "Verified Profiles",
                description: "All members are 18+ and verified for your safety and peace of mind",
                color: "text-primary"
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "Advanced security, reporting tools, and 24/7 support to keep you protected",
                color: "text-secondary"
              },
              {
                icon: Sparkles,
                title: "Affordable",
                description: "Only $2/month after a free 1-day trial. No hidden fees or surprise charges",
                color: "text-accent"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth hover:scale-105 animate-scale-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in 3 simple steps
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "1",
                title: "Create Your Profile",
                description: "Sign up in minutes! Add photos, share your interests, and tell us what makes your perfect weekend."
              },
              {
                step: "2",
                title: "Start Matching",
                description: "Browse profiles, get smart suggestions based on location and interests, and connect with people you vibe with."
              },
              {
                step: "3",
                title: "Plan Your Weekend",
                description: "Chat freely, share ideas, and make plans. Use our Weekend Match feature every Friday for fresh connections!"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold shadow-glow">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/signup">
              <Button variant="gradient" size="lg" className="text-xl px-12 py-8 h-auto">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            No tricks, no hidden costs. Just fun!
          </p>

          <div className="gradient-card rounded-3xl p-12 shadow-card border border-border max-w-md mx-auto">
            <div className="mb-8">
              <div className="text-6xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                $2
              </div>
              <div className="text-xl text-muted-foreground">per month</div>
            </div>

            <div className="space-y-4 mb-8 text-left">
              {[
                "1 Day Free Trial",
                "Unlimited Messaging",
                "Smart Match Suggestions",
                "Weekend Match Feature",
                "Profile Verification",
                "WhatsApp Integration",
                "24/7 Support",
                "Cancel Anytime"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/signup">
              <Button variant="gradient" size="lg" className="w-full text-lg py-6 h-auto">
                Start Free Trial
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            Payment methods: PayPal, Debit/Credit Cards, and Mobile Money accepted. Cancel your subscription anytime from your profile settings.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              Weekend Fun
            </h3>
            <p className="text-muted-foreground">
              Where every weekend is an adventure
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">About</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Safety</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Weekend Fun. All rights reserved. Must be 18+ to use this service.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
