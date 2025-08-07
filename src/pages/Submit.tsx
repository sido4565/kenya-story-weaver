import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mic, PenTool, DollarSign } from "lucide-react";

const Submit = () => {
  return (
    <div className="min-h-screen bg-warm-gradient pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Share Your <span className="bg-hero-gradient bg-clip-text text-transparent">Kenyan Story</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Tell the world about your community! Record a 1–3 min audio or write 200–500 words about 
              a market moment, folktale, or daily life. Earn via M-Pesa when your story sells.
            </p>
          </div>

          {/* How it Works */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card-gradient shadow-story border-none text-center">
              <CardHeader>
                <Mic className="h-12 w-12 text-kenyan-green mx-auto mb-4" />
                <CardTitle className="text-lg">Record or Write</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Share your story through audio recording (1-3 min) or text (200-500 words)</p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient shadow-story border-none text-center">
              <CardHeader>
                <PenTool className="h-12 w-12 text-earth-orange mx-auto mb-4" />
                <CardTitle className="text-lg">Submit & Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fill out our form or join WhatsApp group. We'll review and publish quality stories</p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient shadow-story border-none text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-earth-gold mx-auto mb-4" />
                <CardTitle className="text-lg">Earn Money</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Get paid via M-Pesa when listeners purchase your authentic Kenyan stories</p>
              </CardContent>
            </Card>
          </div>

          {/* Google Form */}
          <Card className="bg-card-gradient shadow-glow border-none mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-kenyan-green">Submit Your Story</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg p-6">
                <iframe
                  src="https://forms.gle/VpWEeyatJe5oDTqP9"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  className="rounded-lg"
                  title="Story Submission Form"
                >
                  Loading form...
                </iframe>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp CTA */}
          <Card className="bg-hero-gradient text-white shadow-glow border-none">
            <CardContent className="text-center py-12">
              <MessageCircle className="h-16 w-16 mx-auto mb-6 text-earth-gold" />
              <h3 className="text-2xl font-bold mb-4">Prefer WhatsApp?</h3>
              <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
                Join our WhatsApp community to share stories, get updates, and connect with other storytellers across Kenya.
              </p>
              <Button 
                asChild 
                variant="warm" 
                size="lg"
                className="text-lg px-8 py-6"
              >
                <a 
                  href="https://chat.whatsapp.com/EYZKqhSV2OqIJSsR0WcPYl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Join WhatsApp Group
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Story Guidelines */}
          <div className="mt-12 bg-background rounded-lg p-8 shadow-story">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Story Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-kenyan-green mb-3">Audio Stories</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 1-3 minutes duration</li>
                  <li>• Clear audio quality</li>
                  <li>• Authentic Kenyan experiences</li>
                  <li>• Any Kenyan language or English</li>
                  <li>• Family-friendly content</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-earth-orange mb-3">Written Stories</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 200-500 words</li>
                  <li>• Engaging narrative style</li>
                  <li>• Real-life experiences</li>
                  <li>• Cultural insights welcome</li>
                  <li>• Original content only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;