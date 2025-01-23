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
      <div key={post.id} style={{ width: "30%", marginBottom: "20px" }}>
        <div>
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });
  console.log(renderedPosts);

  return (
    <div>
      <h1 className="font-bold text-3xl underline text-white text-center m-5 ">
        Posts
      </h1>

      {renderedPosts}
    </div>
  );
}
