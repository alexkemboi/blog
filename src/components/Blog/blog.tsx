import React from 'react';

type Article = {
    id: number;
    title: string;
    content: string;
};

const Blog: React.FC = () => {
    // Dummy data for blog articles
    const articles: Article[] = [
        {
            id: 1,
            title: '5 Tips for Better Mental Health',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis risus. Integer...',
        },
        {
            id: 2,
            title: 'How to Manage Stress in Daily Life',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis risus. Integer...',
        },
        // Add more articles as needed
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">{article.title}</h3>
                            <p className="text-gray-700">{article.content}</p>
                        </div>
                        <div className="bg-gray-100 px-6 py-4">
                            <a
                                href={`/article/${article.id}`}
                                className="text-blue-500 font-semibold hover:text-blue-700 transition duration-300"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
