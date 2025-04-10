import React, { useState } from 'react'; // Added useState import
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Define the handleSubmit function
    const handleSubmit = (e) => {
        // Prevent the default form submit behavior
        e.preventDefault();

        // Use EmailJS to send the form data
        emailjs
            .sendForm(import.meta.VITE_SERVICE_ID, import.meta.VITE_TEMPLATE_ID, e.target, import.meta.VITE_PUBLIC_KEY)
            .then(() => {
                // Notify the user of success
                alert('Message Sent');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                // Log the error for debugging
                console.error('Error sending email:', error);
                // Notify the user of failure
                alert('Something went wrong. Please try again.');
            });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="px-4 max-w-lg w-full"> {/* Changed width to max-w-lg for better responsiveness */}
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Get In Touch {/* Fixed typo from "Torch" to "Touch" */}
                </h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Name..."
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="example@gmail.com"
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            rows={5}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Your Message..."
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,245,0.4)]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};