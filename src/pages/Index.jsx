import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logo from "@/public/images/logo.png";

const Index = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="bg-opacity-80 bg-primary text-primary-foreground">
        <CardHeader className="flex flex-col items-center">
          <img src={logo} alt="Company Logo" className="h-20 mb-4" />
          <CardTitle className="text-3xl">Welcome to Innovate Hub</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>Your trusted payment solution provider in the Philippines.</p>
          <p>Experience seamless and secure transactions with us.</p>
          <Button className="mt-4" variant="secondary">Register Now</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;