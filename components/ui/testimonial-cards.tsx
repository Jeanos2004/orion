"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

export function TestimonialCard ({ handleShuffle, testimonial, position, id, author }) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-2xl ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={`https://images.unsplash.com/photo-${id === 1 ? '1507003211169-0a1dd7228f2d' : id === 2 ? '1472099645785-5658abf4ff4e' : '1535713875002-d1d0cf377fde'}?w=400&h=400&fit=crop&crop=face`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-4 border-white/30 bg-white/20 object-cover shadow-lg"
      />
      <span className="text-center text-lg italic text-[#0077B6] drop-shadow-lg">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-[#0077B6] drop-shadow-md">{author}</span>
    </motion.div>
  );
};
