import React from 'react';

type FooterLink = {
    id: number;
    title: string;
    url: string;
};

const Footer: React.FC = () => {
    // Dummy data for footer links
    const footerLinks: FooterLink[] = [
        { id: 5, title: 'Home', url: '/home' },
        { id: 1, title: 'About Us', url: '/about' },
        { id: 2, title: 'Contact Us', url: '/contact' },
        { id: 3, title: 'Articles', url: '/blog' },
        { id: 4, title: 'Blogform', url: '/admin' },
    ];

    return (
        <footer className="bg-gray-800 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {footerLinks.map((link) => (
                        <div key={link.id}>
                            <h3 className="text-lg font-semibold text-white mb-4">{link.title}</h3>
                            <a href={link.url} className="text-gray-400 hover:text-white transition duration-300">Visit {link.title}</a>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Kemboi Mental Health Blog. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
