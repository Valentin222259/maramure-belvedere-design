import { Button } from "@/components/ui/button";
import { User, KeyRound } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const handleLogin = (type: string) => {
    toast({ title: `${type} login`, description: "Login functionality coming soon." });
  };

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="font-heading text-4xl text-center mb-2">Welcome Back</h1>
        <p className="text-center text-muted-foreground mb-10">Sign in to manage your booking or property.</p>

        <div className="space-y-4">
          <button
            onClick={() => handleLogin("Guest")}
            className="w-full flex items-center gap-4 bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow text-left"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User size={22} className="text-primary" />
            </div>
            <div>
              <p className="font-heading text-lg">Guest Login</p>
              <p className="text-sm text-muted-foreground">Access your bookings and preferences</p>
            </div>
          </button>

          <button
            onClick={() => handleLogin("Owner")}
            className="w-full flex items-center gap-4 bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow text-left"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <KeyRound size={22} className="text-accent" />
            </div>
            <div>
              <p className="font-heading text-lg">Owner Login</p>
              <p className="text-sm text-muted-foreground">Manage rooms, bookings, and analytics</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
