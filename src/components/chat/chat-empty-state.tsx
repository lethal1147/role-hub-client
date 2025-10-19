"use client";

import { MessageSquare, Sparkles } from "lucide-react";

export function ChatEmptyState() {
	return (
		<div className="flex h-full items-center justify-center p-8">
			<div className="max-w-2xl text-center space-y-6">
				{/* Icon */}
				<div className="flex justify-center">
					<div className="relative">
						<div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
							<MessageSquare className="h-10 w-10 text-primary" />
						</div>
						<div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
							<Sparkles className="h-3 w-3 text-primary-foreground" />
						</div>
					</div>
				</div>

				{/* Welcome Text */}
				<div className="space-y-3">
					<h2 className="text-3xl font-bold tracking-tight">
						Welcome to RoleHub
					</h2>
					<p className="text-lg text-muted-foreground">
						Start a conversation with AI experts tailored to your needs
					</p>
				</div>

				{/* Instructions */}
				<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border">
					<Sparkles className="h-4 w-4 text-primary" />
					<p className="text-sm text-muted-foreground">
						Select a role from the dropdown below to begin
					</p>
				</div>
			</div>
		</div>
	);
}
