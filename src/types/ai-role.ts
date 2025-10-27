export type Category =
  | "all"
  | "development"
  | "writing"
  | "design"
  | "business"
  | "education"
  | "marketing"
  | "data-analysis"
  | "customer-support"
  | "productivity"
  | "creative";

export type SortOption =
  | "most-subscribed"
  | "highest-rated"
  | "recently-added"
  | "recently-updated";

export type ViewMode = "card" | "list";

export type AIRoleStatus = "draft" | "published";

export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface AIRole {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  createdBy: User;
  rating: number; // 0-5
  totalRatings: number;
  totalSubscribed: number;
  isSubscribed: boolean;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
  version?: string;
  isPlatformRole?: boolean; // true for default platform roles
  isDraft: boolean; // true for draft roles
  ownerId: string; // creator's user ID
  context: string; // system prompt for the AI
  responseFormat: string; // instructions for AI response formatting
  status: AIRoleStatus; // draft or published
}
