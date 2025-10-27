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
}
