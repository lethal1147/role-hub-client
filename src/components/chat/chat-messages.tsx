"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

interface Message {
	role: string;
	content: string;
}

interface ChatMessagesProps {
	messages: Message[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
	return (
		<ScrollArea className="h-full">
			<div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
				{messages.map((message, index) => {
					const isUser = message.role === "user";

					return (
						<div
							key={index}
							className={`flex gap-4 ${isUser ? "justify-end" : "justify-start"}`}
						>
							{!isUser && (
								<Avatar className="h-8 w-8 shrink-0">
									<AvatarFallback className="bg-primary text-primary-foreground">
										<Bot className="h-4 w-4" />
									</AvatarFallback>
								</Avatar>
							)}

							<div
								className={`rounded-lg px-4 py-3 max-w-[80%] ${
									isUser
										? "bg-primary text-primary-foreground"
										: "bg-muted"
								}`}
							>
								<p className="text-sm whitespace-pre-wrap">{message.content}</p>
							</div>

							{isUser && (
								<Avatar className="h-8 w-8 shrink-0">
									<AvatarFallback className="bg-accent">
										<User className="h-4 w-4" />
									</AvatarFallback>
								</Avatar>
							)}
						</div>
					);
				})}
			</div>
		</ScrollArea>
	);
}
