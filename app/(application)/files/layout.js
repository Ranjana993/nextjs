import '../globals.css';
// import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'My Blog',
  description: 'A personal blog about technology and life',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col w-full ">
        <header className="bg-orange-800 text-white shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <nav className="mt-4">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-white hover:text-gray-900 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-white hover:text-gray-900 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-teal-800 py-6">
          <div className="container mx-auto px-4">
            <p className="text-center text-white mb-4">© {new Date().getFullYear()} My Blog</p>
            <nav>
              <ul className="flex justify-center space-x-6">
                <li>
                  <Link href="/" className="text-white hover:text-gray-700 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-gray-700 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-gray-700 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}