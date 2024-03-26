import React from 'react';
import About from '../About/about';
import Contact from '../Contact/contact';

type BlogPost = {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
};

const Home: React.FC = () => {
    const dummyBlogPosts: BlogPost[] = [
        {
            id: 3,
            title: 'Understanding Depression: Symptoms and Treatments',
            author: 'Alice Johnson',
            date: 'March 25, 2024',
            content: 'Depression is a common mental health disorder characterized by persistent sadness and loss of interest in activities. Learn more about its symptoms and available treatments...',
        },
        {
            id: 4,
            title: 'Breaking the Stigma: Talking About Mental Health',
            author: 'Michael Smith',
            date: 'April 5, 2024',
            content: 'Despite increased awareness, there is still a stigma surrounding mental health. In this article, we discuss the importance of breaking this stigma and encouraging open conversations about mental health...',
        },
        {
            id: 5,
            title: 'Practicing Mindfulness for Stress Reduction',
            author: 'Emily Brown',
            date: 'April 12, 2024',
            content: 'Mindfulness meditation is a powerful tool for reducing stress and improving mental well-being. Learn how to incorporate mindfulness practices into your daily life...',
        },

    ];

    type AboutContent = {
        title: string;
        description: string;
    };
    const aboutContent: AboutContent[] = [
        {
            title: 'Our Mission',
            description: 'At our mental health blog, our mission is to provide valuable resources and information to help individuals improve their mental well-being. We aim to raise awareness about mental health issues, reduce stigma, and promote self-care and mental wellness.',
        },
        {
            title: 'Our Team',
            description: 'Our team consists of dedicated professionals passionate about mental health advocacy. From psychologists and therapists to writers and editors, we work together to create insightful content and resources for our readers.',
        },
        {
            title: 'Community Engagement',
            description: 'We believe in the power of community support and engagement. Through our blog, we encourage open discussions about mental health topics and provide a safe space for individuals to share their experiences, seek advice, and connect with others who may be facing similar challenges.',
        },
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
            <About aboutContent={aboutContent} />
            <Contact />
        </div>
    );
};

export default Home;
