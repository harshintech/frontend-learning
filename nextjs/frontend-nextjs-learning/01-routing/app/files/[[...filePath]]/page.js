export default async function CommentsPage({ params }) {
  const { filePath } = await params;

  return (
    <>
      {" "}
      <div>This is inside Files Folder /{filePath?.join("/")} </div><br></br>
      <div>This Call Optional Catch All Routes</div>
    </>
  );
}
