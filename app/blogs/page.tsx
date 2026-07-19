import BlogGrid from "@/components/BlogGrid";
import { getAllBlogs } from "@/services/blog.service";
import Link from "next/dist/client/link";

export default async function BlogsPage() {
    const blogs = await getAllBlogs();

    return (
        <section className="h-full py-16">
            <div className="text-center">
                <h1 className="text-[56px] font-bold text-[#1c1c1c]">The Journal</h1>
                <p className="text-base text-[#6b6a65] ">Thoughtful essays and ideas from writers who care about craft.</p>
            </div>
            <div>
                <BlogGrid blogs={blogs} />
            </div>
        </section>
       
    );
}