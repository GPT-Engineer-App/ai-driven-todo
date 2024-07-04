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
          <p className="mb-4">
            Innovate Hub is a leading payment solution provider in the Philippines, offering seamless and secure transactions for businesses of all sizes.
          </p>
          <Button variant="secondary" className="mt-4">Register Now</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;