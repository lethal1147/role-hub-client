"use client";

import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Upload, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface AvatarUploadProps {
  value?: File;
  onChange: (file: File | undefined) => void;
  error?: string;
}

export function AvatarUpload({ value, onChange, error }: AvatarUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(undefined);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={cn(
          "relative cursor-pointer group",
          error && "ring-2 ring-destructive rounded-full"
        )}
        onClick={handleClick}
      >
        <Avatar className="size-24 border-2 border-border">
          {preview ? (
            <AvatarImage src={preview} alt="Profile preview" />
          ) : (
            <AvatarFallback className="bg-muted">
              <User className="size-10 text-muted-foreground" />
            </AvatarFallback>
          )}
        </Avatar>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Upload className="size-6 text-white" />
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleClick}
          className="text-xs"
        >
          {preview ? "Change Photo" : "Upload Photo"}
        </Button>
        {preview && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleRemove}
            className="text-xs text-destructive hover:text-destructive"
          >
            Remove
          </Button>
        )}
      </div>

      {error && <p className="text-sm text-destructive text-center">{error}</p>}
      {!error && (
        <p className="text-xs text-muted-foreground text-center">
          Optional • Max 5MB • JPG, PNG, or WebP
        </p>
      )}
    </div>
  );
}
