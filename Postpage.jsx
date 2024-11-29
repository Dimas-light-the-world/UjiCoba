import React from 'react';

const PostPage = ({ setPage }) => {
    const [postType, setPostType] = React.useState('text');
    const [content, setContent] = React.useState('');
    const [media, setMedia] = React.useState(null);

    const handlePost = React.useCallback(() => {
        // Handle post submission logic here
        setPage('timeline');
    }, [setPage]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Create Post</h2>
        <div className="mb-4 w-full">
            <label className="block text-gray-700">Post Type</label>
            <select className="w-full p-2 border border-gray-300 rounded mt-1" value={postType} onChange={(e) => setPostType(e.target.value)}>
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
            </select>
        </div>
        {postType === 'text' && (
            <div className="mb-4">
                <label className="block text-gray-700">Content</label>
                <textarea className="w-full p-2 border border-gray-300 rounded mt-1" rows="4" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
        )}
        {postType === 'image' && (
            <div className="mb-4">
                <label className="block text-gray-700">Image</label>
                <input type="file" className="w-full p-2 border border-gray-300 rounded mt-1" onChange={(e) => setMedia(e.target.files[0])} />
                <label className="block text-gray-700 mt-4">Caption</label>
                <textarea className="w-full p-2 border border-gray-300 rounded mt-1" rows="2" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
        )}
        {postType === 'video' && (
            <div className="mb-4">
                <label className="block text-gray-700">Video</label>
                <input type="file" className="w-full p-2 border border-gray-300 rounded mt-1" onChange={(e) => setMedia(e.target.files[0])} />
                <label className="block text-gray-700 mt-4">Caption</label>
                <textarea className="w-full p-2 border border-gray-300 rounded mt-1" rows="2" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
        )}
        <button type="button" className="w-full bg-blue-500 text-white p-2 rounded" onClick={handlePost}>Post</button>
        <button type="button" className="w-full bg-gray-500 text-white p-2 rounded mt-2" onClick={() => setPage('timeline')}>Cancel</button>
            </div>
        </div>
    );
};

export default PostPage;