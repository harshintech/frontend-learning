import Link from "next/link";

//now using this you can not access blog no. > 200
// ❌ dynamicParams = false
// This means ONLY the blog IDs returned from generateStaticParams()
// will be available. Any blogID not generated at build time
// (for example /blogs/201) will return 404.
export const dynamicParams = false;

// ♻️ revalidate = 5
// This enables ISR (Incremental Static Regeneration)
// The page is:
// 1. Generated at build time
// 2. Cached and served to users
// 3. After 5 seconds, the NEXT request will trigger regeneration
// 4. Users still see old page until new one is ready
export const revalidate = 5; //<- second

// 🏗️ Runs at BUILD TIME (and during revalidation)
// Used to tell Next.js which dynamic routes should be statically generated
export async function generateStaticParams() {
  // API has blog IDs from 1 to 200
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);

  return data.map(({ id }) => ({ blogID: `${id}` }));
}

// 📄 This is a SERVER COMPONENT
// Page is statically generated + revalidated every 5 seconds
const Blog = async ({ params }) => {
  const { blogID } = await params;
  console.log("blogID: ", blogID);
  console.log(new Date().toLocaleString());

  /*
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: { revalidate: 5 },
  });
  */

  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="nav-link active">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <h2>Date : {new Date().toLocaleString()}</h2>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
