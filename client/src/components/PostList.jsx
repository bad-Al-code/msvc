import axios from "axios";
import { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="w-full sm:w-80 md:w-96 lg:w-1/4 xl:w-1/5 p-5 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-5"
      >
        <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
      </div>
    );
  });

  return (
    <div className="w-full px-5 py-10">
      <h1 className="font-bold text-3xl text-white text-center mb-8">Posts</h1>
      <div className="flex flex-wrap justify-center gap-5">{renderedPosts}</div>
    </div>
  );
}
