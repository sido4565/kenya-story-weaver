import HeroSection from "@/components/HeroSection";
import StoryCard from "@/components/StoryCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, TrendingUp, Heart, Globe } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-kenyan-green" />,
      title: "Community Driven",
      description: "Real stories from real Kenyans sharing their authentic experiences."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-earth-orange" />,
      title: "Earn While Sharing",
      description: "Get paid via M-Pesa when your stories are purchased by listeners."
    },
    {
      icon: <Heart className="h-8 w-8 text-kenyan-red" />,
      title: "Cultural Heritage",
      description: "Preserve and share Kenya's rich cultural stories and traditions."
    },
    {
      icon: <Globe className="h-8 w-8 text-earth-gold" />,
      title: "Global Reach",
      description: "Connect Kenyan diaspora with home through powerful storytelling."
    }
  ];

  return (
    <div className="min-h-screen bg-warm-gradient">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Virtual Village Storyteller?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're building a bridge between Kenya's rich storytelling tradition and the digital world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-card-gradient rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-warm group-hover:shadow-glow transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Stories</h2>
            <p className="text-xl text-muted-foreground">
              Sample authentic Kenyan stories from our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <StoryCard
              title="A Day in Kibera"
              description="Follow Mama Jane through her daily routine in one of Nairobi's largest informal settlements, discovering the community spirit and resilience that defines urban Kenya."
              duration="3 min"
              location="Nairobi"
              isPreview={true}
            />
            <StoryCard
              title="Maasai Morning Traditions"
              description="Experience the peaceful morning rituals of a Maasai family in the Rift Valley, where ancient customs meet modern life in harmonious balance."
              duration="2 min"
              location="Rift Valley"
            />
            <StoryCard
              title="Coastal Fishing Tales"
              description="Join fishermen at dawn on the Indian Ocean as they share generations-old techniques and stories passed down through coastal communities."
              duration="4 min"
              location="Mombasa"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/browse">Explore All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Share Your Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Your story matters. Whether it's about your grandmother's wisdom, your neighborhood's history, 
            or your daily adventures, Kenya needs to hear it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="warm" size="lg">
              <Link to="/submit">Start Sharing</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-kenyan-green">
              <Link to="/contact">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;