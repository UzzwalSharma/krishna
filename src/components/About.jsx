import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { icon: "/student.png", number: 10000, suffix: "+", label: "Students Trained" },
  { icon: "/trophy.png", number: 98, suffix: "%", label: "Success Rate" },
  { icon: "/book.png", number: 15, suffix: "+", label: "Courses Offered" },
  { icon: "/target.png", number: 25, suffix: "+", label: "Years Experience" },
];

function Card({ className = "", children }) {
  return (
    <div className={`bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg border border-blue-100 ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

// Counter component with animation
function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const ref = useRef();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const AboutSection = () => {
  return (
    <section id="about" className="py-20  relative overflow-hidden bg-gray-200">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-40 h-40 border border-blue-200 rounded-full opacity-30 bg-gray-600"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-60 h-60 border border-purple-200 rounded-full opacity-20 bg-gray-600"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-0">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 overflow-hidden group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-12 h-12 object-contain"
                    />
                  </motion.div>
                  <motion.h4 
                    className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                  >
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} duration={2 + index * 0.2} />
                  </motion.h4>
                  <p className="text-gray-600 font-semibold text-lg">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-gray-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          > 
            Academica 
          </motion.h2>
          <motion.span 
            className="block text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Best CA, CMS, IIT-JEE Coaching Classes in Delhi NCR
          </motion.span>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We are dedicated to providing world-class education and mentoring to
            help students achieve their academic goals and build successful careers.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* On mobile, image on right, content on left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col justify-center order-2 lg:order-1"
          >
            <h3 className="text-4xl font-black text-gray-800 leading-tight">
              Professional Excellence in Education
            </h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                With over 25 years of experience in competitive exam preparation,
                Academica has established itself as a leading coaching institute.
                Our expert faculty members bring years of industry experience and
                academic excellence to provide comprehensive education.
              </p>
              <p>
                We specialize in coaching for 9th, 10th, 11th, and 12th classes,
                along with professional courses like IIT-JEE, NEET, CA, CS, and
                CMA. Our proven methodology and personalized approach ensure that
                every student receives the attention they deserve.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Expert Faculty with Industry Experience",
                "Comprehensive Study Materials", 
                "Regular Mock Tests & Assessments",
                "Personal Mentoring & Guidance"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 font-medium text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-96 order-1 lg:order-2"
          >
            <div className="relative h-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl p-2">
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Full-size image */}
              <img
                src="/logo.jpg"
                alt="Quality Education"
                className="w-full h-full object-cover relative z-10"
              />

              {/* Animated SVG decorative elements */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-6 right-6 w-12 h-12 text-white/40 z-20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </motion.svg>

              <motion.svg
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 w-10 h-10 text-white/30 z-20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </motion.svg>

              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-6 w-8 h-8 text-white/20 z-20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </motion.svg>

              <motion.svg
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-8 w-6 h-6 text-white/25 z-20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10"/>
              </motion.svg>

              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-white/20 rounded-full z-20"
              />

              <motion.div
                animate={{ 
                  x: [0, 20, 0],
                  y: [0, -15, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/30 rounded-full z-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;