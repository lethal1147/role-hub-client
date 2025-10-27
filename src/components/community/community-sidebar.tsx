"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { Category, SortOption } from "@/types/ai-role";

interface CommunitySidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Categories" },
  { value: "development", label: "Development" },
  { value: "writing", label: "Writing" },
  { value: "design", label: "Design" },
  { value: "business", label: "Business" },
  { value: "education", label: "Education" },
  { value: "marketing", label: "Marketing" },
  { value: "data-analysis", label: "Data Analysis" },
  { value: "customer-support", label: "Customer Support" },
  { value: "productivity", label: "Productivity" },
  { value: "creative", label: "Creative" },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "most-subscribed", label: "Most Subscribed" },
  { value: "highest-rated", label: "Highest Rated" },
  { value: "recently-added", label: "Recently Added" },
  { value: "recently-updated", label: "Recently Updated" },
];

export function CommunitySidebar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: CommunitySidebarProps) {
  return (
    <aside className="w-64 border-r border-border bg-card p-6 space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search AI roles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Sort */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Sort By</label>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Categories</label>
        <div className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                selectedCategory === category.value
                  ? "bg-primary text-primary-foreground font-medium"
                  : "hover:bg-accent text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
