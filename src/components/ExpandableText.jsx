import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ExpandableText({ text = "ABHINAV", middleText }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    // OPTIMIZED: Reduced height on mobile (h-[80px]) so it doesn't take up the whole screen
    <div 
      className="relative flex justify-center items-center w-full max-w-5xl mx-auto cursor-crosshair h-[80px] sm:h-[120px] md:h-[260px]"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      
      {text.split("").map((char, index) => {
        const isAnyHovered = hoveredIndex !== null;
        const distance = isAnyHovered ? Math.abs(hoveredIndex - index) : 0;

        let flexValue = 1;
        let weightValue = 100;
        let opacityValue = 0.75; 

        if (isAnyHovered) {
          if (distance === 0) {
            flexValue = 2.5; weightValue = 900; opacityValue = 1;
          } else if (distance === 1) {
            flexValue = 1.5; weightValue = 400; opacityValue = 0.6;
          } else {
            flexValue = 1; weightValue = 100; opacityValue = 0.25;
          }
        }

        return (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            layout
            animate={{ flex: flexValue }}
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
            className="flex items-center justify-center overflow-visible h-full"
          >
            <motion.span
              layout
              animate={{ fontWeight: weightValue, opacity: opacityValue }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              // OPTIMIZED: Dramatically reduced mobile text size (text-[40px]) to prevent line breaks!
              className="text-[40px] sm:text-[70px] md:text-[220px] text-white font-sans uppercase origin-center inline-block"
            >
              {char}
            </motion.span>
          </motion.div>
        );
      })}

      {middleText && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
        >
          {/* OPTIMIZED: Much smaller text and tracking on mobile so it doesn't run off the edges */}
          <span 
            className="text-accent text-[6px] sm:text-[9px] md:text-[14px] tracking-[0.1em] sm:tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold whitespace-nowrap"
            style={{
              textShadow: "0px 0px 8px #050505, 0px 0px 16px #050505, 0px 0px 24px #050505, 0px 0px 32px #050505"
            }}
          >
            {middleText}
          </span>
        </motion.div>
      )}

    </div>
  );
}