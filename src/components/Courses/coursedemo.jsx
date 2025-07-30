import { motion } from 'framer-motion';
import { BookOpenCheck, FileText, LibraryBig, Landmark, Users, Clock } from 'lucide-react';

// Card components (unchanged)
function Card({ className = "", children }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ className = "", children }) {
  return <div className={`p-6 pb-0 ${className}`}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={`p-6 pt-4 ${className}`}>{children}</div>;
}

function CardTitle({ className = "", children }) {
  return <h3 className={`text-xl font-bold mb-2 ${className}`}>{children}</h3>;
}

function Button({ className = "", size = "md", children, ...props }) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg"
  };
  return (
    <button
      className={`rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow ${sizeClasses[size] || sizeClasses.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Updated UPSC-focused courses
const courses = [
  {
    id: 1,
    title: "Foundation Course (GS + CSAT)",
    description: "Comprehensive coverage of General Studies and CSAT for beginners and undergraduates.",
    icon: Landmark,
    duration: "12 Months",
    students: "1000+ Enrolled",
    features: ["NCERT to Advanced", "Daily Answer Writing", "CSAT Focused Practice", "Mentorship Sessions"],
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: 2,
    title: "Prelims Crash Course",
    description: "Intensive revision program covering static and current affairs topics for Prelims.",
    icon: BookOpenCheck,
    duration: "3 Months",
    students: "800+ Enrolled",
    features: ["Mock Tests Series", "Current Affairs Capsules", "PYQ Analysis", "Revision Notes"],
    color: "from-yellow-500 to-amber-500"
  },
  {
    id: 3,
    title: "Mains Answer Writing",
    description: "Structured daily answer writing practice with feedback and model answers.",
    icon: FileText,
    duration: "4 Months",
    students: "600+ Enrolled",
    features: ["Daily Questions", "Model Answers", "Review & Feedback", "Essay Writing Support"],
    color: "from-rose-500 to-pink-500"
  },
  {
    id: 4,
    title: "Optional Subject Coaching",
    description: "Focused preparation for Optional subjects with expert faculty guidance.",
    icon: LibraryBig,
    duration: "5 Months",
    students: "400+ Enrolled",
    features: ["Popular Optionals Covered", "Notes & Test Series", "Conceptual Clarity", "Personal Mentorship"],
    color: "from-purple-600 to-indigo-600"
  },
  {
    id: 5,
    title: "Interview Guidance Program",
    description: "DAF analysis, mock interviews, and panel mentoring for UPSC Personality Test.",
    icon: Users,
    duration: "1 Month",
    students: "150+ Candidates",
    features: ["One-on-One Mock Interviews", "DAF Based Questions", "Communication Coaching", "Panel Feedback"],
    color: "from-green-600 to-emerald-500"
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-black">UPSC Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategically designed courses for every stage of the UPSC Civil Services Examination — from foundation to interview.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="h-full hover:shadow-card transition-all duration-300 hover:scale-105 overflow-hidden group">
                <CardHeader className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center mb-4`}>
                      <course.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {course.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {course.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Course Features:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full btn-primary group-hover:shadow-glow">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Learn from the Best in Civil Services Preparation
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert faculty, mentorship support, and strategic modules are tailored to help aspirants succeed in every stage of the UPSC exam.
            </p>
            <Button size="lg" className="btn-secondary">
              Meet Our Mentors
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
