import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, PenTool } from "lucide-react";
import kenyaHero from "@/assets/kenya-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={kenyaHero}
          alt="Beautiful Kenyan landscape with acacia trees and Mount Kenya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-kenyan-black/70 via-kenyan-green/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Virtual Village
            </span>
            <br />
            Storyteller
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
            Discover authentic Kenyan stories! Hear 1–3 minute audio or text stories about local life, 
            from Nairobi markets to Maasai folktales. Share your story and earn via M-Pesa, 
            or subscribe for $1/story or $5/month to explore Kenya's culture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="hero" size="lg" className="text-lg px-8 py-6">
              <Link to="/browse" className="flex items-center gap-2">
                <Play size={20} />
                Browse Stories
              </Link>
            </Button>
            
            <Button asChild variant="warm" size="lg" className="text-lg px-8 py-6">
              <Link to="/submit" className="flex items-center gap-2">
                <PenTool size={20} />
                Share Your Story
              </Link>
            </Button>
          </div>
          
          <div className="text-center text-gray-300 text-sm">
            <p>No skills needed to contribute! Join our storytelling community today.</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;