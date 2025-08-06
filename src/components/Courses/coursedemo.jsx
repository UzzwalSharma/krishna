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

// Updated general courses
const courses = [
  {
    id: 1,
    title: "Accountancy",
    description: "Master the fundamentals of accounting, financial statements, and business transactions.",
    icon: Landmark,
    duration: "3 Months",
    students: "800+ Enrolled",
    features: [
      "Basic Principles of Accounting",
      "Financial Statements Analysis",
      "Ledger & Journal Entries",
      "Project: Company Accounts"
    ],
    color: "from-indigo-600 to-blue-500"
  },
  {
    id: 2,
    title: "Chemistry",
    description: "Explore the world of atoms, molecules, reactions, and laboratory techniques.",
    icon: BookOpenCheck,
    duration: "4 Months",
    students: "950+ Enrolled",
    features: [
      "Organic & Inorganic Chemistry",
      "Chemical Reactions",
      "Lab Experiments",
      "Project: Chemistry in Daily Life"
    ],
    color: "from-green-600 to-emerald-500"
  },
  {
    id: 3,
    title: "Mathematics",
    description: "Strengthen your problem-solving skills with algebra, calculus, and geometry.",
    icon: FileText,
    duration: "3 Months",
    students: "1100+ Enrolled",
    features: [
      "Algebra & Trigonometry",
      "Calculus Basics",
      "Geometry & Statistics",
      "Project: Real-life Applications"
    ],
    color: "from-orange-500 to-amber-500"
  },
  {
    id: 4,
    title: "Economics",
    description: "Understand economic principles, markets, and financial systems.",
    icon: LibraryBig,
    duration: "2 Months",
    students: "700+ Enrolled",
    features: [
      "Micro & Macro Economics",
      "Market Structures",
      "Indian Economy",
      "Project: Economic Survey"
    ],
    color: "from-blue-700 to-cyan-600"
  }
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
            Our <span className="bg-gradient-primary bg-clip-text text-black">offered Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategically designed courses for every stage of your academic journey — from basics to advanced projects.
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
              Learn from the Best in Programming Education
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert instructors, hands-on projects, and comprehensive curriculum are tailored to help you succeed in your programming career.
            </p>
            <Button size="lg" className="btn-secondary">
              Meet Our Instructors
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
