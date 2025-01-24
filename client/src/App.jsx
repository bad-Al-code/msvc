import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

function App() {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10">
            <div className="w-full max-w-4xl px-5 mb-10">
                {/* Post Create Component */}
                <PostCreate />
            </div>
            <div className="w-full max-w-8xl px-5">
                {/* Post List Component */}
                <PostList />
            </div>
        </div>
    );
}

export default App;
