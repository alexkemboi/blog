"use client"
import About from "@/components/About/about";
import Blog from "@/components/Blog/blog";
import Contact from "@/components/Contact/contact";
import Home from "@/components/Home/home";
import Layout from "@/components/Layout/layout";
import React from "react";


const page = () => {
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
        <div className="bg-[#F5F5F5] h-full">
            <Layout children={<About aboutContent={aboutContent} />} />
        </div>
    );
};

export default page;