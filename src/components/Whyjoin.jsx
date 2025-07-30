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
    title: "Qualified & Supportive Faculty",
    desc: "Learn from domain experts who bring years of teaching experience and a commitment to student success.",
  },
  {
    icon: <BookOpen size={40} className="text-green-600" />,
    title: "Structured & Updated Syllabus",
    desc: "Courses designed with a balance of theory and application, aligned with the latest exam patterns.",
  },
  {
    icon: <ClipboardList size={40} className="text-green-600" />,
    title: "1:1 Mentorship & Doubt Clearing",
    desc: "Personalized support and regular interaction to track student progress and resolve queries effectively.",
  },
  {
    icon: <FileText size={40} className="text-green-600" />,
    title: "Mock Tests & Smart Resources",
    desc: "Access exam-ready notes, targeted tests, and revision strategies to improve performance and accuracy.",
  },
  {
    icon: <LineChart size={40} className="text-green-600" />,
    title: "Consistent Results & Toppers",
    desc: "Trusted by thousands for producing top ranks and consistent success in professional and competitive exams.",
  },
];

export default function WhyJoinSection() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-600 mb-10">
        Why Students Choose Us
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
