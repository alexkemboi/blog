import React from 'react';

type BlogPost = {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
};

const Home: React.FC = () => {
    // Dummy data for blog posts
    const dummyBlogPosts: BlogPost[] = [
        {
            id: 1,
            title: 'Coping Strategies for Anxiety',
            author: 'John Doe',
            date: 'March 20, 2024',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis risus...',
        },
        {
            id: 2,
            title: 'The Importance of Self-Care',
            author: 'Jane Smith',
            date: 'March 15, 2024',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis risus...',
        },
        // Add more dummy blog posts as needed
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Mental Health Blog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {dummyBlogPosts.map((post) => (
                    <div key={post.id} className="bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h2>
                        <p className="text-gray-600 mb-2">Author: {post.author}</p>
                        <p className="text-gray-600 mb-2">Date: {post.date}</p>
                        <p className="text-gray-700">{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
