import axios from "axios";
import { useState } from "react";

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-5 mb-2">
      <form
        onSubmit={onSubmit}
        className="bg-gray-300 p-8 rounded-lg shadow-xl"
      >
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Comment
          </label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            placeholder="Enter Comment"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
