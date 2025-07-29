import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// Card components
function Card({ className = "", children }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ className = "", children }) {
  return (
    <div className={`p-6 pb-0 ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children }) {
  return (
    <div className={`p-6 pt-4 ${className}`}>
      {children}
    </div>
  );
}

function CardTitle({ className = "", children }) {
  return (
    <h3 className={`text-xl font-bold mb-2 ${className}`}>
      {children}
    </h3>
  );
}

// Simple Button component
function Button({ className = "", size = "md", variant = "primary", children, ...props }) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg"
  };
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-white text-blue-700 border border-blue-600 hover:bg-blue-50",
    secondary: "bg-gray-100 text-blue-700 border border-blue-300 hover:bg-blue-50"
  };
  return (
    <button
      className={`rounded-lg font-semibold transition-all duration-200 shadow ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Simple Input component
function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${className}`}
      {...props}
    />
  );
}

// Simple Textarea component
function Textarea({ className = "", rows = 4, ...props }) {
  return (
    <textarea
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${className}`}
      rows={rows}
      {...props}
    />
  );
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Education Street", "Academic City, AC 12345"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 87654 32109"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@academica.edu", "admissions@academica.edu"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sun: 10:00 AM - 6:00 PM"],
    color: "from-orange-500 to-red-500"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Book <span className="bg-gradient-primary bg-clip-text">a Demo class For free!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your educational journey? Contact us for admissions, course inquiries, or any questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send us details of your intrested course!
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Course Interest</label>
                    <Input placeholder="Which course are you interested in?" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about your educational goals and any questions you have..."
                    rows={5}
                  />
                </div>

                <Button className="w-full btn-primary shadow-glow">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map or Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-card rounded-2xl p-12 shadow-soft">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their dreams with Academica. 
              Book a free counseling session today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Book Free Counseling
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;