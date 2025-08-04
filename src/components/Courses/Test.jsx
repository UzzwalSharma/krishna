import { motion } from 'framer-motion';
import { FileText, BarChart3, Trophy, Clock } from 'lucide-react';

// Card components
function Card({ className = "", children }) {
  return (
    <div className={`bg-white rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ className = "", children }) {
  return (
    <div className={`p-8 pb-0 ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children }) {
  return (
    <div className={`p-8 pt-4 ${className}`}>
      {children}
    </div>
  );
}

function CardTitle({ className = "", children }) {
  return (
    <h3 className={`text-2xl font-extrabold mb-2 text-blue-700 tracking-tight ${className}`}>
      {children}
    </h3>
  );
}

// Styled Button component
function Button({ className = "", size = "md", variant = "primary", children, ...props }) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg"
  };
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-lg",
    secondary: "bg-white text-blue-700 border border-blue-600 hover:bg-blue-50 shadow",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-blue-700 shadow"
  };
  return (
    <button
      className={`rounded-xl font-bold transition-all duration-200 ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

const testSeries = [
  {
    title: "PHP Practice Tests",
    description: "Assess your PHP skills with real-world coding challenges and quizzes.",
    tests: "20+ Tests",
    duration: "1–2 Hours Each",
    icon: FileText,
    features: [
      "Syntax & Functions",
      "Database (MySQL) Integration",
      "Web Application Scenarios",
      "Project-based Questions"
    ]
  },
  {
    title: "Java Coding Assessments",
    description: "Sharpen your Java programming with OOP, algorithms, and application-based tests.",
    tests: "25+ Tests",
    duration: "1–2 Hours Each",
    icon: BarChart3,
    features: [
      "OOP & Inheritance",
      "Data Structures",
      "Algorithmic Challenges",
      "Mini Project Evaluations"
    ]
  },
  {
    title: "C Language Quizzes",
    description: "Test your C fundamentals, memory management, and problem-solving skills.",
    tests: "15+ Tests",
    duration: "1 Hour Each",
    icon: Trophy,
    features: [
      "Pointers & Arrays",
      "File Handling",
      "Debugging Exercises",
      "Logic Building"
    ]
  },
  {
    title: "Python Skill Checks",
    description: "Evaluate your Python proficiency with hands-on coding and data tasks.",
    tests: "30+ Tests",
    duration: "1–2 Hours Each",
    icon: Clock,
    features: [
      "Syntax & Libraries",
      "Data Analysis",
      "Automation Scripts",
      "Project-based Scenarios"
    ]
  }
];


const TestSeriesSection = () => {
  return (
    <section id="test-series" className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 tracking-tight">
          Our Test Series
          </h2>
          <p className="text-xl text-blue-700/80 max-w-3xl mx-auto">
            Regular assessments and mock tests to track your progress and improve your performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {testSeries.map((test, index) => (
            <motion.div
              key={test.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="h-full group">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <test.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <CardTitle>
                    {test.title}
                  </CardTitle>
                  <p className="text-blue-700/80 font-medium mb-2">
                    {test.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex justify-between text-base text-blue-700/70 font-semibold">
                    <span className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      {test.tests}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      {test.duration}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {test.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-base">
                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        <span className="text-blue-700/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-4 shadow-blue-200 group-hover:shadow-lg">
                    Start Test Series
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-xl">
            <h3 className="text-3xl font-extrabold mb-4">
              Ready to Test Your Knowledge?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have improved their performance through our comprehensive test series.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 border-blue-700 hover:bg-blue-50 hover:text-blue-900">
                Start Free Test
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                View All Tests
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestSeriesSection;