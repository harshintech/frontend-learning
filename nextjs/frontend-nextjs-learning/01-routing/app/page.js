import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Routing Made Easy By Next Js</h1>
      <Link href="/about">Go To About</Link><br></br>
      <Link href="/services">Go To Service</Link>

    </>
  );
}
