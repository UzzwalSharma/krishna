import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // or use any close icon

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500); // opens after 0.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-[90vw] max-w-[500px] rounded-xl overflow-hidden bg-white shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {/* Image */}
            <img
              src="/Gemini_Generated_Image_e2flvhe2flvhe2fl.png"
              alt="Popup"
              className="w-full h-auto object-cover"
            />

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1  transition hover:bg-red-600"
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
