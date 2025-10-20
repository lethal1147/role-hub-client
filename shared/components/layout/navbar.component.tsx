import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex px-16 py-4 items-center justify-between shadow-md bg-background/80 backdrop-blur-md border-b">
      <div className="flex items-center">
        <Link href="/">
          <h2 className="font-bold text-2xl cursor-pointer hover:text-primary transition-colors">
            RoleHub
          </h2>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <AnimatedThemeToggler />
        <Link href="/login">
          <Button>Get Started</Button>
        </Link>
      </div>
    </nav>
  );
}
