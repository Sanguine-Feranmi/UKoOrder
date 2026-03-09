import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../shared/Button';

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-10 px-4 md:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary" size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-gray-600">+44 20 1234 5678</p>
            <p className="text-sm text-gray-500 mt-2">Mon-Fri 9am-6pm</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary" size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-600">support@foodapp.uk</p>
            <p className="text-sm text-gray-500 mt-2">24/7 Support</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Office</h3>
            <p className="text-gray-600">123 Food Street</p>
            <p className="text-sm text-gray-500 mt-2">London, UK</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

          {submitted ? (
            <div className="text-center py-12">
              <div className="bg-green-100 text-green-700 rounded-lg p-6 inline-block">
                <Send className="mx-auto mb-2" size={48} />
                <p className="font-semibold text-lg">Message Sent Successfully!</p>
                <p className="text-sm mt-2">We'll get back to you soon.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <Button type="submit" className="w-full md:w-auto">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
