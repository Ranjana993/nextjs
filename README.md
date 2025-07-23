## Next.js Interview Questions & Answers (Up to Dynamic Routing)

### 1. What is Next.js?
**Answer:**  
Next.js is a React framework for building server-side rendered and statically generated web applications.

---

### 2. How do you start a Next.js development server?
**Answer:**  
Run `npm run dev` or `yarn dev` in your project directory.

---

### 3. Where do you define routes in Next.js?
**Answer:**  
Routes are defined by the file and folder structure inside the `pages` or `app` directory.

---

### 4. How do you create a static page in Next.js?
**Answer:**  
Add a file like `app/about-us/page.js`:
```js
// filepath: app/about-us/page.js
export default function AboutUs() {
  return <h1>About Us</h1>;
}
```

---

### 5. How do you navigate between pages?
**Answer:**  
Use the `Link` component from `next/link`:
```js
import Link from "next/link";
<Link href="/about-us">About Us</Link>
```

---

### 6. How do you create nested routes?
**Answer:**  
Create folders inside the `app` directory. For example, `app/services/web-development/page.js` creates `/services/web-development`.

---

### 7. How do you implement dynamic routing?
**Answer:**  
Use square brackets for folder names, e.g., `app/blogs/[blogID]/page.js` for `/blogs/:blogID`.

---

### 8. How do you access dynamic route parameters?
**Answer:**  
In the page component, use the `params` prop:
```js
// filepath: app/blogs/[blogID]/page.js
const Blog = ({ params }) => <h1>Blog {params.blogID}</h1>;
export default Blog;
```

---

### 9. What is the difference between static and dynamic routing in Next.js?
**Answer:**  
Static routing uses fixed file paths for routes. Dynamic routing uses bracket notation (`[param]`) to capture variable segments in the URL.

---

### 10. How do you create a catch-all route?
**Answer:**  
Use double brackets: `app/blogs/[...slug]/page.js` for `/blogs/*

### 11. How do you create a catch-all route in Next.js?
**Answer:**  
Use triple dots in square brackets:  
`app/blogs/[...slug]/page.js`  
This matches `/blogs/a`, `/blogs/a/b`, etc.

```js
// filepath: app/blogs/[...slug]/page.js
export default function BlogCatchAll({ params }) {
  return <div>Slug: {params.slug?.join('/')}</div>;
}
```

---

### 12. How do you create an optional catch-all route?
**Answer:**  
Use double brackets with triple dots:  
`app/blogs/[[...slug]]/page.js`  
This matches `/blogs`, `/blogs/a`, `/blogs/a/b`, etc.

```js
// filepath: app/blogs/[[...slug]]/page.js
export default function BlogOptionalCatchAll({ params }) {
  return <div>Slug: {params.slug ? params.slug.join('/') : 'No slug'}</div>;
}
```

---

### 13. What is shallow routing in Next.js?
**Answer:**  
Shallow routing allows you to change the URL without running data fetching methods again (like `getServerSideProps`).  
Use the `shallow` option with `router.push` or `router.replace`.

```js
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/about-us', undefined, { shallow: true });
```

---

### 14. How do you programmatically navigate in Next.js?
**Answer:**  
Use the `useRouter` hook from `next/navigation` (app directory) or `next/router` (pages directory):

```js
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/services');
```

---

### 15. What is route interception in Next.js?
**Answer:**  
Route interception allows you to override or intercept navigation to a route using special markers like `(.)`, `(..)`, `(..)(..)`, and `(...)` in the folder name.  
Example:  
- `app/(dashboard)/feed/(.)profile/page.js` intercepts `/feed/profile` from `/dashboard`.

---

### 16. How do you handle 404 pages in Next.js?
**Answer:**  
Create a `not-found.js` file in the `app` directory:

```js
// filepath: app/not-found.js
export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
```

---

### 17. How do you create custom error pages?
**Answer:**  
Create an `error.js` file in the `app` directory:

```js
// filepath: app/error.js
export default function Error({ error }) {
  return <h1>Error: {error.message}</h1>;
}
```

---

### 18. How do you add route groups in Next.js?
**Answer:**  
Use parentheses in folder names to group routes without affecting the URL.  
Example: `app/(admin)/dashboard/page.js` is accessible at `/dashboard`.

---

### 19. How do you use middleware for routing?
**Answer:**  
Add a `middleware.js` file at the root or in a folder to run code before a request is completed (e.g., authentication, redirects).

```js
// filepath: middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Example: redirect unauthenticated users
  return NextResponse.next();
}
```

---

For more advanced routing topics, see the [Next.js Routing Docs](https://nextjs.org/docs/app/building-your-application/routing)