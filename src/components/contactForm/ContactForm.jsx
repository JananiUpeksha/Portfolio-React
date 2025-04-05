import React from "react";
import { FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
    const handleIconClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f5f5f5'
        }}>
            <div style={{
                flex: 1,
                padding: '2rem',
                maxWidth: '1400px', // Increased max width
                margin: '0 auto',
                width: '100%',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '3rem',
                    flexWrap: 'wrap',
                    width: '100%'
                }}>
                    {/* Contact Info Section */}
                    <div style={{
                        flex: 1,
                        minWidth: '300px',
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        height: 'fit-content' // Reduced height
                    }}>
                        <h2 style={{
                            fontSize: '1.5rem',
                            marginBottom: '1rem',
                            color: '#444'
                        }}>Contact Information</h2>
                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            <li style={{ marginBottom: '0.5rem', color: '#666' }}>Find from touch on the user's image.</li>
                            <li style={{ marginBottom: '0.5rem', color: '#666' }}>Playing touch by your browser browser.</li>
                        </ul>

                        {/* Location with icon */}
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
                            <FaMapMarkerAlt style={{ marginRight: '10px', color: '#555' }} />
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: '0.5rem',
                                color: '#555'
                            }}>Location</h3>
                        </div>
                        <ul style={{ listStyleType: 'none', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '0.5rem', color: '#666' }}>Navigation, 0° in touch</li>
                        </ul>

                        <h3 style={{
                            fontSize: '1.2rem',
                            marginTop: '1.5rem',
                            marginBottom: '0.5rem',
                            color: '#555'
                        }}>Event</h3>
                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            <li style={{ marginBottom: '0.5rem', color: '#666' }}>Device: Android/US/Digital/User Interface</li>
                        </ul>

                        {/* Phone with icon */}
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
                            <FaPhone style={{ marginRight: '10px', color: '#555' }} />
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: '0.5rem',
                                color: '#555'
                            }}>Phone</h3>
                        </div>
                        <ul style={{ listStyleType: 'none', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '0.5rem', color: '#666' }}>+91 210 240 249</li>
                        </ul>

                        {/* Follow care with social icons */}
                        <h3 style={{
                            fontSize: '1.2rem',
                            marginTop: '1.5rem',
                            marginBottom: '1rem',
                            color: '#555'
                        }}>Follow care</h3>
                        <div style={{
                            display: 'flex',
                            gap: '15px',
                            paddingLeft: '0px',
                            marginBottom: '1rem'
                        }}>
                            <FaFacebook
                                style={{ fontSize: '24px', color: '#4267B2', cursor: 'pointer' }}
                                onClick={() => handleIconClick('https://facebook.com')}
                            />
                            <FaTwitter
                                style={{ fontSize: '24px', color: '#1DA1F2', cursor: 'pointer' }}
                                onClick={() => handleIconClick('https://twitter.com')}
                            />
                            <FaInstagram
                                style={{ fontSize: '24px', color: '#E1306C', cursor: 'pointer' }}
                                onClick={() => handleIconClick('https://instagram.com')}
                            />
                            <FaLinkedin
                                style={{ fontSize: '24px', color: '#0077B5', cursor: 'pointer' }}
                                onClick={() => handleIconClick('https://linkedin.com')}
                            />
                        </div>
                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            <li style={{ marginBottom: '0.5rem', color: '#666' }}>Start Message</li>
                        </ul>
                    </div>

                    {/* Message Form Section */}
                    <div style={{
                        flex: 1,
                        minWidth: '300px',
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        height: 'fit-content' // Reduced height
                    }}>
                        <h2 style={{
                            fontSize: '1.5rem',
                            marginBottom: '1.5rem',
                            color: '#444'
                        }}>Send Me a Message</h2>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: 'bold',
                                color: '#555'
                            }} htmlFor="name">Your Name</label>
                            <input style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '1rem'
                            }} type="text" id="name" placeholder="Text Head" />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: 'bold',
                                color: '#555'
                            }} htmlFor="email">Your Email</label>
                            <input style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '1rem'
                            }} type="email" id="email" placeholder="Text Head" />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: 'bold',
                                color: '#555'
                            }} htmlFor="subject">Subject</label>
                            <input style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '1rem'
                            }} type="text" id="subject" placeholder="Warning" />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: 'bold',
                                color: '#555'
                            }} htmlFor="message">Your Message</label>
                            <textarea style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '1rem',
                                resize: 'vertical',
                                minHeight: '150px'
                            }} id="message" rows="5"></textarea>
                        </div>

                        <button style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            padding: '1rem',
                            fontSize: '1rem',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                            width: '100%', // Matches textarea width
                            marginTop: '0.5rem'
                        }}>Send Message</button>
                    </div>
                </div>
            </div>

            <footer style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: '#333',
                color: 'white'
            }}>
                <p>© {new Date().getFullYear()} Contact Form. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactForm;