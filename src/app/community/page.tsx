"use client";

import { useState, useMemo } from "react";
import { CommunitySidebar } from "@/components/community/community-sidebar";
import { AIRoleCard } from "@/components/community/ai-role-card";
import { ViewToggle } from "@/components/community/view-toggle";
import { AIRoleDetailModal } from "@/components/community/ai-role-detail-modal";
import { mockAIRoles } from "@/data/mock-ai-roles";
import type {
  AIRole,
  Category,
  SortOption,
  ViewMode,
} from "@/types/ai-role";
import { cn } from "@/lib/utils";

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [sortBy, setSortBy] = useState<SortOption>("most-subscribed");
  const [viewMode, setViewMode] = useState<ViewMode>("card");
  const [selectedRole, setSelectedRole] = useState<AIRole | null>(null);
  const [roles, setRoles] = useState(mockAIRoles);

  // Filter and sort roles
  const filteredAndSortedRoles = useMemo(() => {
    let filtered = [...roles];

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (role) =>
          role.name.toLowerCase().includes(query) ||
          role.description.toLowerCase().includes(query) ||
          role.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((role) => role.category === selectedCategory);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "most-subscribed":
          return b.totalSubscribed - a.totalSubscribed;
        case "highest-rated":
          return b.rating - a.rating;
        case "recently-added":
          return b.createdAt.getTime() - a.createdAt.getTime();
        case "recently-updated":
          return b.updatedAt.getTime() - a.updatedAt.getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [roles, searchQuery, selectedCategory, sortBy]);

  const handleSubscribe = (roleId: string) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              isSubscribed: !role.isSubscribed,
              totalSubscribed: role.isSubscribed
                ? role.totalSubscribed - 1
                : role.totalSubscribed + 1,
            }
          : role
      )
    );

    // Update selected role if it's the one being subscribed to
    if (selectedRole?.id === roleId) {
      setSelectedRole((prev) =>
        prev
          ? {
              ...prev,
              isSubscribed: !prev.isSubscribed,
              totalSubscribed: prev.isSubscribed
                ? prev.totalSubscribed - 1
                : prev.totalSubscribed + 1,
            }
          : null
      );
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <CommunitySidebar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6 max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">AI Role Marketplace</h1>
              <p className="text-muted-foreground">
                Discover and subscribe to AI roles created by the community
              </p>
            </div>
            <ViewToggle view={viewMode} onViewChange={setViewMode} />
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              {filteredAndSortedRoles.length}{" "}
              {filteredAndSortedRoles.length === 1 ? "role" : "roles"} found
            </p>
          </div>

          {/* Roles Grid/List */}
          {filteredAndSortedRoles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg font-medium mb-2">No roles found</p>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div
              className={cn(
                "gap-6",
                viewMode === "card"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "flex flex-col"
              )}
            >
              {filteredAndSortedRoles.map((role) => (
                <AIRoleCard
                  key={role.id}
                  role={role}
                  viewMode={viewMode}
                  onClick={() => setSelectedRole(role)}
                  onSubscribe={() => handleSubscribe(role.id)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal */}
      <AIRoleDetailModal
        role={selectedRole}
        open={!!selectedRole}
        onOpenChange={(open) => !open && setSelectedRole(null)}
        onSubscribe={() => selectedRole && handleSubscribe(selectedRole.id)}
      />
    </div>
  );
}
