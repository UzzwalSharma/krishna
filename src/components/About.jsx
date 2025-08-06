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
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Section First */}
        <div className="mb-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center">
                <CardContent>
                  <img src={stat.icon} alt={stat.label} className="w-10 h-10 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-700">
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* About Content with Video + Text */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Video Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9">
             <img src="/krishna.jpg" alt="" srcset="" />
            </div>
          </motion.div>

          {/* Textual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
           Krishna Institute
            </h2>
            <span className="block text-xl sm:text-2xl font-semibold text-purple-700 mb-3">
              IRPO: Intensive Research & Practice Oriented Method
            </span>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Krishna Institute empowers aspirants with a unique blend of conceptual clarity, structured research, and continuous mentoring.
              Our IRPO approach ensures aspirants not only prepare smartly but also grow steadily with focused guidance, rigorous test series, and personalized support throughout the journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
