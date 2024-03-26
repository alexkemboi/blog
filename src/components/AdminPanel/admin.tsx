import React, { useState } from 'react';

interface BlogPost {
    id: number;
    title: string;
    content: string;
}

const AdminInterface: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([{
        id: 1,
        title: 'Understanding Anxiety Disorders',
        content: 'Anxiety disorders are among the most common mental health disorders, affecting millions of people worldwide. They are characterized by excessive worry, fear, and apprehension that can interfere with daily life. Symptoms may include racing thoughts, restlessness, muscle tension, and difficulty concentrating. Treatment options include therapy, medication, and lifestyle changes.',
    },
    {
        id: 2,
        title: 'The Importance of Self-Care for Mental Health',
        content: 'Self-care is essential for maintaining good mental health. It involves taking deliberate actions to prioritize your well-being and reduce stress. Self-care activities can include exercise, meditation, spending time outdoors, practicing hobbies, and seeking support from friends and family. Incorporating self-care into your daily routine can improve mood, increase resilience, and enhance overall quality of life.',
    },
    {
        id: 3,
        title: 'Coping Strategies for Depression',
        content: 'Depression is a serious mental health condition characterized by persistent sadness, loss of interest or pleasure in activities, and feelings of worthlessness or hopelessness. Coping strategies for depression may include therapy, medication, lifestyle changes, and social support. It is essential to seek help from a healthcare professional if you or someone you know is experiencing symptoms of depression.',
    }]);
    const [newPost, setNewPost] = useState<BlogPost>({ id: 0, title: '', content: '' });
    const [editPost, setEditPost] = useState<BlogPost | null>(null);

    const addPost = () => {
        if (!newPost.title || !newPost.content) return;
        setPosts([...posts, { ...newPost, id: Date.now() }]);
        setNewPost({ id: 0, title: '', content: '' });
    };

    const updatePost = () => {
        if (!newPost.title || !newPost.content) return;
        setPosts(posts.map(post => (post.id === newPost.id ? newPost : post)));
        setEditPost(null);
        setNewPost({ id: 0, title: '', content: '' });
    };

    const deletePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id));
    };
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(1);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Admin Interface</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900">Add/Edit Post</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
                        value={newPost.title}
                        onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                    />
                    <textarea
                        placeholder="Content"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 h-32 resize-none"
                        value={newPost.content}
                        onChange={e => setNewPost({ ...newPost, content: e.target.value })}
                    />
                    {editPost ? (
                        <button onClick={updatePost} className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">
                            Update Post
                        </button>
                    ) : (
                        <button onClick={addPost} className="bg-green-500 text-white py-2 px-4 rounded-md mr-2">
                            Add Post
                        </button>
                    )}
                    <button onClick={() => setEditPost(null)} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md">
                        Cancel
                    </button>
                </div>
                <div className='overflow-scroll-y h-96'>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900">Existing Posts</h2>
                    <ul>
                        {currentPosts.map(post => (
                            <li key={post.id} className="border-b border-gray-200 mb-4 pb-4">
                                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-2">{post.content}</p>
                                <div>
                                    <button onClick={() => setEditPost(post)} className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2">
                                        Edit
                                    </button>
                                    <button onClick={() => deletePost(post.id)} className="bg-red-500 text-white py-1 px-2 rounded-md">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex justify-center mt-4">
                        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
                            <li key={index} className="mx-1">
                                <button onClick={() => paginate(index + 1)} className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md">
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminInterface;
