import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl bg-red-400 text-white w-full text-center py-4">Welcome to the Nextjs World </h1>
      <ul className="mt-6  flex items-start justify-between gap-5">
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
        <li>
          <Link href={"/services"}>Services</Link>
        </li>
        <li>
          <Link href={"/contact-us"}>Contact Us</Link>
        </li>
        <li>
          <Link href={"/blogs"}>Blogs</Link>
        </li>
        <li>
          <Link href={"/services/app-development"}>App Development</Link>
        </li>
        <li>
          <Link href={"/services/web-development"}>Web Development</Link>
        </li>
        <li>
          <Link href={"/services/seo"}>SEO Optimization</Link>
        </li>
      </ul>
    </div>
  );
}
