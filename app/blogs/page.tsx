import BlogGrid from "@/components/BlogGrid";
import { getAllBlogs } from "@/services/blog.service";
import Link from "next/dist/client/link";

export default async function BlogsPage({
    searchParams,
}: {
    searchParams?: Promise<{ message?: string }>;
}) {
    const resolvedParams = searchParams ? await searchParams : undefined;
    const message = resolvedParams?.message;
    const blogs = await getAllBlogs();

    return (
        <section className="h-full py-16 max-w-6xl mx-auto">
            {message && (
                <div className="mb-8 rounded-[4px] border border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                    {message}
                </div>
            )}
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl lg:text-[56px] font-bold text-[#1c1c1c]">The Journal</h1>
                <p className="text-base text-[#6b6a65] ">Thoughtful essays and ideas from writers who care about craft.</p>
            </div>
            <div>
                <BlogGrid blogs={blogs} />
            </div>
        </section>
       
    );
}