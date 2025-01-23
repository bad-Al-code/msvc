import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="bg-black h-screen flex flex-col gap-10 items-center justify-center">
      <PostCreate />
      <PostList />
    </div>
  );
}

export default App;
