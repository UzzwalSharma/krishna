import { motion } from 'framer-motion';
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      'IIT-JEE Preparation',
      'NEET Preparation',
      'CA | CS | CMA',
      'Class 9th & 10th',
      'Class 11th & 12th',
    ],
    quickLinks: [
      'About Us',
      'Test Series',
      'Books & Materials',
      'Gallery',
      'Blogs & Updates',
    ],
    support: [
      'Contact Us',
      'Admission Process',
      'Fee Structure',
      'Student Portal',
      'Career Guidance',
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
  ];

  return (
    <>
      <footer className="bg-blue-500 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Brand Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">Academica</h2>
              </div>

              <p className="text-white/80 leading-relaxed">
                Empowering students to achieve their academic dreams through quality education,
                expert guidance, and comprehensive preparation for competitive exams.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-white" />
                  <span>123 Education Street, Academic City, AC 12345</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-white" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-white" />
                  <span>info@academica.edu</span>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center transition ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Link Sections */}
            {[
              ['Our Courses', footerLinks.courses],
              ['Quick Links', footerLinks.quickLinks],
              ['Support', footerLinks.support],
            ].map(([title, items], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <ul className="space-y-2 text-white/90">
                  {items.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="hover:text-white transition-all duration-300 inline-block hover:translate-x-1"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-blue-600">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-white/70 text-center md:text-left">
              © {currentYear} Academica Coaching Institute. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-white/80 hover:text-white transition"
                >
                  {text}
                </a>
              ))}
            </div>
          </motion.div>

          <div className="text-center pb-4 text-sm text-white/80">
            Made with <span className="text-red-500">❤️</span> by{' '}
            <a
              href="https://bringitonline.vercel.app"
              className="text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              BringItOnline
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 animate-bounce group"
        aria-label="Chat on WhatsApp"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full shadow-lg group-hover:scale-110 transition-transform">Chat</span>
        <svg
          className="w-18 h-18 text-green-600 bg-white rounded-full p-3 shadow-2xl border-4 border-green-500 group-hover:scale-110 transition-transform"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="28" fill="#25D366" />
          <circle cx="30" cy="30" r="24" fill="white" />
          {/* Enlarged WhatsApp icon path */}
          <g transform="scale(1.25) translate(-6,-6)">
            <path
              d="M30 16C22.268 16 16 22.268 16 30c0 2.624.77 5.07 2.09 7.13L16 44l7.13-2.09A13.93 13.93 0 0 0 30 44c7.732 0 14-6.268 14-14S37.732 16 30 16Zm7.13 19.13c-.31.87-1.8 1.66-2.47 1.77-.63.1-1.41.14-2.27-.14-.52-.17-1.19-.39-2.05-.77-3.6-1.56-5.95-5.39-6.13-5.65-.18-.26-1.47-1.95-1.47-3.73 0-1.78.93-2.66 1.26-3 .33-.34.72-.43.96-.43.24 0 .48.01.69.01.22 0 .52-.08.81.62.31.74 1.06 2.56 1.15 2.75.09.19.15.41.03.66-.12.25-.18.4-.36.62-.18.22-.38.49-.54.66-.18.18-.36.38-.16.74.2.36.89 1.47 1.91 2.39 1.31 1.17 2.41 1.54 2.77 1.71.36.17.57.14.78-.08.21-.22.9-1.04 1.14-1.4.24-.36.48-.3.81-.18.33.12 2.09.99 2.45 1.17.36.18.6.27.69.42.09.15.09.87-.22 1.74Z"
              fill="#25D366"
            />
          </g>
        </svg>
      </a>

      {/* Up Arrow Floating Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-6 z-50 bg-blue-600 text-white rounded-full p-3 shadow-2xl hover:bg-blue-700 transition-all animate-bounce"
        aria-label="Scroll to top"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
};

export default Footer;
