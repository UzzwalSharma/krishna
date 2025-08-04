import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/Gemini_Generated_Image_5274gb5274gb5274.png",
    title: null,
    subtitle: null,
    description: null,
  },
  {
    src: "https://cf.academycheck.com/c/nirvana-ias-academy-rohini-delhi-feature-slide-2-1730056505577c.webp",
    title: "Excellence in Education",
    subtitle: "Nurturing Future Leaders",
    description:
      "Empowering students with comprehensive learning programs designed to unlock their full potential and achieve academic excellence.",
  },
  {
    src: "https://cf.academycheck.com/c/nirvana-ias-academy-tilak-nagar-delhi-feature-slide-3-1730066984231c.webp",
    title: "Proven Results",
    subtitle: "Track Record of Success",
    description:
      "Join thousands of successful students who have achieved their dreams through our innovative teaching methodologies and personalized guidance.",
  },
  {
    src: "https://content.jdmagicbox.com/comp/kottayam/j6/9999px481.x481.180914133703.t4j6/catalogue/smart-tech-computer-academy-and-tuition-centre-peruva-kottayam-0xr5iubhof.jpg",
    title: "Modern Approach",
    subtitle: "Technology-Enhanced Learning",
    description:
      "Experience cutting-edge educational technology combined with traditional teaching excellence to create an optimal learning environment.",
  },
];

export default function ProfessionalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setProgress(0);
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 60);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative w-screen h-[85vh] sm:h-[85vh] h-[50vw] min-h-[220px] max-h-[400px] sm:max-h-none overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.7, ease: "easeInOut" },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <motion.img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain sm:object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {images[currentIndex].title && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6 sm:px-12"
            >
              <div className="max-w-5xl text-white">
                <motion.h1
                  custom={0}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight"
                >
                  {images[currentIndex].title}
                </motion.h1>
                <motion.p
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl sm:text-2xl lg:text-3xl mb-4 text-gray-200"
                >
                  {images[currentIndex].subtitle}
                </motion.p>
                <motion.p
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-sm sm:text-lg lg:text-xl text-gray-300"
                >
                  {images[currentIndex].description}
                </motion.p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
