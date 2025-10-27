"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/layout/user-menu";
import { useAuth } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Community", href: "/community" },
  { label: "Chat", href: "/chat" },
];

export function Navbar() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex px-16 py-4 items-center justify-between shadow-md bg-background/80 backdrop-blur-md border-b">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <h2 className="font-bold text-2xl cursor-pointer hover:text-primary transition-colors">
            RoleHub
          </h2>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary relative",
              pathname === item.href
                ? "text-primary"
                : "text-foreground"
            )}
          >
            {item.label}
            {pathname === item.href && (
              <span className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-primary" />
            )}
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <AnimatedThemeToggler />
        {isAuthenticated ? (
          <UserMenu />
        ) : (
          <Link href="/login">
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
