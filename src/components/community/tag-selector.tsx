"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PREDEFINED_TAGS = [
  "Development",
  "Writing",
  "Design",
  "Business",
  "Education",
  "Marketing",
  "Data Analysis",
  "Customer Support",
  "Productivity",
  "Creative",
  "Code Review",
  "Documentation",
  "API",
  "Frontend",
  "Backend",
  "DevOps",
  "Testing",
  "Security",
  "Performance",
  "UI/UX",
];

interface TagSelectorProps {
  value: string[];
  onChange: (tags: string[]) => void;
  error?: string;
}

export function TagSelector({ value, onChange, error }: TagSelectorProps) {
  const [open, setOpen] = useState(false);

  const handleToggle = (tag: string) => {
    const newValue = value.includes(tag)
      ? value.filter((t) => t !== tag)
      : [...value, tag];
    onChange(newValue);
  };

  const handleRemove = (tag: string) => {
    onChange(value.filter((t) => t !== tag));
  };

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between",
              error && "border-destructive"
            )}
          >
            <span className="text-muted-foreground">
              {value.length > 0
                ? `${value.length} tag${value.length > 1 ? "s" : ""} selected`
                : "Select tags..."}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <div className="max-h-64 overflow-y-auto p-4 space-y-2">
            {PREDEFINED_TAGS.map((tag) => (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox
                  id={`tag-${tag}`}
                  checked={value.includes(tag)}
                  onCheckedChange={() => handleToggle(tag)}
                />
                <label
                  htmlFor={`tag-${tag}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {tag}
                </label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* Selected Tags */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="cursor-pointer"
              onClick={() => handleRemove(tag)}
            >
              {tag}
              <span className="ml-1 text-xs">×</span>
            </Badge>
          ))}
        </div>
      )}

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
