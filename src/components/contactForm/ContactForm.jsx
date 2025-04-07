import React, { useRef } from "react";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'; // Install with: npm install @emailjs/browser

const ContactForm = () => {
    const form = useRef();
    const [isSending, setIsSending] = React.useState(false);
    const [isSent, setIsSent] = React.useState(false);

    const handleIconClick = (url) => {
        window.open(url, '_blank');
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Replace with your EmailJS service ID, template ID, and public key
        emailjs.sendForm(
            'service_1io5c9g',
            'template_5uwt5gv',
            form.current,
            'nYUTBXX5j5NVNWVSd'
        )
            .then((result) => {
                console.log(result.text);
                setIsSent(true);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    // Kadawatha coordinates
    const kadawathaLat = 7.0167;
    const kadawathaLng = 79.9333;

    return (
        <div id="contact"
             className="h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden">
            <div className="flex-1 overflow-y-auto py-8 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 mb-8"
                    >
                        Get In Touch
                    </motion.h2>

                    {isSent && (
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-6 text-center"
                        >
                            Thank you! Your message has been sent successfully.
                        </motion.div>
                    )}

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Contact Info Section with Map */}
                        <motion.div
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                            className="flex-1 min-w-[300px] bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-cyan-300 mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-purple-400 mt-1 text-xl"/>
                                    <div>
                                        <h4 className="text-lg text-purple-300 mb-1">Location</h4>
                                        <p className="text-gray-300">Kadawatha, Sri Lanka</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <FaPhone className="text-cyan-400 mt-1 text-xl"/>
                                    <div>
                                        <h4 className="text-lg text-cyan-300 mb-1">Phone</h4>
                                        <p className="text-gray-300">+94 77 123 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <FaEnvelope className="text-purple-400 mt-1 text-xl"/>
                                    <div>
                                        <h4 className="text-lg text-purple-300 mb-1">Email</h4>
                                        <p className="text-gray-300">upekshakeshani@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-lg text-cyan-300 mb-4">Connect With Me</h4>
                                <div className="flex gap-4 mb-6">
                                    {[
                                        { icon: <FaLinkedin />, color: "text-blue-400", url: "https://www.linkedin.com/in/janani-upeksha-24ab27212" },
                                        {
                                            icon: <FaGithub/>,
                                            color: "text-gray-300",
                                            url: "https://github.com/JananiUpeksha"
                                        },
                                        {
                                            icon: <FaTwitter/>,
                                            color: "text-cyan-400",
                                            url: "https://github.com/JananiUpeksha"
                                        },
                                        {
                                            icon: <FaInstagram/>,
                                            color: "text-pink-400",
                                            url: "https://github.com/JananiUpeksha"
                                        },
                                        {
                                            icon: <FaFacebook/>,
                                            color: "text-blue-500",
                                            url: "https://github.com/JananiUpeksha"
                                        },
                                    ].map((social, index) => (
                                        <motion.button
                                            key={index}
                                            whileHover={{y: -3, scale: 1.1}}
                                            whileTap={{scale: 0.9}}
                                            className={`${social.color} text-2xl hover:text-white transition-colors`}
                                            onClick={() => handleIconClick(social.url)}
                                            aria-label={`${social.icon.type.name} link`}
                                        >
                                            {social.icon}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Map placed under social icons */}
                                <div className="mt-4">
                                    <h4 className="text-lg text-purple-300 mb-3">My Location</h4>
                                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                        <iframe
                                            title="Kadawatha Location"
                                            width="100%"
                                            height="200"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight="0"
                                            marginWidth="0"
                                            src={`https://maps.google.com/maps?q=${kadawathaLat},${kadawathaLng}&z=15&output=embed`}
                                            className="rounded-lg"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Message Form Section */}
                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                            className="flex-1 min-w-[300px] bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-purple-300 mb-6">Send Me a Message</h3>

                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-cyan-300 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="from_name"
                                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-cyan-300 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="from_email"
                                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-cyan-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                                        placeholder="What's this about?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-cyan-300 mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                                        placeholder="Your message here..."
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSending}
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSending ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Enhanced Footer */}
            <footer className="bg-gray-900/80 backdrop-blur-md py-4 px-6 border-t border-gray-700">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Janani Upeksha Perera. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactForm;