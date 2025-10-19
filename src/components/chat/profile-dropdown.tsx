"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Settings, LogOut } from "lucide-react";

interface ProfileDropdownProps {
	name: string;
	email: string;
	avatarUrl?: string;
}

export function ProfileDropdown({ name, email, avatarUrl }: ProfileDropdownProps) {
	const initials = name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					type="button"
					className="flex w-full items-center gap-3 rounded-lg p-3 hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
				>
					<Avatar className="h-10 w-10">
						<AvatarImage src={avatarUrl} alt={name} />
						<AvatarFallback>{initials}</AvatarFallback>
					</Avatar>
					<div className="flex-1 text-left">
						<p className="text-sm font-medium leading-none">{name}</p>
						<p className="text-xs text-muted-foreground mt-1">{email}</p>
					</div>
					<ChevronDown className="h-4 w-4 text-muted-foreground" />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuItem>
					<Settings className="mr-2 h-4 w-4" />
					<span>Profile Settings</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="text-destructive">
					<LogOut className="mr-2 h-4 w-4" />
					<span>Logout</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
