import { motion } from 'framer-motion';
import ExpandableText from './ExpandableText';
import DecryptedText from './DecryptedText';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 2.5 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="h-[100dvh] w-full relative bg-transparent overflow-hidden flex items-center justify-center">
      
      <motion.div variants={container} initial="hidden" animate="show" className="absolute inset-0 w-full h-full pointer-events-none z-10">

        {/* --- TOP LEFT --- */}
        <motion.div variants={item} className="absolute top-24 sm:top-28 md:top-36 left-6 md:left-12 lg:left-24 flex items-center gap-2 md:gap-3 pointer-events-auto">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse shrink-0" />
          <DecryptedText 
            text="Open to new opportunities" 
            speed={60} maxIterations={10} sequential={true} animateOn="view" delay={2500}        
            className="text-gray-300 text-[8px] sm:text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.3em] font-bold uppercase drop-shadow-md leading-none pt-0.5"
            encryptedClassName="text-emerald-500/60 text-[8px] sm:text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.3em] font-bold uppercase font-mono drop-shadow-md leading-none pt-0.5"
          />
        </motion.div>

        {/* --- CENTER CLUSTER --- */}
        <div className="w-full h-full flex flex-col items-center justify-center pointer-events-auto px-2 pb-12 md:pb-0">
          <motion.div variants={item} className="mb-2 md:mb-6 max-w-full text-center flex justify-center">
            <DecryptedText 
              text="Cybersecurity • AI Developer • Web/App Developer" 
              speed={40} maxIterations={15} sequential={true} animateOn="view" delay={2700}        
              className="text-[#c084fc] text-[7.5px] sm:text-[10px] md:text-[14px] tracking-[0.05em] sm:tracking-[0.15em] md:tracking-[0.4em] uppercase font-bold text-center whitespace-nowrap font-['Sofia_Pro','Jost',_sans-serif] drop-shadow-md"
              encryptedClassName="text-[#8a2be2]/60 text-[7.5px] sm:text-[10px] md:text-[14px] tracking-[0.05em] sm:tracking-[0.15em] md:tracking-[0.4em] uppercase font-bold text-center whitespace-nowrap font-mono"
            />
          </motion.div>
          <motion.div variants={item} className="w-full">
            <ExpandableText text="ABHINAV" />
          </motion.div>
        </div>

        {/* --- BOTTOM WRAPPER (TEXT & BUTTONS) --- */}
        {/* FIXED: Pushed HIGHER up on mobile (bottom-32) to create a massive gap above the scroll indicator */}
        <div className="absolute bottom-32 md:bottom-16 left-0 w-full px-5 md:px-12 lg:px-24 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end pointer-events-auto text-center md:text-left">
          
          <motion.div variants={item} className="max-w-[340px] sm:max-w-sm md:max-w-md flex flex-col items-center md:items-start gap-1.5 mb-6 md:mb-0">
            <DecryptedText 
              text="AI & Web Developer" 
              speed={50} maxIterations={12} sequential={true} animateOn="view" delay={2900}       
              className="text-gray-200 text-[11px] sm:text-xs md:text-base font-semibold"
              encryptedClassName="text-[#c084fc]/60 text-[11px] sm:text-xs md:text-base font-semibold font-mono"
            />
            <DecryptedText 
              text="architecting fast, immersive, and intelligent data-driven digital products." 
              speed={30} maxIterations={8} sequential={true} animateOn="view" delay={3100}      
              className="text-gray-500 text-[10px] sm:text-xs md:text-base font-medium leading-[1.6]"
              encryptedClassName="text-gray-600/50 text-[10px] sm:text-xs md:text-base font-medium leading-[1.6] font-mono"
            />
          </motion.div>

          <motion.div variants={item} className="flex justify-center md:justify-end gap-3 w-full md:w-auto">
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="px-5 py-3 md:px-8 md:py-4 bg-white text-black text-[9px] md:text-sm font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300 whitespace-nowrap">
              View Projects
            </button>
            <a href="https://github.com/im-abhinav-ar" target="_blank" rel="noreferrer" className="px-5 py-3 md:px-8 md:py-4 border border-gray-600 text-white text-[9px] md:text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center whitespace-nowrap">
              GitHub
            </a>
          </motion.div>
        </div>

        {/* --- SCROLL INDICATOR --- */}
        {/* FIXED: Pinned firmly to the absolute bottom edge of the screen (bottom-4) on mobile! */}
        <motion.div variants={item} onClick={() => document.getElementById('future').scrollIntoView({ behavior: 'smooth' })} className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 cursor-pointer group pointer-events-auto">
          <div className="w-[18px] h-[30px] md:w-[26px] md:h-[40px] rounded-full border-2 border-white/20 group-hover:border-white/60 transition-colors duration-300 flex justify-center pt-1 md:pt-2">
            <motion.div animate={{ y: [0, 10], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }} className="w-[2px] md:w-[4px] h-[4px] md:h-[8px] bg-accent shadow-[0_0_10px_rgba(138,43,226,0.8)] rounded-full" />
          </div>
          <div className="flex flex-col items-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[7px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-white mt-1">Scroll</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}