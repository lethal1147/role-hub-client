"use client";

import { LogOut, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/auth-context";
import Link from "next/link";

export function SidebarUserSection() {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) return null;

  return (
    <div className="border-t border-border pt-4 mt-auto">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors outline-none focus:ring-2 focus:ring-ring">
          <Avatar className="size-10 shrink-0">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 text-left min-w-0">
            <p className="text-sm font-medium truncate">{user.name}</p>
            <p className="text-xs text-muted-foreground truncate">
              {user.email}
            </p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="top" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/profile" className="cursor-pointer">
              <User className="size-4 mr-2" />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings" className="cursor-pointer">
              <Settings className="size-4 mr-2" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={logout}
            className="cursor-pointer text-destructive focus:text-destructive"
          >
            <LogOut className="size-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
