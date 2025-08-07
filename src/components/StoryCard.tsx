import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Clock, MapPin } from "lucide-react";

interface StoryCardProps {
  title: string;
  description: string;
  duration?: string;
  location?: string;
  audioSrc?: string;
  price?: string;
  isPreview?: boolean;
}

const StoryCard = ({ 
  title, 
  description, 
  duration = "2 min", 
  location = "Kenya",
  audioSrc,
  price = "$1",
  isPreview = false 
}: StoryCardProps) => {
  return (
    <Card className="bg-card-gradient shadow-story hover:shadow-glow transition-all duration-300 border-none overflow-hidden group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-semibold text-foreground group-hover:text-kenyan-green transition-colors">
              {title}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{location}</span>
              </div>
            </div>
          </div>
          {!isPreview && (
            <div className="text-right">
              <span className="text-lg font-bold text-kenyan-green">{price}</span>
              <p className="text-xs text-muted-foreground">KSh 130</p>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {audioSrc && (
          <div className="bg-muted/50 rounded-lg p-4">
            <audio controls className="w-full">
              <source src={audioSrc} type="audio/mp3" />
              Your browser does not support audio playback.
            </audio>
          </div>
        )}
        
        <div className="flex gap-2">
          {isPreview ? (
            <Button variant="kenyan" className="w-full">
              <Play size={16} className="mr-2" />
              Listen to Preview
            </Button>
          ) : (
            <>
              <Button variant="story" className="flex-1">
                <Play size={16} className="mr-2" />
                Preview
              </Button>
              <Button variant="kenyan" className="flex-1">
                Buy Story
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;