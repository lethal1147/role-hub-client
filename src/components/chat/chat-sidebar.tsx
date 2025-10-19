"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ProfileDropdown } from "./profile-dropdown";
import { Plus, MessageSquare, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatSidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

// Mock recent chats data
const recentChats = [
	{ id: "1", title: "UX Design Review", timestamp: "2 hours ago" },
	{ id: "2", title: "Python Code Optimization", timestamp: "Yesterday" },
	{ id: "3", title: "Frontend Architecture Discussion", timestamp: "2 days ago" },
	{ id: "4", title: "API Design Best Practices", timestamp: "3 days ago" },
	{ id: "5", title: "Database Schema Review", timestamp: "1 week ago" },
];

export function ChatSidebar({ isOpen, onClose }: ChatSidebarProps) {
	const [searchQuery, setSearchQuery] = useState("");

	const filteredChats = recentChats.filter((chat) =>
		chat.title.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<>
			{/* Overlay for mobile */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-40 lg:hidden"
					onClick={onClose}
					onKeyDown={(e) => {
						if (e.key === "Escape") onClose();
					}}
				/>
			)}

			{/* Sidebar */}
			<aside
				className={cn(
					"fixed lg:relative inset-y-0 left-0 z-50 w-80 bg-card border-r border-border flex-shrink-0 transition-all duration-300",
					// Mobile: slide in/out
					"lg:ml-0",
					isOpen
						? "translate-x-0"
						: "-translate-x-full lg:translate-x-0 lg:-ml-80"
				)}
			>
				<div className="flex h-full flex-col">
					{/* Header with Icon */}
					<div className="flex items-center justify-between p-4">
						<div className="flex items-center gap-2">
							<div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
								<MessageSquare className="h-5 w-5 text-primary-foreground" />
							</div>
							<span className="font-semibold text-lg">RoleHub</span>
						</div>
						<Button
							variant="ghost"
							size="icon"
							className="lg:hidden"
							onClick={onClose}
						>
							<X className="h-5 w-5" />
						</Button>
					</div>

					{/* New Chat Button */}
					<div className="px-4 pb-4">
						<Button className="w-full justify-start gap-2" size="lg">
							<Plus className="h-5 w-5" />
							New Chat
						</Button>
					</div>

					<Separator />

					{/* Search Input */}
					<div className="px-4 py-3">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								type="text"
								placeholder="Search chats..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-9 h-9"
							/>
						</div>
					</div>

					{/* Recent Chats List */}
					<div className="flex-1 overflow-hidden px-2 pb-4">
						<h3 className="px-2 mb-2 text-xs font-semibold text-muted-foreground uppercase">
							Recent Chats
						</h3>
						<ScrollArea className="h-full">
							<div className="space-y-1">
								{filteredChats.length > 0 ? (
									filteredChats.map((chat) => (
										<button
											key={chat.id}
											type="button"
											className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-accent transition-colors group"
										>
											<div className="flex items-start gap-2">
												<MessageSquare className="h-4 w-4 mt-0.5 text-muted-foreground group-hover:text-foreground" />
												<div className="flex-1 min-w-0">
													<p className="text-sm font-medium truncate">
														{chat.title}
													</p>
													<p className="text-xs text-muted-foreground">
														{chat.timestamp}
													</p>
												</div>
											</div>
										</button>
									))
								) : (
									<p className="text-sm text-muted-foreground text-center py-4">
										No chats found
									</p>
								)}
							</div>
						</ScrollArea>
					</div>

					<Separator />

					{/* Profile Dropdown */}
					<div className="p-4">
						<ProfileDropdown
							name="John Doe"
							email="john.doe@example.com"
							avatarUrl="https://github.com/shadcn.png"
						/>
					</div>
				</div>
			</aside>
		</>
	);
}
