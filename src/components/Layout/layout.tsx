import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import Contact from "../Contact/contact";
import About from "../About/about";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
        <div className='h-screen bg-[#F5F5F5]'>
            <Navbar />
            <div className='w-full xs:flex-col md:w-full md:flex-col md:justify-between'>
                <div className='overflow-y-auto h-auto md:align-center md:justify-center w-9/10 m-auto'>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;