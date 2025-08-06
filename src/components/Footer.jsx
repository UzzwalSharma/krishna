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
      'Accountancy',
      'Chemistry',
      'Mathematics',
      'Economics',
      'General Science'
    ],
    quickLinks: [
      'About Krishna Institute',
      'Test Series',
      'Resources & Downloads',
      'Gallery',
      'Academic Calendar'
    ],
    support: [
      'Contact Us',
      'Admission Process',
      'Fee Details',
      'Student Portal',
      'Study Tips'
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
                <h2 className="text-3xl font-bold">Krishna Institute</h2>
              </div>

              <p className="text-white/80 leading-relaxed">
                Krishna Institute in Delhi is a leading academic coaching center dedicated to helping students excel in Accountancy, Chemistry, Mathematics, Economics, and General Science through expert faculty, personalized mentoring, and a focused approach to academic success.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-white" />
                  <span>53/27, 2nd Floor, Ramjas Road, Karol Bagh, Delhi - 110005</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-white" />
                  <span>+91 98730 46710</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-white" />
                  <span>contact@krishnainstitute.com</span>
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

            {[['Our Courses', footerLinks.courses], ['Quick Links', footerLinks.quickLinks], ['Support', footerLinks.support]].map(([title, items], i) => (
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
                      <a href="#" className="hover:text-white transition-all duration-300 inline-block hover:translate-x-1">
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
              © {currentYear} Krishna Institute, Delhi. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text, idx) => (
                <a key={idx} href="#" className="text-white/80 hover:text-white transition">
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
    </>
  );
};

export default Footer;
