"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateRoleForm } from "./create-role-form";
import type { CreateAIRoleFormData } from "@/lib/schemas/ai-role.schema";

interface CreateRoleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRoleCreated?: (roleId: string) => void;
}

export function CreateRoleModal({
  open,
  onOpenChange,
  onRoleCreated,
}: CreateRoleModalProps) {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [createdRoleId, setCreatedRoleId] = useState<string | null>(null);

  const handleSubmit = (data: CreateAIRoleFormData) => {
    // TODO: Send to API to create role
    console.log("Creating AI Role:", data);

    // Mock: Generate a role ID and save
    const newRoleId = `user-role-${Date.now()}`;
    setCreatedRoleId(newRoleId);

    // Show success state
    setShowSuccess(true);

    // Notify parent component
    if (onRoleCreated) {
      onRoleCreated(newRoleId);
    }
  };

  const handleClose = () => {
    setShowSuccess(false);
    setCreatedRoleId(null);
    onOpenChange(false);
  };

  const handleTestInChat = () => {
    if (createdRoleId) {
      // Navigate to chat with the new role selected
      router.push(`/chat?roleId=${createdRoleId}`);
      handleClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {!showSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle>Create New AI Role</DialogTitle>
              <DialogDescription>
                Define a custom AI role with specific context and response
                formatting. Your role will be saved as a draft for testing
                before publishing to the community.
              </DialogDescription>
            </DialogHeader>
            <CreateRoleForm onSubmit={handleSubmit} onCancel={handleClose} />
          </>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="flex justify-center">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="size-8 text-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                AI Role Created Successfully!
              </h3>
              <p className="text-muted-foreground">
                Your AI role has been saved as a draft. You can test it in chat
                before publishing to the community.
              </p>
            </div>
            <div className="flex gap-3 justify-center pt-4">
              <Button variant="outline" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={handleTestInChat}>Test in Chat</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
