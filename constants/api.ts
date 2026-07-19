export const API_BASE_URL = "https://blog-backend-production-ed2c.up.railway.app/api";

export const API_ENDPOINTS = {
  blogs: `${API_BASE_URL}/blogs`,
  blogById: (id: number) => `${API_BASE_URL}/blogs/${id}`,
};