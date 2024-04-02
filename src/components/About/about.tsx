import React from 'react';

type AboutContent = {
    title: string;
    description: string;
};

const About: React.FC<{ aboutContent: AboutContent[] }> = ({ aboutContent }) => {
    return (
        <div className="container mx-auto py-8 px-4 bg-[#F5F5F5]">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">About Our Mental Health Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aboutContent.map((item, index) => (
                    <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
