"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Paperclip,
  Send,
  ChevronDown,
  Check,
  X,
  Image as ImageIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  selectedRole: string | null;
  onRoleChange: (role: string) => void;
  onSendMessage: (message: string) => void;
}

// Mock roles data
const roles = [
  { value: "ux-designer", label: "UX/UI Designer" },
  { value: "frontend-senior", label: "Senior Frontend Developer" },
  { value: "python-senior", label: "Senior Python Developer" },
  { value: "backend-engineer", label: "Backend Engineer" },
  { value: "devops-expert", label: "DevOps Expert" },
  { value: "data-scientist", label: "Data Scientist" },
  { value: "product-manager", label: "Product Manager" },
  { value: "qa-engineer", label: "QA Engineer" },
];

export function ChatInput({
  selectedRole,
  onRoleChange,
  onSendMessage,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const [imageFileName, setImageFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedRoleLabel = roles.find((r) => r.value === selectedRole)?.label;

  const handleSend = () => {
    if (!selectedRole || !message.trim()) return;

    onSendMessage(message);
    setMessage("");
    setAttachedImage(null);
    setImageFileName("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAttachedImage(event.target?.result as string);
        setImageFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setAttachedImage(null);
    setImageFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const isDisabled = !selectedRole || !message.trim();

  return (
    <div className="border-t border-border bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Input Container with Border */}
        <div className="border border-border rounded-lg bg-background overflow-hidden">
          {/* Image Preview - If attached */}
          {attachedImage && (
            <div className="px-3 pt-3">
              <div className="relative inline-block">
                <img
                  src={attachedImage}
                  alt="Preview"
                  className="h-20 w-20 object-cover rounded-lg border border-border"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                  onClick={handleRemoveImage}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}

          {/* Message Input */}
          <div className="px-3 py-2">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                selectedRole
                  ? "Type your message... (Shift + Enter for new line)"
                  : "Please select a role first..."
              }
              disabled={!selectedRole}
              className="min-h-[80px] max-h-[200px] resize-none border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none !bg-transparent"
              rows={3}
            />
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between px-3 py-2 bg-muted/30">
            {/* Left Side: Attach Button & Role Selection */}
            <div className="flex items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="image-upload"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => fileInputRef.current?.click()}
              >
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Attach image</span>
              </Button>

              {/* Role Selection Dropdown */}
              <DropdownMenu open={isRoleOpen} onOpenChange={setIsRoleOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 gap-2" size="sm">
                    <span className="text-xs">
                      {selectedRoleLabel || "Select a role..."}
                    </span>
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search roles..." />
                    <CommandList>
                      <CommandEmpty>No role found.</CommandEmpty>
                      <CommandGroup>
                        {roles.map((role) => (
                          <CommandItem
                            key={role.value}
                            value={role.value}
                            onSelect={(currentValue) => {
                              onRoleChange(currentValue);
                              setIsRoleOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedRole === role.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {role.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Send Button - Bottom Right */}
            <Button
              type="button"
              size="icon"
              className="h-8 w-8"
              disabled={isDisabled}
              onClick={handleSend}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
