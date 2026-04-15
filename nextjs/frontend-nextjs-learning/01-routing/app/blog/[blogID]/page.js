import React from "react";

const page = async ({ params }) => {
  const { blogID } = await params;
  return <div>Blog {blogID}</div>;
};

export default page;
