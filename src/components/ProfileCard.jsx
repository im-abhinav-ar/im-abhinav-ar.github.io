import React from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const ProfileCard = ({
  avatarUrl,
  name = 'ABHINAV A R',
  title = 'AI & Web Developer',
  handle = 'im-abhinav-ar',
  status = 'Open to Work',
  contactText = 'Contact Me',
}) => {
  // Motion values to track the mouse position for 3D tilt and glare
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const px = useMotionValue(50);
  const py = useMotionValue(50);

  // Springs make the movement buttery smooth
  const srx = useSpring(rx, { stiffness: 300, damping: 30 });
  const sry = useSpring(ry, { stiffness: 300, damping: 30 });

  // === THE MOBILE FIX: Use Pointer Events instead of Mouse Events ===
  const handlePointerMove = (e) => {
    // Ignore touch screens completely to prevent scroll trapping!
    if (e.pointerType !== "mouse") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate percentage for the glare effect
    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;
    px.set(xPct);
    py.set(yPct);

    // Calculate degrees for the 3D tilt (max 15 degrees)
    const tiltX = ((y / rect.height) - 0.5) * -15;
    const tiltY = ((x / rect.width) - 0.5) * 15;
    srx.set(tiltX);
    sry.set(tiltY);
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType !== "mouse") return;
    
    // Reset back to center when mouse leaves
    srx.set(0);
    sry.set(0);
    px.set(50);
    py.set(50);
  };

  // Templates to convert motion values into CSS properties
  const transform = useMotionTemplate`perspective(1000px) rotateX(${srx}deg) rotateY(${sry}deg)`;
  const glare = useMotionTemplate`radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.2) 0%, transparent 60%)`;
  const shadowGlow = useMotionTemplate`radial-gradient(circle at ${px}% ${py}%, rgba(192, 132, 252, 0.3) 0%, transparent 60%)`;

  return (
    <motion.div
      // Changed to Pointer events!
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ transform, transformStyle: "preserve-3d" }}
      className="relative w-full h-full rounded-[inherit] overflow-visible group"
    >
      {/* === MAIN CARD CONTAINER === */}
      <div className="absolute inset-0 rounded-[inherit] overflow-hidden bg-[#050505] border border-white/10 shadow-2xl">
        
        {/* 1. The Clear Profile Photo */}
        <img 
          src={avatarUrl} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
        />

        {/* 2. Dark Gradient Overlay (Makes text readable) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

        {/* 3. Interactive Glass Glare (Follows Mouse) */}
        <motion.div 
          style={{ background: glare }} 
          className="absolute inset-0 pointer-events-none mix-blend-overlay z-10" 
        />

        {/* 4. Text Content & UI Bar */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20 pointer-events-none"
        >
          <h3 className="font-bold text-3xl md:text-4xl text-white tracking-tight drop-shadow-md">{name}</h3>
          <p className="font-medium text-[#c084fc] text-sm md:text-base">{title}</p>
          
          <div className="mt-4 flex items-center justify-between backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-3 md:p-4 pointer-events-auto shadow-xl">
            <div className="flex flex-col">
              <span className="text-white/90 text-sm font-medium">@{handle}</span>
              <span className="text-emerald-400 text-xs flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {status}
              </span>
            </div>
            <a 
              href="mailto:abhinavrajan.ar@gmail.com" 
              className="bg-white text-black px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#c084fc] hover:text-white transition-colors duration-300"
            >
              {contactText}
            </a>
          </div>
        </div>
      </div>

      {/* === BACKLIGHT GLOW === */}
      <motion.div 
        style={{ background: shadowGlow }}
        className="absolute inset-0 -z-10 blur-[40px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
      />
    </motion.div>
  );
};

export default React.memo(ProfileCard);