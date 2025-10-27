"use client";

import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ViewMode } from "@/types/ai-role";

interface ViewToggleProps {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-1 border border-border rounded-md p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onViewChange("card")}
        className={cn(
          "h-8 px-3",
          view === "card"
            ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            : "hover:bg-accent"
        )}
      >
        <LayoutGrid className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onViewChange("list")}
        className={cn(
          "h-8 px-3",
          view === "list"
            ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            : "hover:bg-accent"
        )}
      >
        <List className="size-4" />
      </Button>
    </div>
  );
}
