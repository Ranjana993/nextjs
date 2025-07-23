"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-5">
      <div className="text-center max-w-md p-10 bg-white rounded-lg shadow-md">
        <div className="text-8xl font-bold text-red-400 mb-5">404</div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition duration-200"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}