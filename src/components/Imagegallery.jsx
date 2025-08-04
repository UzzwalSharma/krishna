import { motion } from "framer-motion";
import React from "react";

const images = [
  { url: "https://www.hindustantimes.com/ht-img/img/2024/01/19/550x309/03b6632f_1705658984848_1705658985010.jpg", title: "Campus Corridor" },
  { url: "https://cdn.dnaindia.com/sites/default/files/2018/06/23/696326-coaching1.jpg?im=FitAndFill=(1200,900)", title: "Smart Classroom" },
  { url: "https://cdn.dnaindia.com/sites/default/files/2018/06/23/696326-coaching1.jpg?im=FitAndFill=(1200,900)" },
  { url: "https://www.hindustantimes.com/ht-img/img/2024/01/19/550x309/03b6632f_1705658984848_1705658985010.jpg", title: "Cultural Event" },
 
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
