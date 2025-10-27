"use client";

import { Star, Users, Calendar, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import type { AIRole } from "@/types/ai-role";

interface AIRoleDetailModalProps {
  role: AIRole | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubscribe: () => void;
}

export function AIRoleDetailModal({
  role,
  open,
  onOpenChange,
  onSubscribe,
}: AIRoleDetailModalProps) {
  if (!role) return null;

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <DialogTitle className="text-2xl">{role.name}</DialogTitle>
                {role.isPlatformRole && (
                  <Badge variant="secondary">Official</Badge>
                )}
              </div>
              <DialogDescription className="text-base">
                {role.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Stats Row */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">
                {role.rating.toFixed(1)}{" "}
                <span className="text-muted-foreground">
                  ({formatNumber(role.totalRatings)} ratings)
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-5 text-muted-foreground" />
              <span className="font-medium">
                {formatNumber(role.totalSubscribed)}{" "}
                <span className="text-muted-foreground">subscribed</span>
              </span>
            </div>
          </div>

          <Separator />

          {/* Tags */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {role.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Full Description */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">About</h3>
            <p className="text-muted-foreground leading-relaxed">
              {role.fullDescription || role.description}
            </p>
          </div>

          <Separator />

          {/* Creator Info */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Created By</h3>
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage src={role.createdBy.avatar} />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {role.createdBy.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{role.createdBy.name}</p>
                {role.isPlatformRole && (
                  <p className="text-sm text-muted-foreground">
                    Official RoleHub Team
                  </p>
                )}
              </div>
            </div>
          </div>

          <Separator />

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-muted-foreground">Created</p>
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{formatDate(role.createdAt)}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">Last Updated</p>
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{formatDate(role.updatedAt)}</span>
              </div>
            </div>
            {role.version && (
              <div className="space-y-1">
                <p className="text-muted-foreground">Version</p>
                <span className="font-mono">{role.version}</span>
              </div>
            )}
            <div className="space-y-1">
              <p className="text-muted-foreground">Category</p>
              <Badge variant="secondary">{role.category}</Badge>
            </div>
          </div>

          <Separator />

          {/* Action Button */}
          <Button
            className="w-full"
            size="lg"
            variant={role.isSubscribed ? "secondary" : "default"}
            onClick={onSubscribe}
          >
            {role.isSubscribed ? (
              <>
                <Check className="size-5" />
                Subscribed
              </>
            ) : (
              "Subscribe to this AI Role"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
