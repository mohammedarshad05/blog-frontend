export interface Blog {
  id: number;
  title: string;
  slug: string;
  author: string;
  category: string;
  featuredImage: string | null;
  excerpt: string | null;
  content: string;
  createdAt: string;
  updatedAt: string | null;
}