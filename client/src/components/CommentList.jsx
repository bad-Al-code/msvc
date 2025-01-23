import axios from "axios";
import { useEffect, useState } from "react";

export function CommentList({ postId }) {
  /** http://localhost:4001/posts/d13cea0f-6ce6-4cc9-9d0e-d87ce57b0118/comments */

  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`,
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}
