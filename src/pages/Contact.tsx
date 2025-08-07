import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Phone, Users, Globe2 } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8 text-kenyan-green" />,
      title: "WhatsApp",
      description: "Quick responses and community chat",
      action: "Message Us",
      link: "https://wa.me/254703379980",
      detail: "+254703379980"
    },
    {
      icon: <Mail className="h-8 w-8 text-earth-orange" />,
      title: "Email",
      description: "Detailed inquiries and support",
      action: "Send Email",
      link: "mailto:sidzac33@gmail.com",
      detail: "sidzac33@gmail.com"
    },
    {
      icon: <Phone className="h-8 w-8 text-earth-gold" />,
      title: "Phone",
      description: "Direct voice communication",
      action: "Call Now",
      link: "tel:+254703379980",
      detail: "+254703379980"
    }
  ];

  return (
    <div className="min-h-screen bg-warm-gradient pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Get in <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Questions about stories, payments, or submissions? We're here to help connect you with 
              Kenya's rich storytelling tradition.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-card-gradient shadow-story hover:shadow-glow transition-all duration-300 border-none group">
                <CardHeader className="text-center">
                  <div className="bg-muted/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-muted/50 transition-colors">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-sm font-mono text-muted-foreground">{method.detail}</p>
                  <Button asChild variant="kenyan" className="w-full">
                    <a href={method.link} target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WhatsApp Community CTA */}
          <Card className="bg-hero-gradient text-white shadow-glow border-none mb-12">
            <CardContent className="py-12 text-center">
              <Users className="h-16 w-16 mx-auto mb-6 text-earth-gold" />
              <h3 className="text-3xl font-bold mb-4">Join Our WhatsApp Community</h3>
              <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
                Connect with storytellers across Kenya! Share your stories, get updates on new content, 
                and be part of our growing community preserving Kenyan culture.
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

          {/* FAQ Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card-gradient shadow-story border-none">
              <CardHeader>
                <CardTitle className="text-xl text-kenyan-green">For Story Listeners</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">How do I purchase stories?</h4>
                  <p className="text-muted-foreground text-sm">Use PayPal for international payments or M-Pesa for Kenyan customers. Contact us for subscription setup.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What's included in subscription?</h4>
                  <p className="text-muted-foreground text-sm">Unlimited access to all stories, weekly new content, and exclusive subscriber-only stories.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Are stories in English?</h4>
                  <p className="text-muted-foreground text-sm">Stories are in various Kenyan languages and English, with descriptions provided for context.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient shadow-story border-none">
              <CardHeader>
                <CardTitle className="text-xl text-earth-orange">For Storytellers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">How do I get paid?</h4>
                  <p className="text-muted-foreground text-sm">We pay via M-Pesa when your stories are purchased. Payment details are discussed after story approval.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What stories do you accept?</h4>
                  <p className="text-muted-foreground text-sm">Authentic Kenyan experiences, cultural stories, daily life, traditions, and local insights. Family-friendly content only.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How long for approval?</h4>
                  <p className="text-muted-foreground text-sm">We review submissions within 3-5 business days and provide feedback via your preferred contact method.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <Card className="bg-background shadow-story border-none text-center">
            <CardContent className="py-8">
              <Globe2 className="h-12 w-12 mx-auto mb-4 text-kenyan-green" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Follow Our Journey</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with our latest stories and community growth
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline">
                  <a href="mailto:sidzac33@gmail.com?subject=Partnership Inquiry">
                    Partnership Inquiries
                  </a>
                </Button>
                <Button asChild variant="story">
                  <a href="https://chat.whatsapp.com/EYZKqhSV2OqIJSsR0WcPYl" target="_blank" rel="noopener noreferrer">
                    Community Updates
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

export default Contact;