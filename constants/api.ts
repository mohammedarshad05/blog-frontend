export const API_BASE_URL = "http://localhost:8000/api";

export const API_ENDPOINTS = {
  blogs: `${API_BASE_URL}/blogs`,
  blogById: (id: number) => `${API_BASE_URL}/blogs/${id}`,
};