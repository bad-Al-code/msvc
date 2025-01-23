import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <PostCreate />
      <PostList />
    </div>
  );
}

export default App;
