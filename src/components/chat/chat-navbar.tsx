"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Menu } from "lucide-react";

interface ChatNavbarProps {
	onToggleSidebar: () => void;
	currentModel: string;
}

export function ChatNavbar({ onToggleSidebar, currentModel }: ChatNavbarProps) {
	return (
		<header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex h-14 items-center gap-4 px-4">
				{/* Sidebar Toggle */}
				<Button
					variant="ghost"
					size="icon"
					onClick={onToggleSidebar}
					className="shrink-0"
				>
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle sidebar</span>
				</Button>

				{/* AI Model Badge */}
				<Badge variant="secondary" className="font-medium">
					{currentModel}
				</Badge>

				{/* Spacer */}
				<div className="flex-1" />

				{/* Theme Toggler */}
				<AnimatedThemeToggler />
			</div>
		</header>
	);
}
