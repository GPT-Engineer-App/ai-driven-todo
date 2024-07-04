import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from '../../public/images/hero-image.jpg';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={heroImage} alt="Hero" className="w-full h-auto mb-8" />
      <Card className="bg-opacity-80 bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-3xl">Your Blank Canvas</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Chat with the agent to start making edits.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;