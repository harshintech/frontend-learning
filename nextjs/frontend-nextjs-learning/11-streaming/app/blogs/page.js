import Comments from "@/components/Comments";
import Likes from "@/components/LIkes";
import Views from "@/components/Views";
import Link from "next/link";
import { Suspense } from "react";

const Blogs = () => {
  console.log("Blogs Page");
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
        <Suspense fallback="Loading Views...">
          <Views />
        </Suspense>
        <Likes />
        <Comments />
      </div>
    </>
  );
};

export default Blogs;
