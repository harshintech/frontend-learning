export default async function CommentsPage({ params }) {

  const { blogID } = await params;

  console.log(params); // { blogID: '1' }

  return <div>All Comments on Blog {blogID} </div>;
}
