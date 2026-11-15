"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { API_ENDPOINTS } from "@/constants/api";

export default function BlogForm() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setMessage("");
    setError("");
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);

    const blogData = {
      title: String(formData.get("title") || ""),
      slug: String(formData.get("slug") || ""),
      author: String(formData.get("author") || ""),
      category: String(formData.get("category") || ""),
      featuredImage: String(formData.get("featuredImage") || ""),
      excerpt: String(formData.get("excerpt") || ""),
      content: String(formData.get("content") || ""),
    };

    try {
      const response = await fetch(API_ENDPOINTS.blogs, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      const contentType = response.headers.get("content-type");
      const isJson = contentType && contentType.includes("application/json");
      const result = isJson ? await response.json() : null;

      if (!response.ok) {
        if (result?.errors) {
          setFieldErrors(result.errors);
        }
        setError(
          result?.message ||
          (isJson ? "Failed to create blog" : "Server error (500). Please check your input or server logs.")
        );
        return;
      }

      setMessage(result.message || "Blog created successfully!");
      form.reset();

      setTimeout(() => {
        router.push(
          `/blogs?message=${encodeURIComponent(
            result.message || "Blog created successfully!"
          )}`
        );
        router.refresh();
      }, 1200);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCancel() {
    router.push("/blogs");
  }

  return (
    <section className="min-h-screen bg-[#fafafa] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div>
          <h1 className="text-[56px] font-bold leading-none text-[#1c1c1c]">
            New Blog Post
          </h1>

          <p className="mt-3 text-base text-[#6b6a65]">
            Create and publish a new article.
          </p>
        </div>

        {message && (
          <div className="mt-6 rounded-[4px] border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-10 flex flex-col gap-6">
          <div className="rounded-[4px] border border-[#e5e4df] bg-white p-7">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#9a9a94]">
              Blog Details
            </p>

            <div className="mb-5">
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-[#1c1c1a]"
              >
                Title
              </label>

              <input
                type="text"
                id="title"
                name="title"
                maxLength={255}
                placeholder="Enter a compelling title..."
                className={`block w-full rounded-xs border bg-transparent p-3 text-sm text-gray-900 outline-none transition ${
                  fieldErrors.title ? "border-red-500" : "border-[#e5e4df] focus:border-[#9a9a94]"
                }`}
                required
              />
              {fieldErrors.title && (
                <p className="mt-1.5 text-sm text-red-600">{fieldErrors.title[0]}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="slug"
                  className="mb-2 block text-sm font-medium text-[#1c1c1a]"
                >
                  Slug
                </label>

                <input
                  type="text"
                  id="slug"
                  name="slug"
                  maxLength={255}
                  placeholder="your-blog-slug"
                  className={`block w-full rounded-xs border bg-transparent p-3 text-sm text-gray-900 outline-none transition ${
                    fieldErrors.slug ? "border-red-500" : "border-[#e5e4df] focus:border-[#9a9a94]"
                  }`}
                  required
                />
                {fieldErrors.slug && (
                  <p className="mt-1.5 text-sm text-red-600">{fieldErrors.slug[0]}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-[#1c1c1a]"
                >
                  Category
                </label>

                <select
                  id="category"
                  name="category"
                  className={`block w-full rounded-xs border bg-transparent p-3 text-sm text-gray-900 outline-none transition ${
                    fieldErrors.category ? "border-red-500" : "border-[#e5e4df] focus:border-[#9a9a94]"
                  }`}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Culture">Culture</option>
                  <option value="Technology">Technology</option>
                  <option value="Design">Design</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Food</option>
                </select>
                {fieldErrors.category && (
                  <p className="mt-1.5 text-sm text-red-600">{fieldErrors.category[0]}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="author"
                  className="mb-2 block text-sm font-medium text-[#1c1c1a]"
                >
                  Author
                </label>

                <input
                  type="text"
                  id="author"
                  name="author"
                  maxLength={100}
                  placeholder="Author name"
                  className={`block w-full rounded-xs border bg-transparent p-3 text-sm text-gray-900 outline-none transition ${
                    fieldErrors.author ? "border-red-500" : "border-[#e5e4df] focus:border-[#9a9a94]"
                  }`}
                  required
                />
                {fieldErrors.author && (
                  <p className="mt-1.5 text-sm text-red-600">{fieldErrors.author[0]}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="readingTime"
                  className="mb-2 block text-sm font-medium text-[#1c1c1a]"
                >
                  Reading time
                </label>

                <div className="relative">
                  <input
                    type="number"
                    id="readingTime"
                    name="readingTime"
                    min="1"
                    placeholder="5"
                    className="block w-full rounded-xs border border-[#e5e4df] bg-transparent p-3 pr-12 text-sm text-gray-900 outline-none transition focus:border-[#9a9a94]"
                  />

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#9a9a94]">
                    min
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="featuredImage"
                className="mb-2 block text-sm font-medium text-[#1c1c1a]"
              >
                Featured image URL
              </label>

              <input
                type="url"
                id="featuredImage"
                name="featuredImage"
                placeholder="https://images.unsplash.com/..."
                className={`block w-full rounded-xs border bg-transparent p-3 text-sm text-gray-900 outline-none transition ${
                  fieldErrors.featuredImage ? "border-red-500" : "border-[#e5e4df] focus:border-[#9a9a94]"
                }`}
              />
              {fieldErrors.featuredImage && (
                <p className="mt-1.5 text-sm text-red-600">{fieldErrors.featuredImage[0]}</p>
              )}
            </div>

            <div className="mt-5">
              <label
                htmlFor="excerpt"
                className="mb-2 block text-sm font-medium text-[#1c1c1a]"
              >
                Excerpt
              </label>

              <textarea
                id="excerpt"
                name="excerpt"
                rows={5}
                maxLength={255}
                placeholder="Write a brief summary..."
                className={`block w-full resize-y rounded-xs border bg-transparent p-3 text-sm leading-6 text-gray-900 outline-none transition ${
                  fieldErrors.excerpt ? "border-red-500" : "border-[#e5e4df] focus:border-[#9a9a94]"
                }`}
                required
              />
              {fieldErrors.excerpt && (
                <p className="mt-1.5 text-sm text-red-600">{fieldErrors.excerpt[0]}</p>
              )}
            </div>
          </div>

          <div className="rounded-[4px] border border-[#e5e4df] bg-white p-7">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#9a9a94]">
              Article Content
            </p>

            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium text-[#1c1c1a]"
            >
              Body
            </label>

            <textarea
              id="content"
              name="content"
              rows={14}
              placeholder="Start writing your article..."
              className={`block w-full resize-y rounded-xs border bg-transparent p-4 text-sm leading-7 text-gray-900 outline-none transition ${
                fieldErrors.content ? "border-red-500" : "border-[#e5e4df] focus:border-[#9a9a94]"
              }`}
              required
            />
            {fieldErrors.content && (
              <p className="mt-1.5 text-sm text-red-600">{fieldErrors.content[0]}</p>
            )}
          </div>

          {message && (
            <p className="rounded-[4px] border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              {message}
            </p>
          )}

          {error && (
            <p className="rounded-[4px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="rounded-[4px] border border-[#e5e4df] bg-white px-6 py-3 text-sm font-medium text-[#6b6a65] transition hover:bg-[#f5f4ef] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                disabled
                className="cursor-not-allowed rounded-[4px] border border-[#e5e4df] bg-white px-6 py-3 text-sm font-medium text-[#1c1c1a] opacity-50"
              >
                Save Draft
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-[4px] bg-[#274f40] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f4034] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Publishing..." : "Publish Article"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}