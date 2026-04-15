export default async function CommentDetail({ params }) {
  const { blogID, commentID } = await params;
  console.log(params);

  return (
    <div>
      Blog: {blogID} <br />
      Comment: {commentID}
      Also This called nested dynamic routes
    </div>
  );
}
