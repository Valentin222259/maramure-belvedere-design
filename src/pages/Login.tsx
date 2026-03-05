import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, KeyRound, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const [showOwnerForm, setShowOwnerForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGuestLogin = () => {
    toast({ title: "Guest login", description: "Login functionality coming soon." });
  };

  const handleOwnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email === "admin@belvedere.ro" && password === "admin123") {
      sessionStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="font-heading text-4xl text-center mb-2">Welcome Back</h1>
        <p className="text-center text-muted-foreground mb-10">Sign in to manage your booking or property.</p>

        <div className="space-y-4">
          {/* Guest Login */}
          <button
            onClick={handleGuestLogin}
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

          {/* Owner Login */}
          <div className="bg-card border border-border rounded-lg overflow-hidden transition-all">
            <button
              onClick={() => {
                setShowOwnerForm(!showOwnerForm);
                setError("");
              }}
              className="w-full flex items-center gap-4 p-5 hover:shadow-md transition-shadow text-left"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <KeyRound size={22} className="text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-heading text-lg">Owner Login</p>
                <p className="text-sm text-muted-foreground">Manage rooms, bookings, and analytics</p>
              </div>
              {showOwnerForm && (
                <ArrowLeft size={16} className="text-muted-foreground rotate-90" />
              )}
            </button>

            {showOwnerForm && (
              <form onSubmit={handleOwnerSubmit} className="px-5 pb-5 space-y-4 border-t border-border pt-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1 block">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="owner@belvedere.ro"
                    className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1 block">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
                <Button type="submit" variant="hero" className="w-full">
                  Sign In
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
