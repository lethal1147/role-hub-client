"use client";

import { Star, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { AIRole, ViewMode } from "@/types/ai-role";

interface AIRoleCardProps {
  role: AIRole;
  viewMode: ViewMode;
  onClick: () => void;
  onSubscribe: () => void;
}

export function AIRoleCard({
  role,
  viewMode,
  onClick,
  onSubscribe,
}: AIRoleCardProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  const formatRating = (rating: number, totalRatings: number) => {
    return `${rating.toFixed(1)} (${formatNumber(totalRatings)})`;
  };

  if (viewMode === "list") {
    return (
      <Card
        className="cursor-pointer hover:shadow-lg transition-all hover:border-primary/50"
        onClick={onClick}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <Avatar className="size-12 shrink-0">
              <AvatarImage src={role.createdBy.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {role.createdBy.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-base truncate">
                      {role.name}
                    </h3>
                    {role.isPlatformRole && (
                      <Badge variant="secondary" className="shrink-0 text-xs">
                        Official
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                    {role.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="size-3 fill-yellow-400 text-yellow-400" />
                      <span>{formatRating(role.rating, role.totalRatings)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="size-3" />
                      <span>{formatNumber(role.totalSubscribed)}</span>
                    </div>
                    <span>by {role.createdBy.name}</span>
                  </div>
                </div>

                {/* Tags and Button */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex flex-wrap gap-1 max-w-[200px]">
                    {role.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {role.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{role.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant={role.isSubscribed ? "secondary" : "default"}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSubscribe();
                    }}
                    className="shrink-0"
                  >
                    {role.isSubscribed ? (
                      <>
                        <Check className="size-4" />
                        Subscribed
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Card view
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-all hover:border-primary/50 flex flex-col"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-lg line-clamp-1">{role.name}</CardTitle>
          {role.isPlatformRole && (
            <Badge variant="secondary" className="shrink-0 text-xs">
              Official
            </Badge>
          )}
        </div>
        <CardDescription className="line-clamp-2 min-h-[2.5rem]">
          {role.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {role.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {role.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{role.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            <span>{formatRating(role.rating, role.totalRatings)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="size-4" />
            <span>{formatNumber(role.totalSubscribed)}</span>
          </div>
        </div>

        {/* Creator */}
        <div className="flex items-center gap-2 pt-2 border-t">
          <Avatar className="size-6">
            <AvatarImage src={role.createdBy.avatar} />
            <AvatarFallback className="bg-primary/10 text-primary text-xs">
              {role.createdBy.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">
            by {role.createdBy.name}
          </span>
        </div>

        {/* Subscribe Button */}
        <Button
          variant={role.isSubscribed ? "secondary" : "default"}
          className="w-full mt-auto"
          onClick={(e) => {
            e.stopPropagation();
            onSubscribe();
          }}
        >
          {role.isSubscribed ? (
            <>
              <Check className="size-4" />
              Subscribed
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
