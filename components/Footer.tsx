export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="lg:container mx-auto px-4 py-8">
        <p className="text-sm text-gray-600/90">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}