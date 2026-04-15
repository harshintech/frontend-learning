import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }) => {
  const { blogID } = await params;

  if(blogID == "test"){
    notFound();
  }
  return <div>Blog {blogID}</div>;
};

export default page;
