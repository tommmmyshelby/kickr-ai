import React from 'react';
import { motion } from 'framer-motion';

export default function MusicWave({ count = 4, color = "#fbbf24", size = "small" }) {
  const bars = Array.from({ length: count });
  const variants = {
    small: { width: "3px", minHeight: "6px", maxHeight: "20px" },
    large: { width: "4px", minHeight: "20px", maxHeight: "60px" }
  };
  const style = variants[size] || variants.small;

  return (
    <div className="flex items-end gap-[3px] h-[30px] justify-center">
      {bars.map((_, i) => (
        <motion.div
          key={i} className="rounded-full"
          style={{ width: style.width, backgroundColor: color }}
          animate={{ height: [style.minHeight, style.maxHeight, style.minHeight] }}
          transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}