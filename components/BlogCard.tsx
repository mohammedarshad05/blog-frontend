import { Blog } from "@/types/blog";
import Link from "next/dist/client/link";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.id}`} className="block h-full">
      <section className="h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-sm border border-[#e5e4df] bg-white shadow-md transition duration-300 ease-in-out hover:shadow-lg">
          {blog.featuredImage ? (
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="h-[220px] w-full object-cover"
            />
          ) : (
            <div className="flex h-[220px] items-center justify-center bg-[#e5e4df] text-center text-[#6b6a65]">
              No image available
            </div>
          )}

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="rounded-[20px] bg-[#f0efe9] px-3 py-1 text-sm text-[#4a4a44]">
                {blog.category}
              </div>

              <div className="text-sm text-[#9a9a94]">8 min read</div>
            </div>

            <p className="mb-2 line-clamp-2 min-h-[56px] text-xl text-[#1c1c1a]">
              {blog.title}
            </p>

            <p className="mb-4 line-clamp-3 min-h-[60px] text-sm leading-5 text-[#6b6a65]">
              {blog.excerpt}
            </p>

            <div className="mt-auto border-t border-[#e5e4df] pt-4">
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs font-medium text-[#1c1c1a]">
                  {blog.author}
                </div>

                <div className="text-right text-xs text-[#9a9a94]">
                  {blog.createdAt}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}