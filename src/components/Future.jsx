import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; 

export default function Future() {
  const { scrollY } = useScroll();
  const [vh, setVh] = useState(1000);

  useEffect(() => {
    setVh(window.innerHeight);
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const smoothY = useSpring(scrollY, { damping: 25, stiffness: 100, mass: 0.5 });

  const paraOpacity = useTransform(smoothY, [vh * 2.3, vh * 2.7], [0, 1]);
  const paraY = useTransform(smoothY, [vh * 2.3, vh * 2.7], [40, 0]);

  const indicatorOpacity = useTransform(smoothY, [vh * 0.8, vh * 1.1, vh * 1.2, vh * 1.4, vh * 2.3, vh * 2.6, vh * 3.1, vh * 3.4], [0, 1, 1, 0, 0, 1, 1, 0]);
  const indicatorPointerEvents = useTransform(smoothY, [vh * 0.8, vh * 1.1, vh * 1.2, vh * 1.4, vh * 2.3, vh * 2.6, vh * 3.1, vh * 3.4], ["none", "auto", "auto", "none", "none", "auto", "auto", "none"]);

  return (
    <section id="future" className="relative h-[350vh] bg-transparent z-20 pointer-events-none">
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden px-4 relative bg-transparent">
        
        {/* === THE REVEALED PARAGRAPH === */}
        <motion.div
          style={{ opacity: paraOpacity, y: paraY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-12 text-center z-20 pointer-events-auto"
        >
          <p className="text-[#c084fc] text-[8px] md:text-[11px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold mb-4 md:mb-10 font-['Sofia_Pro','Jost',_sans-serif] antialiased drop-shadow-md">
            Building LLM Workflows
          </p>
          
          <p className="text-[13px] sm:text-xl md:text-3xl lg:text-[34px] text-white/95 font-medium leading-[1.7] md:leading-[2] w-full max-w-[1100px] drop-shadow-2xl font-['Sofia_Pro','Jost',_sans-serif] antialiased px-2">
            I believe the future of technology is born at the intersection of <br className="hidden lg:block" />
            artificial intelligence and human intuition. Every pipeline optimized <br className="hidden lg:block" />
            and every line of code is an opportunity to create intelligent systems that <br className="hidden lg:block" />
            <span className="text-[#c084fc]">elevate human potential.</span>
          </p>
        </motion.div>

        {/* === THE FLYING TITLE === */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center w-full pointer-events-none z-30"
        >
          <h2 className="text-[24px] sm:text-[45px] md:text-[65px] lg:text-[80px] font-semibold text-white uppercase tracking-[0.1em] md:tracking-[0.15em] whitespace-nowrap drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] text-center pl-[0.1em] md:pl-[0.15em]">
          </h2>
        </motion.div>

        {/* === THE DYNAMIC SCROLL INDICATOR === */}
        <motion.div 
          style={{ opacity: indicatorOpacity, pointerEvents: indicatorPointerEvents }}
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-40 pointer-events-auto"
        >
          <div className="w-[18px] h-[30px] md:w-[24px] md:h-[38px] rounded-full border-2 border-white/20 group-hover:border-white/60 transition-colors duration-300 flex justify-center pt-1 md:pt-1.5">
            <motion.div animate={{ y: [0, 10], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }} className="w-[2px] md:w-[3px] h-[4px] md:h-[6px] bg-accent shadow-[0_0_10px_rgba(138,43,226,0.8)] rounded-full" />
          </div>
          <div className="flex flex-col items-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[7px] md:text-[9px] tracking-[0.3em] uppercase font-bold text-white mt-1">Scroll</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}><ChevronDown size={12} md:size={14} className="text-accent mt-1" /></motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}