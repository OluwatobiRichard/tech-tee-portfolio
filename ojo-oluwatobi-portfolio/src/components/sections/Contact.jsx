import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // Add a loading state

    // Hardcoded EmailJS credentials
    const SERVICE_ID = "service_nfrwdqm";
    const TEMPLATE_ID = "template_oj4k08q";
    const PUBLIC_KEY = "dpp_I81rSNCSUad3B";

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default behavior

        setIsSubmitting(true); // Set loading state

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                alert('Message Sent Successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form fields
                setIsSubmitting(false); // Reset loading state
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to send message. Please try again.');
                setIsSubmitting(false); // Reset loading state
            });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20 bg-gray-900"
        >
            <div className="px-4 max-w-lg w-full">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Get In Touch
                </h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            required
                            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                            placeholder="Name"
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            required
                            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                            placeholder="example@gmail.com"
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                    </div>

                    {/* Message Input */}
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            rows={5}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-gray-700"
                            placeholder="Your Message"
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-blue-500 ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={isSubmitting} // Disable button while submitting
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};