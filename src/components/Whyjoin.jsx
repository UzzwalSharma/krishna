import { motion } from "framer-motion";
import {
  UserCheck,
  BookOpen,
  ClipboardList,
  FileText,
  LineChart,
} from "lucide-react";

const features = [
  {
    icon: <UserCheck size={40} className="text-green-600" />,
    title: "Expert Faculty",
    desc: "Learn from highly qualified and experienced teachers specializing in CA, CMA, CS, ACCA, and competitive exams.",
  },
  {
    icon: <BookOpen size={40} className="text-green-600" />,
    title: "Comprehensive Curriculum",
    desc: "Well-structured courses designed for conceptual clarity and exam success.",
  },
  {
    icon: <ClipboardList size={40} className="text-green-600" />,
    title: "Personalized Guidance",
    desc: "Individual doubt-solving sessions and mentorship to ensure student progress.",
  },
  {
    icon: <FileText size={40} className="text-green-600" />,
    title: "Mock Tests & Study Material",
    desc: "Regular tests, updated notes, and exam-oriented resources for effective preparation.",
  },
  {
    icon: <LineChart size={40} className="text-green-600" />,
    title: "Proven Track Record",
    desc: "High success rates in CA, CMA, CS, ACCA, and competitive exams.",
  },
];

export default function WhyJoinSection() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-600 mb-10">
        Why Students Want to Join Us
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center text-center gap-4">
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
