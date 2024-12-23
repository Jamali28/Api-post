interface PostParams {
  id: string; // Define the expected type for 'id'
}

export default async function PostDetail({ params }: { params: PostParams }) {
  const { id } = params; // Extract 'id' from 'params'

  // Fetch data from the API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  // Handle potential errors
  if (!res.ok) {
    return (
      <main className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-500">Post Not Found</h1>
        <p className="text-gray-600">The requested post does not exist.</p>
        <a href="/" className="text-blue-500 hover:underline mt-4 block">
          ← Back to Posts
        </a>
      </main>
    );
  }

  const post = await res.json();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
        <a
          href="/posts"
          className="text-blue-500 hover:underline mt-6 block"
        >
          ← Back to Posts
        </a>
      </div>
    </main>
  );
}
