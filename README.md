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