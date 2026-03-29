import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-[15rem] font-bold text-amber-400">404</h1>
      <p className="text-2xl font-semibold">Page Not Found</p>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
      
      <Link 
        href="/" 
        className="btn bg-amber-400 text-white hover:bg-amber-500"
      >
        Go Home
      </Link>
    </div>
  );
}