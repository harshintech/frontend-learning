export default async function CommentsPage({ params }) {
  const { filePath } = await params;

  return (
    <>
      <div>File /{filePath.join("/")} </div>
      <br></br>
      <div>This Call Catch All Routes</div>
    </>
  );
}
