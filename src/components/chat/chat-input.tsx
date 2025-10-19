"use client";

import {
  useState,
  useRef,
  createContext,
  useContext,
  useMemo,
  SetStateAction,
} from "react";
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
import { Paperclip, Send, ChevronDown, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

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

type IChatContext = {
  message: string;
  setMessage: React.Dispatch<SetStateAction<string>>;
  imageFileName: string;
  setImageFileName: React.Dispatch<SetStateAction<string>>;
  attachedImage: string | null;
  setAttachedImage: React.Dispatch<SetStateAction<string | null>>;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  selectedRole: string | null;
  handleSend: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: () => void;
  handleRoleChange: (role: string) => void;
  isDisabled: boolean;
};

const ChatContext = createContext<IChatContext>({} as IChatContext);
const useChat = () => useContext(ChatContext);

export type IChatProps = {
  selectedRole: string | null;
  onRoleChange: (role: string) => void;
  onSendMessage: (message: string) => void;
  children: React.ReactNode;
};

export const Chat = ({
  selectedRole,
  onRoleChange,
  onSendMessage,
  children,
}: IChatProps) => {
  const [message, setMessage] = useState("");
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const [imageFileName, setImageFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleRoleChange = (role: string) => {
    onRoleChange(role);
  };

  const isDisabled = !selectedRole || !message.trim();

  const chatContextValue = useMemo(
    () => ({
      message,
      setMessage,
      imageFileName,
      setImageFileName,
      attachedImage,
      setAttachedImage,
      fileInputRef,
      selectedRole,
      handleSend,
      handleKeyDown,
      handleFileSelect,
      handleRemoveImage,
      handleRoleChange,
      isDisabled,
    }),
    [
      message,
      setMessage,
      imageFileName,
      setImageFileName,
      attachedImage,
      setAttachedImage,
      fileInputRef,
      selectedRole,
      handleSend,
      handleKeyDown,
      handleFileSelect,
      handleRemoveImage,
      handleRoleChange,
      isDisabled,
    ]
  );
  return (
    <ChatContext.Provider value={chatContextValue}>
      <div className="border-t border-border bg-background p-4">{children}</div>
    </ChatContext.Provider>
  );
};

export const ChatAttachmentPreview = () => {
  const { attachedImage, handleRemoveImage } = useChat();
  return (
    <>
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
    </>
  );
};

export const ChatInput = () => {
  const { message, setMessage, handleKeyDown } = useChat();
  return (
    <div className="px-3 py-2">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={"Type your message... (Shift + Enter for new line)"}
        className="min-h-[80px] max-h-[200px] resize-none border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none !bg-transparent"
        rows={3}
      />
    </div>
  );
};

export type IChatContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const ChatContainer = ({
  children,
  className = "",
}: IChatContainerProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={cn(
          "border border-border rounded-lg bg-background overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const ChatSendButton = () => {
  const { isDisabled, handleSend } = useChat();
  return (
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
  );
};

export const ChatAttachmentButton = () => {
  const { fileInputRef, handleFileSelect } = useChat();
  return (
    <>
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
    </>
  );
};

export const ChatRoleSelectionDropdown = () => {
  const { selectedRole, handleRoleChange } = useChat();
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const selectedRoleLabel = roles.find((r) => r.value === selectedRole)?.label;

  return (
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
                    handleRoleChange(currentValue);
                    setIsRoleOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedRole === role.value ? "opacity-100" : "opacity-0"
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
  );
};

export type IChatSubActionGroupProps = {
  children: React.ReactNode;
  className?: string;
};

export const ChatSubActionGroup = ({
  children,
  className = "",
}: IChatSubActionGroupProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>{children}</div>
  );
};

export type IChatActionGroupProps = {
  children: React.ReactNode;
  className?: string;
};

export const ChatActionGroup = ({
  children,
  className = "",
}: IChatActionGroupProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-3 py-2 bg-transparent",
        className
      )}
    >
      {children}
    </div>
  );
};
