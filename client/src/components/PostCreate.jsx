import axios from "axios";
import { useState } from "react";

export default function PostCreate() {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      <h1 className="font-bold text-3xl text-white text-center mb-8">
        Create Post
      </h1>
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-xl">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Post Title"
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
