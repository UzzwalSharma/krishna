import { motion } from "framer-motion";
import React from "react";

const images = [
  { url: "https://cf.academycheck.com/c/nirvana-ias-academy-tilak-nagar-delhi-feature-slide-3-1730066984231c.webp", title: "Campus Corridor" },
  { url: "https://lh3.googleusercontent.com/p/AF1QipNtQG3hxtZI78UQenEdcyEyvfuwpgIsAJfP4jmy=s1360-w1360-h1020-rw", title: "Smart Classroom" },
  { url: "https://lh3.googleusercontent.com/p/AF1QipOJYH8KCZTRdlIs7A1zgSv9bQXKIUclavRsyCHu=s1360-w1360-h1020-rw" },
  { url: "http://cf.academycheck.com/c/nirvana-ias-academy-tilak-nagar-delhi-thumb-1730066984231c.webp", title: "Cultural Event" },
 
];

const ImageGallery = () => {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-10">Image Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.p
                className="text-white text-lg font-semibold"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {img.title}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
