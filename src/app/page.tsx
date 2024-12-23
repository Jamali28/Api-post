import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <main className="container mx-auto px-4 py-8 bg-blue-200">
      <h1 className="text-4xl font-bold text-center mb-6 underline text-blue-600">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; body: string; }) => (
          <div
            key={post.id}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
            <Link href= {`/${post.id}`}>
              <p className="text-blue-500 hover:underline mt-4 block">Read More →</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
