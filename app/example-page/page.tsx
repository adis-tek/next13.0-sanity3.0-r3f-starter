import { getPosts } from "../../sanity/sanity-utils";
export default async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <h1>Example page</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <h2>{post.slug.current}</h2>
        </div>
      ))}
    </div>
  );
}
