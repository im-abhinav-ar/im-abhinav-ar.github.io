import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import LightRays from './LightRays'; 
import Particles from './Particles'; 

export default function BackgroundVisuals() {
  const { scrollY } = useScroll();
  const [vh, setVh] = useState(1000);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setVh(window.innerHeight);
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => {
      setVh(window.innerHeight);
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const smoothY = useSpring(scrollY, { damping: 25, stiffness: 100, mass: 0.5 });

  // --- SCROLL SYNC ---
  const cardY = useTransform(smoothY, [0, vh], ["100vh", "0vh"]);

  // --- EXPANDING CARD MATH ---
  // FIXED: Changed "100vw" and "100vh" to "100%" to prevent scrollbar line bugs!
  const cardWidth = useTransform(smoothY, [vh * 1.1, vh * 2.2], [isMobile ? "85%" : "40%", "100%"]);
  const cardHeight = useTransform(smoothY, [vh * 1.1, vh * 2.2], [isMobile ? "40%" : "50%", "100%"]);
  const cardRadius = useTransform(smoothY, [vh * 1.1, vh * 2.2], ["24px", "0px"]);

  // We smoothly fade the background color, border, and shadows to 0 so the box vanishes completely
  const cardBorderColor = useTransform(smoothY, [vh * 1.8, vh * 2.2], ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0)"]);
  const cardBg = useTransform(smoothY, [vh * 1.8, vh * 2.2], ["rgba(5, 5, 5, 0.8)", "rgba(5, 5, 5, 0)"]);
  const cardShadow = useTransform(smoothY, [vh * 1.8, vh * 2.2], ["0px 0px 80px rgba(192,132,252,0.15)", "0px 0px 0px rgba(192,132,252,0)"]);

  // The Light Rays and Text fade out in sync
  const titleScale = useTransform(smoothY, [vh * 1.1, vh * 2.2], [1, 5]);
  const titleOpacity = useTransform(smoothY, [vh * 1.5, vh * 2.1], [1, 0]);
  const raysOpacity = useTransform(smoothY, [vh * 1.5, vh * 2.2], [1, 0]);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505]">
      
      {/* === LAYER 1: THE LIGHT RAYS === */}
      <motion.div style={{ opacity: raysOpacity }} className="absolute inset-0 z-0">
        <LightRays 
          raysColor="#c084fc"      
          raysOrigin="top-center"  
          raysSpeed={1.5}          
          lightSpread={2.5}
          rayLength={3.5}
          pulsating={true}         
          followMouse={true}       
          mouseInfluence={0.5}
          noiseAmount={0.05}       
        />
      </motion.div>

      {/* === LAYER 2: THE SYNCED CARD & TEXT WRAPPER === */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        
        {/* THE 3D PARTICLE CARD */}
        <motion.div 
          style={{ 
            width: cardWidth, 
            height: cardHeight, 
            borderRadius: cardRadius,
            y: cardY,
            backgroundColor: cardBg,
            borderColor: cardBorderColor,
            boxShadow: cardShadow,
            borderWidth: "1px",
            borderStyle: "solid"
          }}
          className="relative overflow-hidden pointer-events-auto will-change-transform backdrop-blur-md"
        >
          <div className="absolute inset-0 z-0">
            <Particles
              particleColors={['#ffffff', '#c084fc', '#e9d5ff']} 
              particleCount={500}          
              particleSpread={25}          
              speed={0.15}
              particleBaseSize={90}        
              moveParticlesOnHover={true}
              particleHoverFactor={3.0}    
              alphaParticles={true}
            />
          </div>
          
          {/* FIXED: Completely deleted the dark gradient overlay that was causing the lines! */}
          
        </motion.div>

        {/* THE FLYING TITLE */}
        <motion.div 
          style={{ 
            scale: titleScale, 
            opacity: titleOpacity,
            y: cardY 
          }}
          className="absolute inset-0 flex items-center justify-center w-full z-30 pointer-events-none"
        >
          <h2 className="text-[35px] sm:text-[60px] md:text-[85px] lg:text-[110px] font-bold text-white uppercase tracking-[0.15em] whitespace-nowrap drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] text-center pl-[0.15em]">
            THE PARADIGM
          </h2>
        </motion.div>

      </div>
      
    </div>
  );
}