const PostDetailPage = ({ setPage, post }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center mb-4">
            <img src="https://placehold.co/50x50" alt="Profile picture of user" className="w-10 h-10 rounded-full mr-2" />
            <div>
                <h2 className="font-bold">{post.user}</h2>
                <p className="text-gray-600 text-sm">{post.time}</p>
            </div>
        </div>
        <p className="text-gray-800 mb-4">{post.content}</p>
        <button type="button" className="w-full bg-gray-500 text-white p-2 rounded mt-2" onClick={() => setPage('timeline')}>Back to Timeline</button>
    </div>
);

export default PostDetailPage;