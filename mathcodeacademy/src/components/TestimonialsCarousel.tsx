"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const data = [
  {
    name: "Parent – AP Calc AB",
    text: "My son moved from a 3 to a 5 in AP Calculus AB."
  },
  {
    name: "AP CSA Student",
    text: "Java finally made sense. Scored a 5!"
  }
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mt-20">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-6 rounded-xl max-w-xl mx-auto"
      >
        <p className="mb-4">“{data[index].text}”</p>
        <p className="font-semibold">{data[index].name}</p>
      </motion.div>
    </div>
  );
}
