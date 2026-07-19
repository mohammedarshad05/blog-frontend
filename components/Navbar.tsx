import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e4df]">
      <div className="lg:container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
            <Link
          href="/"
          className="font-sans text-2xl text-[#1c1c1a] font-semibold"
        >
          My Blog
        </Link>

        <nav className="flex font-semibold items-center gap-8 text-sm text-gray-600/90">
          <Link href="/blogs" className="transition hover:text-black">
            Home
          </Link>

          <Link href="/" className="transition hover:text-black">
            Journal
          </Link>

          <Link href="/admin" className="transition hover:text-black">
            Admin
          </Link>
        </nav>
        </div>
      
      </div>
    </header>
  );
}