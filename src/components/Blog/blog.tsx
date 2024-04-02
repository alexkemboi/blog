import React from 'react';

type Article = {
    id: number;
    title: string;
    content: string;
};

const Blog: React.FC = () => {
    const articles: Article[] = [
        {
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
        },

    ];


    return (
        <div className="container mx-auto py-8 px-4 bg-[#F5F5F5]">
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
