import { motion } from "framer-motion";
import React from "react";

const images = [
  { url: "https://content.jdmagicbox.com//comp/delhi/f6/011pxx11.xx11.211018145355.x2f6/menu/academica-institute-raj-nagar-ghaziabad-ghaziabad-tutorials-6fknzly.jpg", title: "Campus Corridor" },
  { url: "https://content.jdmagicbox.com/v2/comp/delhi/e3/011pxx11.xx11.231201143200.n6e3/catalogue/academica-institute-ghaziabad-tutorials-oefz7o2ps4.jpg", title: "Smart Classroom" },
  { url: "https://5.imimg.com/data5/GLADMIN/Default/2023/12/371509112/UE/DO/MK/139864692/cma-classes.jpg" },
  { url: "https://image-static.collegedunia.com/public/image/institute/album_17317425342024-10-03.jpg", title: "Cultural Event" },
 
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
