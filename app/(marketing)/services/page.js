import Link from 'next/link'

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl bg-red-400 text-white w-full text-center py-4">Welcome to the Services Page</h1>
      <ul className="mt-6 flex items-start justify-between gap-5">
        <li>
          <Link href={"/services/web-development"}>Web development</Link>
        </li>
        <li>
          <Link href={"/services/seo"}>SEO Optimization</Link>
        </li>
        <li>
          <Link href={"/services/app-development"}>App development</Link>
        </li>
      </ul>
    </div>
  )
}

export default Services