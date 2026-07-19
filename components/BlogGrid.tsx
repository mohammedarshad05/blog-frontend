import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs }: { blogs: any[] }) {
  return (
    <section>
      <div className="lg:container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
