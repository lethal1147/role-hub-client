import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex px-16 py-4 items-center justify-between shadow-md bg-background/80 backdrop-blur-md border-b">
      <div className="flex items-center">
        <h2 className="font-bold text-2xl">RoleHub</h2>
      </div>
      <div className="flex items-center gap-6">
        <AnimatedThemeToggler />
        <Button>Get Started</Button>
      </div>
    </nav>
  );
}
