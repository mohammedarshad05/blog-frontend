import { getBlogById } from "@/services/blog.service";

interface BlogDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { id } = await params;
  const blog = await getBlogById(Number(id));

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#fafafa] py-[60px]">
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-sm border border-gray-100 bg-white p-5 shadow-[0_1px_8px_rgba(0,0,0,0.03)] sm:p-7 lg:p-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.95fr] lg:gap-14">
            <div>
              {blog.featuredImage ? (
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="h-[320px] w-full rounded-sm object-cover sm:h-[420px] lg:h-[485px]"
                />
              ) : (
                <div className="flex h-[320px] w-full items-center justify-center rounded-sm bg-gray-100 text-gray-400 sm:h-[420px] lg:h-[485px]">
                  No image available
                </div>
              )}
            </div>

            <article>
              <div className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.08em] text-gray-600">
                <span>{blog.category}</span>
                <span className="text-gray-300">•</span>
                <span>6 min read</span>
              </div>

              <h1 className="text-4xl leading-[1.08] text-gray-950 sm:text-5xl lg:text-[58px]">
                {blog.title}
              </h1>

              {blog.excerpt && (
                <p className="mt-7 text-lg leading-8 text-gray-500">
                  {blog.excerpt}
                </p>
              )}

              <div className="mt-8 flex items-center justify-between gap-6 text-sm">
                <span className="font-medium text-gray-900">
                  {blog.author}
                </span>

                <span className="text-gray-500">
                  {formattedDate}
                </span>
              </div>
            </article>
          </div>

          <article className="mx-auto mt-14 max-w-3xl border-t border-gray-100 pt-10">
            <div className="whitespace-pre-line text-lg leading-9 text-gray-700">
              {blog.content}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}