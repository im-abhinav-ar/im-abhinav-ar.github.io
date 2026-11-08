import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import SmoothScroll from './components/SmoothScroll';
import BackgroundVisuals from './components/BackgroundVisuals';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Future from './components/Future';
import About from './components/About';
import Projects from './components/Projects';
import SkillsContact from './components/SkillsContact';
import CountUp from './components/CountUp';
import DockMenu from './components/DockMenu';
import ClickSpark from './components/ClickSpark';

function App() {
  const [isEntering, setIsEntering] = useState(true);

  return (
    <SmoothScroll>
      <ClickSpark sparkColor="#ffffff" sparkSize={12} sparkRadius={20} sparkCount={8} duration={600} />

      <AnimatePresence>
        {isEntering && (
          <motion.div
            key="preloader"
            exit={{ y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
          >
            <div className="flex flex-col items-center justify-center w-full max-w-sm px-6">
              <CountUp
                from={0}
                to={100}
                duration={2.2} 
                className="text-[90px] md:text-[140px] text-white font-jersey leading-none drop-shadow-md"
                onEnd={() => setTimeout(() => setIsEntering(false), 200)}
              />
              <div className="flex flex-col items-center w-full mt-4">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-gray-300 text-sm md:text-xl tracking-[0.5em] uppercase font-bold text-center pl-2"
                >
                  ABHINAV A R
                </motion.span>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
                  className="w-[80%] md:w-full h-[2px] bg-accent mt-4 origin-center shadow-[0_0_15px_rgba(138,43,226,0.6)]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed top-6 left-6 md:top-10 md:left-12 z-50 text-3xl md:text-4xl font-sans font-black tracking-tighter flex items-baseline hover:scale-105 transition-transform cursor-pointer outline-none"
        aria-label="Scroll to top"
      >
        <span className="text-accent">A</span>
        <span className="text-white">R</span>
        <span className="text-accent">.</span>
      </motion.button>
      
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
      >
        <DockMenu />
      </motion.div>
      
      {/* GLOBAL BACKGROUND VISUALS */}
      <BackgroundVisuals />

      {/* 
        FIXED: Removed the solid black `<div className="bg-[#050505]">` wrapper! 
        Now all components sit directly inside this transparent <main> tag, 
        meaning the 3D particles will be visible from the Paradigm section 
        all the way down to the Contact footer!
      */}
      <main className="relative z-10 w-full bg-transparent">
        <Hero />
        <Future />
        <About />
        <Projects />   
        <Experience /> 
        <SkillsContact />
      </main>

    </SmoothScroll>
  );
}

export default App;