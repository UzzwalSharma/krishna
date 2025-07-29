import { motion } from 'framer-motion';
import { Calculator, Microscope, TrendingUp, BookOpen, Clock, Users } from 'lucide-react';

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

const courses = [
  {
    id: 1,
    title: "IIT-JEE Preparation",
    description: "Comprehensive coaching for JEE Main & Advanced with expert faculty and proven methodology.",
    icon: Calculator,
    duration: "2 Years",
    students: "500+ Students",
    features: ["Physics, Chemistry, Mathematics", "Mock Tests & Analysis", "Doubt Clearing Sessions", "Study Materials"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "NEET Preparation",
    description: "Complete medical entrance preparation with focus on Biology, Chemistry, and Physics.",
    icon: Microscope,
    duration: "2 Years",
    students: "400+ Students",
    features: ["Biology, Chemistry, Physics", "NCERT Based Teaching", "Regular Assessments", "Medical Career Guidance"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "CA | CS | CMA",
    description: "Professional commerce courses with industry experts and practical training approach.",
    icon: TrendingUp,
    duration: "3-5 Years",
    students: "300+ Students",
    features: ["Foundation to Final", "Practical Training", "Industry Exposure", "Career Placement"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Class 9th & 10th",
    description: "Strong foundation building with CBSE, ICSE, and State Board curriculum coverage.",
    icon: BookOpen,
    duration: "2 Years",
    students: "800+ Students",
    features: ["All Subjects Coverage", "Regular Tests", "Parent-Teacher Meetings", "Career Counseling"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Class 11th & 12th",
    description: "Advanced level preparation for board exams and competitive exam foundation.",
    icon: BookOpen,
    duration: "2 Years",
    students: "600+ Students",
    features: ["PCM/PCB Streams", "Board Exam Focus", "Competitive Prep", "College Guidance"],
    color: "from-indigo-500 to-purple-500"
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
            Our <span className="bg-gradient-primary bg-clip-text text-black">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coaching programs designed to help students excel in their academic and professional careers.
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
                  {/* Gradient Background */}
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
                  {/* Course Info */}
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

                  {/* Features */}
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

                  {/* CTA Button */}
                  <Button className="w-full btn-primary group-hover:shadow-glow">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Professional Faculty with Industry Experience
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our experienced faculty members bring years of teaching expertise and industry knowledge to provide the best educational experience for our students.
            </p>
            <Button size="lg" className="btn-secondary">
              Meet Our Faculty
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;