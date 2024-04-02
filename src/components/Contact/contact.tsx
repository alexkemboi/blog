import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setIsSuccess(true);
        } catch (error) {
            setError('Failed to submit form. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };
    const sampleCode = `
    const items = ['item1', 'item2', 'item3'];
    for (let i = 0; i < items.length; i++) {
      console.log(items[i]);
    }
  `;
    return (
        <div className="mx-auto px-4 py-8 w-full bg-[#F5F5F5]">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto border border-solid rounded-sm p-4">
                {isSuccess && (
                    <p className="text-green-500 mt-4">Form submitted successfully!</p>
                )}
                {error && (
                    <p className="text-red-500 mt-4">{error}</p>
                )}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading && 'opacity-50 cursor-not-allowed'}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-md p-6">
                    <div className="bg-white shadow-md rounded-md p-6">
                        <h2 className="text-xl font-bold mb-4">code testr</h2>
                        <pre className="overflow-x-auto rounded-md bg-gray-100 p-4">
                            <code className="language-ts" dangerouslySetInnerHTML={{ __html: sampleCode }} />
                        </pre>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
