"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { ChatNavbar } from "@/components/chat/chat-navbar";
import { ChatEmptyState } from "@/components/chat/chat-empty-state";
import {
  Chat,
  ChatActionGroup,
  ChatAttachmentButton,
  ChatAttachmentPreview,
  ChatContainer,
  ChatInput,
  ChatRoleSelectionDropdown,
  ChatSendButton,
  ChatSubActionGroup,
} from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { useAuth } from "@/contexts/auth-context";

export default function ChatPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [messages, setMessages] = useState<
    Array<{ role: string; content: string }>
  >([]);

  // Protect route - redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  // Don't render if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  const handleSendMessage = (message: string) => {
    if (!selectedRole || !message.trim()) return;

    // Add message to chat
    setMessages((prev) => [...prev, { role: "user", content: message }]);

    // TODO: Send to AI API
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden pt-[73px]">
      {/* Sidebar */}
      <ChatSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Navbar */}
        <ChatNavbar
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          currentModel="Claude 3.5 Sonnet"
        />

        {/* Messages Area */}
        <div className="flex-1 overflow-auto">
          {messages.length === 0 ? (
            <ChatEmptyState />
          ) : (
            <ChatMessages messages={messages} />
          )}
        </div>

        {/* Input Area */}
        <Chat
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
          onSendMessage={handleSendMessage}
        >
          <ChatContainer>
            <ChatAttachmentPreview />
            <ChatInput />
            <ChatActionGroup>
              <ChatSubActionGroup>
                <ChatAttachmentButton />
                <ChatRoleSelectionDropdown />
              </ChatSubActionGroup>
              <ChatSendButton />
            </ChatActionGroup>
          </ChatContainer>
        </Chat>
      </div>
    </div>
  );
}
