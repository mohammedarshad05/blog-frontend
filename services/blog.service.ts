import { API_ENDPOINTS } from "@/constants/api";
import type { Blog } from "@/types/blog";

export async function getAllBlogs(): Promise<Blog[]> {
const response = await fetch(API_ENDPOINTS.blogs, {
  cache: "no-store",
});
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return response.json();
}

export async function getBlogById(id: number): Promise<Blog> {
  const response = await fetch(API_ENDPOINTS.blogById(id));

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }

  return response.json();
}