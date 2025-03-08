import React, { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // This is where you would normally set up your EmailJS service
    // For demonstration, we'll simulate a successful submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1500);

    // Uncomment this section and add your EmailJS service ID, template ID, and public key
    // when you have them set up
    /*
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, (error) => {
      toast.error('Failed to send message. Please try again.');
      setLoading(false);
    });
    */
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or want to get involved? Reach out to the IEEE AESS Society team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-secondary/20 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-secondary text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Our Location</h3>
                  <p className="text-gray-300 mt-1">
                    AESS <br />
                    University Campus, Building 5<br />
                    BLR
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-secondary/20 p-3 rounded-full">
                  <FaPhone className="text-secondary text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Phone Number</h3>
                  <p className="text-gray-300 mt-1">+91 --------</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-secondary/20 p-3 rounded-full">
                  <FaEnvelope className="text-secondary text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Email Address</h3>
                  <p className="text-gray-300 mt-1">aess@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-secondary/20 p-3 rounded-full">
                  <FaClock className="text-secondary text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Office Hours</h3>
                  <p className="text-gray-300 mt-1">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map or Image */}
            <div className="mt-10 bg-dark/50 p-4 rounded-lg">
              <img 
                src="https://via.placeholder.com/600x300?text=IEEE+AESS+Location+Map" 
                alt="IEEE AESS Location" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="contact-input"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
            
            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div className="bg-dark/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium">How do I become a member?</h4>
                  <p className="text-gray-300 text-sm mt-2">
                    You can join the IEEE AESS Society by visiting the IEEE membership page and selecting AESS as your society of interest.
                  </p>
                </div>
                
                <div className="bg-dark/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium">Are there student discounts available?</h4>
                  <p className="text-gray-300 text-sm mt-2">
                    Yes, IEEE offers special membership rates for students. Visit the IEEE student membership page for more information.
                  </p>
                </div>
                
                <div className="bg-dark/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium">How can I volunteer with AESS?</h4>
                  <p className="text-gray-300 text-sm mt-2">
                    We welcome volunteers! Please contact us through this form or email us directly to discuss volunteer opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;