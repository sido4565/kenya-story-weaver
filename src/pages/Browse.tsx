import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StoryCard from "@/components/StoryCard";
import { CreditCard, Smartphone, Mail, Play } from "lucide-react";

const Browse = () => {
  const stories = [
    {
      title: "A Day in Kibera",
      description: "Follow Mama Jane through her daily routine in one of Nairobi's largest informal settlements, discovering the community spirit and resilience that defines urban Kenya.",
      duration: "3 min",
      location: "Nairobi",
      price: "$1"
    },
    {
      title: "Maasai Morning Traditions",
      description: "Experience the peaceful morning rituals of a Maasai family in the Rift Valley, where ancient customs meet modern life in harmonious balance.",
      duration: "2 min",
      location: "Rift Valley",
      price: "$1"
    },
    {
      title: "Coastal Fishing Tales", 
      description: "Join fishermen at dawn on the Indian Ocean as they share generations-old techniques and stories passed down through coastal communities.",
      duration: "4 min",
      location: "Mombasa",
      price: "$1"
    },
    {
      title: "Market Day in Nakuru",
      description: "Experience the vibrant energy of Nakuru's central market, where vendors share stories of trade, tradition, and community connections.",
      duration: "2.5 min",
      location: "Nakuru",
      price: "$1"
    },
    {
      title: "Tea Farm Sunrise",
      description: "Walk through the misty tea plantations of Kericho at dawn, learning about the lives of workers who harvest Kenya's famous tea.",
      duration: "3.5 min",
      location: "Kericho",
      price: "$1"
    },
    {
      title: "Urban Legends of Nairobi",
      description: "Discover the modern folklore emerging from Kenya's capital city, where technology meets tradition in unexpected ways.",
      duration: "2 min",
      location: "Nairobi",
      price: "$1"
    }
  ];

  return (
    <div className="min-h-screen bg-warm-gradient pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Explore <span className="bg-hero-gradient bg-clip-text text-transparent">Kenyan Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Listen to real stories from Kenya's heart! Sample a free story below. Buy stories for $1 (KSh 130) 
              or subscribe for $5/month (KSh 650) for unlimited access.
            </p>
          </div>

          {/* Sample Story */}
          <Card className="bg-card-gradient shadow-glow border-none mb-12">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-kenyan-green">🎧 Featured Free Story</CardTitle>
                <span className="bg-earth-gold text-kenyan-black px-3 py-1 rounded-full text-sm font-semibold">FREE</span>
              </div>
            </CardHeader>
            <CardContent>
              <StoryCard
                title="A Day in Kibera"
                description="Follow Mama Jane through her daily routine in one of Nairobi's largest informal settlements, discovering the community spirit and resilience that defines urban Kenya."
                duration="3 min"
                location="Nairobi"
                isPreview={true}
              />
            </CardContent>
          </Card>

          {/* Payment Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card-gradient shadow-story border-none">
              <CardHeader>
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <CreditCard className="h-6 w-6 text-earth-orange" />
                  PayPal Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-kenyan-green">$1 per story</p>
                  <p className="text-muted-foreground">or $5/month unlimited</p>
                </div>
                <Button asChild variant="kenyan" size="lg" className="w-full">
                  <a 
                    href="https://paypal.me/VVSStories" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <CreditCard size={20} />
                    Pay with PayPal
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient shadow-story border-none">
              <CardHeader>
                <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                  <Smartphone className="h-6 w-6 text-kenyan-green" />
                  M-Pesa Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-kenyan-green">KSh 130 per story</p>
                  <p className="text-muted-foreground">or KSh 650/month unlimited</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Send to: <span className="font-semibold">+254703379980</span></p>
                  <p>Contact us for subscription setup</p>
                </div>
                <Button asChild variant="story" size="lg" className="w-full">
                  <a 
                    href="mailto:sidzac33@gmail.com?subject=M-Pesa Story Purchase" 
                    className="flex items-center gap-2"
                  >
                    <Mail size={20} />
                    Contact for M-Pesa
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Stories Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Premium Stories Collection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <StoryCard key={index} {...story} />
              ))}
            </div>
          </div>

          {/* Subscription Benefits */}
          <Card className="bg-hero-gradient text-white shadow-glow border-none">
            <CardContent className="py-12 text-center">
              <h3 className="text-3xl font-bold mb-6">Monthly Subscription Benefits</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="space-y-2">
                  <Play className="h-12 w-12 mx-auto text-earth-gold" />
                  <h4 className="text-xl font-semibold">Unlimited Access</h4>
                  <p className="text-gray-200">Listen to all stories in our growing collection</p>
                </div>
                <div className="space-y-2">
                  <Mail className="h-12 w-12 mx-auto text-earth-gold" />
                  <h4 className="text-xl font-semibold">New Stories Weekly</h4>
                  <p className="text-gray-200">Get notified when fresh stories are added</p>
                </div>
                <div className="space-y-2">
                  <Smartphone className="h-12 w-12 mx-auto text-earth-gold" />
                  <h4 className="text-xl font-semibold">Exclusive Content</h4>
                  <p className="text-gray-200">Access subscriber-only stories and series</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild variant="warm" size="lg" className="text-lg px-8 py-6">
                  <a href="mailto:sidzac33@gmail.com?subject=Monthly Subscription">
                    Subscribe Now - $5/month
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Browse;